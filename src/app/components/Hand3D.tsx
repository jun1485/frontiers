import React, { useState, useRef, useEffect } from "react";
import { Canvas, ThreeEvent, useThree } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import Card3D from "./Card3D";
import type { CardData } from "@/app/api/cards/route";

interface Hand3DProps {
  cards: CardData[];
  onCardUse: (cardId: string) => void;
}

// 드래그 상태를 관리하기 위한 인터페이스
interface DragState {
  isDragging: boolean;
  cardIndex: number | null;
  startPosition: [number, number] | null;
}

// 변경된 코드: 카드 배치 상수 정의
const CARD_SPREAD_RADIUS = 4; // 원호 반지름 증가
const CAMERA_DISTANCE = 12; // 카메라 거리 증가

// 전역 상태 관리를 위한 컨텍스트 컴포넌트
function HandScene({
  cards,
  dragState,
  usedCardIndex,
  onDragStart,
  onDragEnd,
}: {
  cards: CardData[];
  dragState: DragState;
  usedCardIndex: number | null;
  onDragStart: (index: number, event: ThreeEvent<PointerEvent>) => void;
  onDragEnd: (event: ThreeEvent<PointerEvent>) => void;
}) {
  const { camera, raycaster, mouse, scene } = useThree();

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 4, CAMERA_DISTANCE]}
        fov={45}
      />

      {/* 조명 설정 - 강도 증가 */}
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* 환경광 */}
      <Environment preset="lobby" />

      {/* 상단 드래그 타겟 영역 */}
      <mesh
        position={[0, 3, 0]}
        rotation={[0, 0, 0]}
        visible={false}
        name="dropTarget"
      >
        <boxGeometry args={[12, 6, 5]} />
        <meshBasicMaterial color="red" opacity={0.0} transparent />
      </mesh>

      {/* 카드 배치 */}
      {cards.map((card, index) => {
        // 변경된 코드: 부채꼴 모양 카드 배치 조정 - 더 넓게 배치
        const cardCount = cards.length;

        // 변경된 코드: 카드 각도 크게 증가 - 카드 간 겹침 방지
        // 카드 개수에 따라 동적으로 각도 조절
        const totalAngle = Math.min(180, 20 * cardCount); // 최대 180도까지 제한
        const angleStep = totalAngle / Math.max(1, cardCount - 1); // 카드 간 각도

        // 시작 각도 계산 (부채꼴의 왼쪽 끝)
        const baseAngle = -totalAngle / 2;
        // 현재 카드의 각도 계산
        const angle = (baseAngle + index * angleStep) * (Math.PI / 180);

        // 카드 위치 계산 (원호 형태) - 반지름 증가
        const xPos = Math.sin(angle) * CARD_SPREAD_RADIUS;
        const zPos = -Math.cos(angle) * CARD_SPREAD_RADIUS;

        // 카드가 부자연스럽게 평평하지 않도록 Y 위치 조정
        // 가운데 카드는 높게, 양 끝 카드는 낮게 배치
        const normalizedIndex = index / (cardCount - 1 || 1); // 0~1 사이 값
        const yPosCurve = -Math.pow(normalizedIndex * 2 - 1, 2) + 1; // 포물선 형태 (가운데 높고 양쪽 낮음)
        const yPos = -0.7 + yPosCurve * 0.4; // 기본 높이를 약간 낮추고 곡선 추가

        // 카드 회전 - 항상 카메라를 향하도록 하되 약간의 각도 추가
        const rotationY = angle;
        // 카드가 약간 위를 향하도록 X축 회전 추가
        const rotationX = -0.2;

        // 드래그 상태에 따라 위치 조정
        const isDragging =
          dragState.isDragging && dragState.cardIndex === index;
        const isUsed = usedCardIndex === index;

        return (
          <Card3D
            key={card.id}
            card={card}
            position={[xPos, yPos, zPos]}
            rotation={[rotationX, rotationY, 0]}
            onDragStart={(e) => onDragStart(index, e)}
            onDragEnd={onDragEnd}
            isDragging={isDragging}
            isUsed={isUsed}
          />
        );
      })}
    </>
  );
}

const Hand3D: React.FC<Hand3DProps> = ({ cards, onCardUse }) => {
  // 드래그 상태 관리
  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    cardIndex: null,
    startPosition: null,
  });

  // 카드가 사용됨을 나타내는 상태
  const [usedCardIndex, setUsedCardIndex] = useState<number | null>(null);

  // 드래그 위치 디버그 상태
  const [dragDebug, setDragDebug] = useState<{ x: number; y: number } | null>(
    null
  );

  // 카드 사용 가능 상태
  const [canUseCard, setCanUseCard] = useState(false);

  // ref를 사용하여 현재 드래그 중인 카드 인덱스 추적
  const currentDraggedCardIndex = useRef<number | null>(null);

  // 드래그 시작 핸들러
  const handleDragStart = (index: number, event: ThreeEvent<PointerEvent>) => {
    console.log("드래그 시작:", index);

    // ref에 현재 드래그 중인 카드 인덱스 저장
    currentDraggedCardIndex.current = index;

    setDragState({
      isDragging: true,
      cardIndex: index,
      startPosition: [event.point.x, event.point.y],
    });

    // 드래그 시작 시 카드 사용 가능 상태 초기화
    setCanUseCard(false);
  };

  // useEffect를 사용하여 전역 마우스 업 이벤트 감지
  useEffect(() => {
    const handleMouseUp = (e: MouseEvent) => {
      if (dragState.isDragging && dragState.cardIndex !== null) {
        console.log("전역 마우스 업 이벤트:", e.clientY);

        // Three.js 캔버스 영역 가져오기
        const canvas = document.querySelector("canvas");
        if (canvas) {
          const rect = canvas.getBoundingClientRect();
          const relativeY = (e.clientY - rect.top) / rect.height;

          // 변경된 코드: 드롭 영역 확장 - 상단 절반까지
          if (relativeY < 0.5) {
            console.log("카드 사용 영역에서 드롭됨");
            useSelectedCard();
          }
        }

        // 드래그 상태 초기화
        resetDragState();
      }
    };

    // 포인터 이벤트 사용 (터치 포함)
    window.addEventListener("pointerup", handleMouseUp);

    return () => {
      window.removeEventListener("pointerup", handleMouseUp);
    };
  }, [dragState, cards]); // 의존성 배열에 dragState와 cards 추가

  // 드래그 상태 초기화 함수
  const resetDragState = () => {
    console.log("드래그 상태 초기화");
    currentDraggedCardIndex.current = null;
    setDragState({
      isDragging: false,
      cardIndex: null,
      startPosition: null,
    });
  };

  // 선택된 카드 사용 함수
  const useSelectedCard = () => {
    if (dragState.cardIndex === null) return;

    console.log("카드 사용 함수 호출:", dragState.cardIndex);
    const cardId = cards[dragState.cardIndex].id;
    setUsedCardIndex(dragState.cardIndex);

    // 애니메이션 효과를 위해 약간의 지연 후 카드 사용
    setTimeout(() => {
      onCardUse(cardId);
      setUsedCardIndex(null);
      setDragDebug(null);
    }, 300);
  };

  // 드래그 종료 핸들러 (Three.js 내부에서 호출됨)
  const handleDragEnd = (event: ThreeEvent<PointerEvent>) => {
    if (dragState.isDragging && dragState.cardIndex !== null) {
      console.log("드래그 종료 Three.js:", event.point.y);

      // 드래그 종료 위치 디버깅 저장
      setDragDebug({ x: event.point.x, y: event.point.y });

      // 드롭 조건 완화 - 더 낮은 y 값에서도 드롭 가능
      if (event.point.y > 0) {
        console.log("Three.js 내부에서 카드 사용 조건 충족");
        useSelectedCard();
      }
    }

    // 추가 확인 없이 항상 드래그 상태 초기화
    resetDragState();
  };

  return (
    <div className="w-full h-[350px] bg-gray-900 rounded-lg relative">
      <div className="w-full h-full">
        <Canvas shadows>
          <HandScene
            cards={cards}
            dragState={dragState}
            usedCardIndex={usedCardIndex}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
        </Canvas>
      </div>

      {/* 안내 텍스트 */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm">
        카드를 위로 드래그하여 사용하세요
      </div>

      {dragDebug && (
        <div className="absolute bottom-0 right-0 text-xs text-white bg-black/50 p-1">
          드래그 좌표: x:{dragDebug.x.toFixed(1)}, y:{dragDebug.y.toFixed(1)}
          {dragState.isDragging && ` / 드래그 중: #${dragState.cardIndex}`}
        </div>
      )}
    </div>
  );
};

export default Hand3D;
