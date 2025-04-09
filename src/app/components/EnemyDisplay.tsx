import React from "react";

interface EnemyProps {
  name: string;
  health: number;
  maxHealth: number;
  // TODO: 몬스터의 행동 패턴, 상태 이상 등 추가 정보
}

const EnemyDisplay: React.FC<EnemyProps> = ({ name, health, maxHealth }) => {
  const healthPercentage = maxHealth > 0 ? (health / maxHealth) * 100 : 0;

  return (
    <div className="p-4 bg-gray-800 rounded shadow-lg w-full max-w-sm mx-auto text-center">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <div className="w-full bg-gray-600 rounded h-4 mb-2 overflow-hidden">
        <div
          className="bg-red-500 h-full transition-all duration-300 ease-in-out"
          style={{ width: `${healthPercentage}%` }}
        />
      </div>
      <p className="text-sm">
        체력: <span className="font-semibold">{health}</span> / {maxHealth}
      </p>
    </div>
  );
};

export default EnemyDisplay;
