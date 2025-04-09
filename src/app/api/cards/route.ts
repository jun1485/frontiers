import { NextResponse } from "next/server";

// 카드 데이터 타입 정의 (필요에 따라 확장)
export interface CardData {
  id: string;
  name: string;
  description: string;
  cost: number;
  type: "Attack" | "Skill" | "Power";
  damage?: number; // 공격 카드의 데미지 값
}

// 간단한 카드 데이터 예시
const cardDatabase: CardData[] = [
  {
    id: "c1",
    name: "강타",
    description: "적에게 5의 피해를 줍니다.",
    cost: 1,
    type: "Attack",
    damage: 5,
  },
  {
    id: "c2",
    name: "수비",
    description: "방어도 5를 얻습니다.",
    cost: 1,
    type: "Skill",
  },
  {
    id: "c3",
    name: "힘 증폭",
    description: "이번 턴 동안 힘이 2 증가합니다.",
    cost: 0,
    type: "Power",
  },
  {
    id: "c4",
    name: "연속 공격",
    description: "적에게 2의 피해를 2번 줍니다.",
    cost: 1,
    type: "Attack",
    damage: 2,
  },
];

// GET 요청 핸들러
export async function GET(request: Request) {
  // 실제 애플리케이션에서는 DB 조회 등의 비동기 작업 수행 가능
  // 여기서는 간단히 미리 정의된 데이터를 반환
  try {
    // 예: URL 쿼리 파라미터로 특정 카드 타입 필터링 (선택 사항)
    // const { searchParams } = new URL(request.url);
    // const type = searchParams.get('type');
    // const filteredCards = type
    //   ? cardDatabase.filter(card => card.type.toLowerCase() === type.toLowerCase())
    //   : cardDatabase;

    return NextResponse.json(cardDatabase); // JSON 형태로 카드 데이터 반환
  } catch (error) {
    console.error("Failed to fetch cards:", error);
    return NextResponse.json(
      { message: "카드 데이터를 가져오는데 실패했습니다." },
      { status: 500 }
    );
  }
}

// 필요에 따라 POST, PUT, DELETE 핸들러도 추가 가능
// export async function POST(request: Request) { ... }
