import styles from "./about.module.scss";

export default function About() {
  return (
    <section className="pb-[299px] overflow-hidden">
      <div className={styles.container}>
        <div className={styles.background} />

        <div className={styles.card}>
          <h2>About us</h2>
          <p>
            Witamy w mCourt.eu, liderze w budowie i wyposażeniu kortów w Polsce.
            Z dumą dostarczamy najwyższej jakości korty tenisowe, do padla i
            pickleballa od ponad 10 lat. Nasze doświadczenie i zrozumienie
            potrzeb klienta czynią nas niezrównanym wyborem dla Twojego
            projektu.
          </p>
          <p>
            Skontaktuj się z nami już dziś i przekonaj się, jak możemy pomóc w
            realizacji Twojego wymarzonego kortu.
          </p>
          <div className={styles.bottom}>
            <button className={styles.button}>Contact us</button>
            <img className={styles.logo} src="./img/mcourt-logo-color.png" />
          </div>
        </div>

        <img
          className={styles.image}
          src="./img/paddle-tennis.png"
          alt="paddle"
        />
      </div>
    </section>
  );
}
