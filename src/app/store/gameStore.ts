import { create } from "zustand";

// 게임 상태에 대한 타입 정의
interface GameState {
  playerHealth: number;
  currentTurn: number;
  playerStrength: number;
  deck: string[];
  hand: string[];
  increaseTurn: () => void;
  dealDamage: (amount: number) => void;
  // TODO: 게임 진행에 필요한 다른 상태와 액션 추가 (카드 뽑기, 카드 사용 등)
}

// Zustand 스토어 생성
export const useGameStore = create<GameState>((set) => ({
  playerHealth: 100,
  currentTurn: 1,
  playerStrength: 0,
  deck: ["Attack", "Attack", "Defend", "Defend", "Special Move"],
  hand: [],

  increaseTurn: () => set((state) => ({ currentTurn: state.currentTurn + 1 })),
  dealDamage: (amount: number) =>
    set((state) => ({
      playerHealth: Math.max(0, state.playerHealth - amount),
    })),
}));
