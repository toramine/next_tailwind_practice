function Card({ card }) {
  return (
    <div className="bg-gray-500 m-2 ">
      <div className="w-24 h-24">
        <div className="">{card.lang}</div>
        <div>{card.framework}</div>
        <div>{card.state}</div>
      </div>
    </div>
  );
}

export default Card;
