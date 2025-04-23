import React, { useRef, useState, useEffect } from "react";
import { useFrame, ThreeEvent } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { Mesh, Vector3 } from "three";
import type { CardData } from "@/app/api/cards/route";

interface Card3DProps {
  card: CardData;
  position: [number, number, number];
  rotation: [number, number, number];
  onDragStart?: (event: ThreeEvent<PointerEvent>) => void;
  onDragEnd?: (event: ThreeEvent<PointerEvent>) => void;
  isDragging?: boolean;
  isUsed?: boolean;
}

// 카드 유형별 색상 정의
const cardColors = {
  Attack: "#ff5555", // 공격 카드는 빨간색
  Skill: "#55aaff", // 스킬 카드는 파란색
  Power: "#aa55ff", // 파워 카드는 보라색
  default: "#888888", // 기본값
};

// 변경된 코드: 카드 사이즈 상수 정의
const CARD_WIDTH = 3.0;
const CARD_HEIGHT = 4.2;
const CARD_DEPTH = 0.12;

const Card3D: React.FC<Card3DProps> = ({
  card,
  position,
  rotation,
  onDragStart,
  onDragEnd,
  isDragging = false,
  isUsed = false,
}) => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [dragProgress, setDragProgress] = useState(0);

  // 초기 위치 저장
  const initialPosition = useRef(
    new Vector3(position[0], position[1], position[2])
  );

  // 드래그 상태 관리를 위한 로컬 참조
  const dragStarted = useRef(false);

  // 변경된 코드: 마우스 위치 오프셋 저장
  const dragOffset = useRef<{ x: number; y: number } | null>(null);

  // 디버깅을 위한 로깅
  useEffect(() => {
    console.log(`카드 ${card.name}(${card.id}) 드래그 상태: ${isDragging}`);
  }, [isDragging, card.id, card.name]);

  // 마우스 이벤트 핸들러
  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    if (onDragStart) {
      console.log(`카드 ${card.name} 포인터 다운 이벤트 발생`);
      e.stopPropagation();
      document.body.style.cursor = "grabbing";

      // 드래그 시작 상태 설정
      dragStarted.current = true;

      // 변경된 코드: 마우스와 카드 사이의 오프셋 계산
      if (meshRef.current) {
        dragOffset.current = {
          x: meshRef.current.position.x - e.point.x,
          y: meshRef.current.position.y - e.point.y,
        };
      }

      // 부모 컴포넌트에 드래그 시작 알림
      onDragStart(e);
    }
  };

  const handlePointerUp = (e: ThreeEvent<PointerEvent>) => {
    console.log(
      `카드 ${card.name} 포인터 업 이벤트 발생, 드래그 상태: ${isDragging}`
    );

    // 드래그 중이고 포인터 업 이벤트가 발생했을 때만 처리
    if (isDragging && onDragEnd) {
      e.stopPropagation();
      document.body.style.cursor = "auto";

      console.log(`카드 ${card.name} 드래그 종료 이벤트 전달`);
      onDragEnd(e);
    }

    // 항상 커서와 로컬 드래그 상태 초기화
    document.body.style.cursor = hovered ? "grab" : "auto";
    dragStarted.current = false;
    dragOffset.current = null;
  };

  // 전역 포인터 업 이벤트 핸들러
  useEffect(() => {
    const handleGlobalPointerUp = () => {
      if (isDragging) {
        console.log(`카드 ${card.name} 전역 포인터 업 감지`);
        document.body.style.cursor = "auto";
        dragStarted.current = false;
        dragOffset.current = null;
      }
    };

    window.addEventListener("pointerup", handleGlobalPointerUp);
    return () => {
      window.removeEventListener("pointerup", handleGlobalPointerUp);
    };
  }, [isDragging, card.name]);

  // 호버 효과
  const handlePointerEnter = () => {
    if (!isDragging) {
      document.body.style.cursor = "grab";
      setHovered(true);
    }
  };

  const handlePointerLeave = () => {
    if (!isDragging) {
      document.body.style.cursor = "auto";
      setHovered(false);
    }
  };

  // 애니메이션 및 드래그 효과
  useFrame((state) => {
    if (!meshRef.current) return;

    if (isDragging) {
      // 드래그 중일 때 애니메이션
      const mouseY = state.mouse.y;
      const mouseX = state.mouse.x;

      // 변경된 코드: 마우스 오프셋을 고려한 카드 위치 계산
      // 화면 y축 좌표는 -1(맨 아래)부터 1(맨 위)까지임
      // 마우스를 기준으로 카드가 살짝 위에 위치하도록 0.7을 더해 조정
      const targetY = mouseY * 2 + 0.7; // 마우스와 카드 사이 거리 감소

      // X축 위치는 오프셋을 유지하며 마우스를 따라감
      const targetX = position[0] + mouseX * 1.5;

      // 부드러운 이동 (가중치 조정으로 더 빠른 반응)
      meshRef.current.position.y =
        meshRef.current.position.y * 0.7 + targetY * 0.3;
      meshRef.current.position.x =
        meshRef.current.position.x * 0.7 + targetX * 0.3;

      // 회전 효과
      meshRef.current.rotation.x = mouseY * 0.3;
      meshRef.current.rotation.z = -mouseX * 0.15;

      // 드래그 진행도 계산
      const dragHeight = meshRef.current.position.y;
      if (dragHeight > 0) {
        const newProgress = Math.min(1, dragHeight / 2.5); // 낮은 높이에서도 완료 가능
        setDragProgress(newProgress);
      } else {
        setDragProgress(0);
      }
    } else if (isUsed) {
      // 카드 사용 애니메이션
      meshRef.current.position.y += 0.3;
      meshRef.current.position.z -= 0.2;
      meshRef.current.rotation.x += 0.1;
      meshRef.current.scale.x *= 0.95;
      meshRef.current.scale.y *= 0.95;
      meshRef.current.scale.z *= 0.95;
    } else if (hovered) {
      // 호버 애니메이션
      meshRef.current.position.y = position[1] + 0.3;
      meshRef.current.rotation.z = Math.sin(Date.now() * 0.001) * 0.05;
    } else {
      // 기본 위치로 복귀
      meshRef.current.position.y =
        meshRef.current.position.y * 0.9 + position[1] * 0.1;
      meshRef.current.position.x =
        meshRef.current.position.x * 0.9 + position[0] * 0.1;
      meshRef.current.position.z =
        meshRef.current.position.z * 0.9 + position[2] * 0.1;
      meshRef.current.rotation.z = meshRef.current.rotation.z * 0.9;
      meshRef.current.rotation.x = meshRef.current.rotation.x * 0.9;
      meshRef.current.scale.x = meshRef.current.scale.x * 0.9 + 1 * 0.1;
      meshRef.current.scale.y = meshRef.current.scale.y * 0.9 + 1 * 0.1;
      meshRef.current.scale.z = meshRef.current.scale.z * 0.9 + 1 * 0.1;

      // 드래그 진행도 초기화
      setDragProgress(0);
    }
  });

  // 시각적 효과를 위한 색상 계산
  const cardColor =
    cardColors[card.type as keyof typeof cardColors] || cardColors.default;

  const emissiveColor = isDragging
    ? `rgb(${Math.floor(100 + 155 * dragProgress)}, ${Math.floor(
        100 + 155 * (1 - dragProgress)
      )}, 100)`
    : hovered
    ? cardColor
    : "#000000";

  const emissiveIntensity = isDragging
    ? 0.3 + dragProgress * 0.5
    : hovered
    ? 0.3
    : 0;

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      onPointerOver={handlePointerEnter}
      onPointerOut={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      // 추가 이벤트 핸들러 등록
      onPointerCancel={handlePointerUp}
      scale={hovered && !isDragging ? [1.1, 1.1, 1.1] : [1, 1, 1]}
    >
      {/* 변경된 코드: 카드 본체 - 크기 증가 */}
      <boxGeometry args={[CARD_WIDTH, CARD_HEIGHT, CARD_DEPTH]} />
      <meshStandardMaterial
        color={cardColor}
        metalness={0.5}
        roughness={0.4}
        emissive={emissiveColor}
        emissiveIntensity={emissiveIntensity}
      />

      {/* 변경된 코드: 카드 이름 - 위치 조정 */}
      <Text
        position={[0, 1.7, 0.07]}
        fontSize={0.28}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={CARD_WIDTH * 0.9}
      >
        {`${card.name} (${card.cost})`}
      </Text>

      {/* 변경된 코드: 카드 타입 - 위치 조정 */}
      <Text
        position={[0, 1.2, 0.07]}
        fontSize={0.2}
        color="#cccccc"
        anchorX="center"
        anchorY="middle"
      >
        {card.type}
      </Text>

      {/* 변경된 코드: 카드 설명 - 위치 조정 */}
      <Text
        position={[0, 0.4, 0.07]}
        fontSize={0.18}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={CARD_WIDTH * 0.9}
      >
        {card.description}
      </Text>

      {/* 변경된 코드: 데미지 표시 - 위치 조정 */}
      {card.type === "Attack" && card.damage && (
        <Text
          position={[0.9, -1.6, 0.07]}
          fontSize={0.35}
          color="#ff9999"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          {`${card.damage}`}
        </Text>
      )}

      {/* 변경된 코드: 드래그 진행도 표시 - 위치 조정 */}
      {isDragging && dragProgress > 0 && (
        <mesh
          position={[0, -2.2, 0.07]} // Y 위치를 -1.8에서 -2.2로 조정
          scale={[dragProgress * 2.7, 0.15, 0.01]} // 크기 조정 (2.2, 0.12에서 2.7, 0.15로)
        >
          <boxGeometry />
          <meshBasicMaterial
            color={dragProgress > 0.7 ? "#22cc88" : "#ccaa22"}
          />
        </mesh>
      )}

      {/* 변경된 코드: 드래그 안내 텍스트 - 위치 조정 */}
      {isDragging && dragProgress > 0.3 && (
        <Text
          position={[0, -2.5, 0.07]} // Y 위치를 -2.1에서 -2.5로 조정
          fontSize={0.22} // 폰트 크기 0.18에서 0.22로 증가
          color={dragProgress > 0.7 ? "#22cc88" : "#ffffff"}
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          {dragProgress > 0.7 ? "놓아서 사용" : "더 위로"}
        </Text>
      )}
    </mesh>
  );
};

export default Card3D;
