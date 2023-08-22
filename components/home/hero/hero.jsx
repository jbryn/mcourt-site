import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <section className="overflow-hidden">
      <div className={styles.hero}>
        <h1>Experience Quality and Precision</h1>
        <h2>
          mCourt is a company with over a decade of experience in building and
          maintaining tennis courts.
        </h2>
        <button className={styles.cta}>Learn More</button>
      </div>

      <div className={styles.scrollDown}>
        <img src="./vectors/arrow-scroll-down.svg" alt="scroll-down" />
      </div>

      <img className={styles.ball} src="./vectors/ball.svg" alt="ball" />

      <img
        className={styles.background}
        src="./img/tennis-court.png"
        alt="tennis-court"
      />
    </section>
  );
}
