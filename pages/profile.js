import Head from "next/head";
import Link from "next/link";
import Card from "../components/card";
import cards from "../public/assets/data/cards";

function Profile() {
  return (
    <>
      <Head>
        <title>プロフィール</title>
      </Head>
      <div className="m-12 h-auto">
        <div className="text-white text-3xl mb-8 underline decoration-blue-500">
          製作者: toramine
        </div>
        <div className="text-white text-3xl mb-2 underline decoration-blue-500">
          学習中
        </div>
        <div className=" flex flex-wrap mb-4">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </div>
        <Link href="/">
          <div className="text-white inline text-3xl underline decoration-blue-500 hover:decoration-white cursor-pointer">
            Home link
          </div>
        </Link>
      </div>
    </>
  );
}

export default Profile;
