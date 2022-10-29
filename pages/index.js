import Head from "next/head";
import Image from "next/image";
import Created from "../components/created";
import Form from "../components/form";
import Title from "../components/title";

export default function Home() {
  return (
    <div class="h-auto flex_col_aic">
      <Title />
      <Created />
      <Form />
    </div>
  );
}
