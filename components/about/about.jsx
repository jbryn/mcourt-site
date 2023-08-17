import styles from "./about.module.scss";

export default function About() {
  return (
    <section className="pt-[286px] pb-[299px]">
      <div className={styles.background} />

      <div className="flex justify-center">
        <div className="flex">
          <div className={styles.card}>
            <h2>About us</h2>
            <p>
              Witamy w mCourt.eu, liderze w budowie i wyposażeniu kortów w
              Polsce. Z dumą dostarczamy najwyższej jakości korty tenisowe, do
              padla i pickleballa od ponad 10 lat. Nasze doświadczenie i
              zrozumienie potrzeb klienta czynią nas niezrównanym wyborem dla
              Twojego projektu.
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
      </div>

      <div className={styles.statsContainer}>
        <div className={styles.stat}>
          <div className={styles.top}>
            <span>200</span>
            <img src="./vectors/stats-circles.svg" alt="stat" />
          </div>
          <p>Zbudowanych kortów</p>
        </div>
        <div className={styles.stat}>
          <div className={styles.top}>
            <span>10</span>
            <img src="./vectors/stats-circles.svg" alt="stat" />
          </div>
          <p>Lat doświadczenia</p>
        </div>
        <div className={styles.stat}>
          <div className={styles.top}>
            <span>8</span>
            <img src="./vectors/stats-circles.svg" alt="stat" />
          </div>
          <p>Typów kortów budujemy</p>
        </div>
      </div>
    </section>
  );
}
