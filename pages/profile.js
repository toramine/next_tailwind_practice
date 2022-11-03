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
      <div className="m-12">
        <div className="text-white text-3xl">学習中</div>
        <div className=" flex flex-wrap ">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </div>
        <Link href="/">
          <div className="text-white inline text-3xl hover:underline decoration-white cursor-pointer">
            index page link
          </div>
        </Link>
      </div>
    </>
  );
}

export default Profile;
