import Head from 'next/head';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Board - Organizando suas tarefas</title>
      </Head>
      <main className={styles.contentContainer}>
        <img src="/images/board-user.svg" alt="Ferramenta board" />

        <section className={styles.callToAction}>
          <h1>
            Uma ferramenta para seu dia a dia Escreva, planeje e organize-se...
          </h1>
          <p>
            <span>100% Gratuita</span> e online
          </p>
        </section>

        <div className={styles.donaters}>
          <h3>Apoiadores:</h3>
          <div className={styles.donaterImg}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Gira_internacional_USA_-_Steve_Jobs_%28cropped%29.jpg" alt="Usuário 1" />
          </div>
        </div>
      </main>
    </div>
  );
}
