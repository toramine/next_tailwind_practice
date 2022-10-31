import Card from "./card";
import cards from "../public/assets/data/cards";
import { useState } from "react";

function Created() {
  const useCards = [];
  cards.map((card) => {
    if (card.used) {
      useCards.push(card);
    }
  });
  return (
    <div className=" bg-white w-full h-[400px]">
      <div className=" flex flex-wrap ">
        {useCards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
}

export default Created;
