import { useState } from "react";
import "./card.css";
import { cardsData } from "../cardsData";

export default function Card({ text, setIsGameOver, setScore, style }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      onClick={() => {
        if (!isClicked) {
          setIsClicked(true);
          setScore((score) => score + 1);
          shuffleCards(cardsData);
        } else if (isClicked) {
          setIsGameOver(true);
        }
      }}
      style={{ backgroundColor: style }}
    >
      <h1>{text}</h1>
    </button>
  );
}

function shuffleCards(cardsArr) {
  cardsArr.sort(() => Math.random() - 0.5);
}
