"use client";

import { useSearchParams } from "next/navigation";

function GamePage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("game");

  return <div className="game-container"></div>;
}

export default GamePage;
