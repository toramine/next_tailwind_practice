import Head from "next/head";
import Image from "next/image";
import Created from "../components/created";
import Form from "../components/form";
import Title from "../components/title";

export default function Home() {
  return (
    <div className="h-auto w-full flex_col_aic bg-blue-700">
      <Title />
      <Created />
      <Form />
    </div>
  );
}
