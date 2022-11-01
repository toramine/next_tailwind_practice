function Card({ card }) {
  return (
    <div className="bg-blue-500 m-2 w-96 h-48 rounded-xl flex_jcc_aic">
      <div className="text-white font-bold w-[100%] pl-12">
        <div className="text-2xl">{card.lang}</div>
        <div className=" text-5xl ">{card.framework}</div>
      </div>
    </div>
  );
}

export default Card;
