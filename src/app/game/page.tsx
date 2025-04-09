"use client";

import { useEffect, useState, useCallback } from "react";
import { useGameStore } from "@/app/store/gameStore";
import type { CardData } from "@/app/api/cards/route";
import EnemyDisplay from "@/app/components/EnemyDisplay";
import {
  DndProvider,
  useDrag,
  useDrop,
  DragSourceMonitor,
  DropTargetMonitor,
} from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import React from "react";

interface DraggableCardProps {
  card: CardData;
  onRemove: (id: string) => void;
}

interface DragItem {
  id: string;
}

function DraggableCard({ card, onRemove }: DraggableCardProps) {
  const [{ isDragging }, drag] = useDrag<
    DragItem,
    unknown,
    { isDragging: boolean }
  >(
    () => ({
      type: "card",
      item: () => {
        return { id: card.id };
      },
      collect: (monitor: DragSourceMonitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [card.id]
  );

  return (
    <li
      ref={drag as any}
      className={`border p-4 rounded bg-gray-700 shadow cursor-grab ${
        isDragging ? "opacity-50" : ""
      } transform transition-transform duration-150 ease-in-out hover:scale-105`}
    >
      <h3 className="text-xl font-bold mb-1 select-none">
        {card.name} ({card.cost} 코스트)
      </h3>
      <p className="text-sm text-gray-300 mb-2 select-none">({card.type})</p>
      <p className="select-none">{card.description}</p>
    </li>
  );
}

// React.memo로 DraggableCard 컴포넌트 메모이제이션
const MemoizedDraggableCard = React.memo(DraggableCard);

function DropZone({ onDrop }: { onDrop: (cardId: string) => void }) {
  const [{ isOver }, drop] = useDrop<DragItem, unknown, { isOver: boolean }>(
    () => ({
      accept: "card",
      drop: (item: DragItem) => {
        console.log("DropZone: Card dropped", item);
        onDrop(item.id);
      },
      collect: (monitor: DropTargetMonitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [onDrop]
  );

  return (
    <div
      ref={drop as any}
      className={`relative flex-grow flex items-center justify-center border-2 border-dashed rounded-lg my-4 p-8 transition-colors duration-200 ${
        isOver
          ? "border-blue-500 bg-blue-500/10"
          : "border-gray-600 text-gray-500"
      }`}
      style={{
        minHeight: "200px",
      }}
    >
      <p className="text-center">
        {isOver
          ? "카드를 놓아서 사용하세요"
          : "카드를 이곳으로 드래그하여 사용하세요"}
      </p>
    </div>
  );
}

export default function GamePage() {
  const playerHealth = useGameStore((state) => state.playerHealth);
  const currentTurn = useGameStore((state) => state.currentTurn);
  const increaseTurn = useGameStore((state) => state.increaseTurn);
  const dealDamage = useGameStore((state) => state.dealDamage);

  const [handCards, setHandCards] = useState<CardData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [enemy, setEnemy] = useState({
    name: "슬라임",
    health: 50,
    maxHealth: 50,
  });

  // 컴포넌트 마운트 시 카드 데이터 가져오기
  useEffect(() => {
    const fetchCards = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("/api/cards");
        if (!response.ok) {
          throw new Error("데이터를 불러오는데 실패했습니다.");
        }
        const data: CardData[] = await response.json();
        setHandCards(data.slice(0, 5));
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setIsLoading(false);
      }
    };

    fetchCards();
  }, []);

  // 카드 드롭 핸들러
  const handleCardDrop = (cardId: string) => {
    // 핸드에서 카드 찾기
    const usedCard = handCards.find((card) => card.id === cardId);

    if (!usedCard) {
      console.log("Card not found in hand for ID:", cardId);
      return;
    }

    if (usedCard.type === "Attack") {
      const damage = usedCard.damage || 10;
      setEnemy((prev) => {
        const newHealth = Math.max(0, prev.health - damage);
        return {
          ...prev,
          health: newHealth,
        };
      });
    }

    // 핸드에서 사용된 카드 제거 - setHandCards 호출
    setHandCards((currentHand) =>
      currentHand.filter((card) => card.id !== cardId)
    );
  };

  const handleTurnEnd = () => {
    increaseTurn();

    const enemyDamage = 5;
    dealDamage(enemyDamage);
    console.log(`적(${enemy.name})이 ${enemyDamage}의 피해를 주었습니다!`);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <main className="container mx-auto p-4 flex flex-col min-h-screen">
        {/* 상단: 몬스터 정보 */}
        <div className="mb-8">
          <EnemyDisplay
            name={enemy.name}
            health={enemy.health}
            maxHealth={enemy.maxHealth}
          />
        </div>

        {/* 중앙: 카드 사용 영역 (Drop Zone) */}
        <DropZone onDrop={handleCardDrop} />

        {/* 하단: 플레이어 정보 및 핸드 */}
        <div className="mt-auto">
          {/* 게임 상태 표시 */}
          <div className="mb-4 p-4 bg-gray-800 rounded flex justify-between items-center">
            <div>
              <p>
                플레이어 체력:{" "}
                <span className="font-semibold text-green-400">
                  {playerHealth}
                </span>
              </p>
              <p>
                현재 턴:{" "}
                <span className="font-semibold text-yellow-400">
                  {currentTurn}
                </span>
              </p>
            </div>
            <button
              onClick={handleTurnEnd}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow transition duration-300 ease-in-out"
            >
              턴 종료
            </button>
          </div>

          {/* 플레이어 핸드 */}
          <div className="mt-6 pb-4">
            <h2 className="text-2xl font-semibold mb-3">플레이어 핸드</h2>
            {isLoading && <p>카드 로딩 중...</p>}
            {error && <p className="text-red-500">오류: {error}</p>}
            {!isLoading && !error && handCards.length > 0 && (
              <ul className="flex space-x-4 overflow-x-auto py-2">
                {handCards.map((card) => (
                  <MemoizedDraggableCard
                    key={card.id}
                    card={card}
                    onRemove={() => {}}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>
    </DndProvider>
  );
}
