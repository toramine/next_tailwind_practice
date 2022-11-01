import Card from "./card";
import cards from "../public/assets/data/cards";

function Created() {
  const useCards = [];
  cards.map((card) => {
    if (card.used) {
      useCards.push(card);
    }
  });
  return (
    <div className=" bg-white w-full ">
      <div className=" flex flex-wrap ">
        {useCards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
}

export default Created;
