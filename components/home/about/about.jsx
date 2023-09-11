import Image from "next/image";
import styles from "./about.module.scss";

export default function About() {
  return (
    <section className={styles.container}>
      <div className={styles.cardsWrapper}>
        <div className={styles.card}>
          <h2 id="about">O nas</h2>
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

            <Image
              src="/img/logos/mcourt-logo-color.png"
              width={160}
              height={56}
              alt="logo"
            />
          </div>
        </div>

        <Image
          className={styles.image}
          src="/img/paddle-tennis.png"
          width={783}
          height={623}
          alt="paddle"
        />
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
