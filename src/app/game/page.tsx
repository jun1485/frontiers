"use client";

import { useEffect, useState, useCallback } from "react";
import { useGameStore } from "@/app/store/gameStore";
import type { CardData } from "@/app/api/cards/route";
import EnemyDisplay from "@/app/components/EnemyDisplay";
import Hand3D from "@/app/components/Hand3D";
import React from "react";

export default function GamePage() {
  const playerHealth = useGameStore((state) => state.playerHealth);
  const currentTurn = useGameStore((state) => state.currentTurn);
  const increaseTurn = useGameStore((state) => state.increaseTurn);
  const dealDamageToPlayer = useGameStore((state) => state.dealDamage);
  const playerStrength = useGameStore((state) => state.playerStrength);

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

  // 카드 사용 핸들러
  const handleCardUse = useCallback(
    (cardId: string) => {
      // 핸드에서 카드 찾기
      const usedCard = handCards.find((card) => card.id === cardId);

      if (!usedCard) {
        console.log("Card not found in hand for ID:", cardId);
        return;
      }

      if (usedCard.type === "Attack") {
        const baseDamage = usedCard.damage || 0;
        const hits = usedCard.name === "연속 공격" ? 2 : 1;
        const totalDamage = (baseDamage + playerStrength) * hits;

        console.log(
          `Dealing damage: (base: ${baseDamage} + strength: ${playerStrength}) * hits: ${hits} = ${totalDamage}`
        );

        if (totalDamage > 0) {
          setEnemy((prev) => {
            const newHealth = Math.max(0, prev.health - totalDamage);
            return {
              ...prev,
              health: newHealth,
            };
          });
          console.log(
            `${usedCard.name} used. Enemy health: ${enemy.health} -> ${
              enemy.health - totalDamage
            }`
          );
        }
      } else if (usedCard.type === "Skill") {
        console.log("Skill card used:", usedCard.name);
      } else if (usedCard.type === "Power") {
        console.log("Power card used:", usedCard.name);
      }

      // 핸드에서 사용된 카드 제거 - setHandCards 호출
      setHandCards((currentHand) =>
        currentHand.filter((card) => card.id !== cardId)
      );
    },
    [handCards, playerStrength, enemy.health]
  );

  const handleTurnEnd = () => {
    increaseTurn();

    const enemyDamage = 5;
    dealDamageToPlayer(enemyDamage);
    console.log(`적(${enemy.name})이 ${enemyDamage}의 피해를 주었습니다!`);

    // TODO: 매 턴마다 카드 뽑기 로직 추가
  };

  return (
    <main className="container mx-auto p-4 flex flex-col min-h-screen">
      {/* 상단: 몬스터 정보 */}
      <div className="mb-8">
        <EnemyDisplay
          name={enemy.name}
          health={enemy.health}
          maxHealth={enemy.maxHealth}
        />
      </div>

      {/* 중앙: 카드 사용 안내 */}
      <div className="flex-grow flex items-center justify-center">
        <p className="text-center text-xl text-gray-400">
          카드를 위로 드래그하여 사용하세요
        </p>
      </div>

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

        {/* 플레이어 핸드 - 3D 핸드 컴포넌트로 교체 */}
        <div className="mt-6 pb-4">
          <h2 className="text-2xl font-semibold mb-3">플레이어 핸드</h2>
          {isLoading && <p>카드 로딩 중...</p>}
          {error && <p className="text-red-500">오류: {error}</p>}
          {!isLoading && !error && handCards.length > 0 && (
            <Hand3D cards={handCards} onCardUse={handleCardUse} />
          )}
        </div>
      </div>
    </main>
  );
}
