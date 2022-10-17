import Head from "next/head";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Board - Organizando suas tarefas</title>
      </Head>
      <h1 className={styles.title}>
        Primeiro projeto com <span>NextJS</span>
      </h1>
    </div>
  );
}