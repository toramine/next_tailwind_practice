import Head from "next/head";
import Image from "next/image";
import Created from "../components/created";
import Form from "../components/form";
import Title from "../components/title";

export default function Home() {
  return (
    <>
      <Head>
        <title>ホーム</title>
      </Head>
      <div className="h-auto w-full flex_col_aic bg-blue-100">
        <Title />
        <div className="my-5 text-xl font-bold" id="lang">
          使用言語
        </div>
        <Created />
        <div className="my-5 text-xl font-bold" id="form">
          入力フォーム
        </div>
        <Form />
      </div>
    </>
  );
}
