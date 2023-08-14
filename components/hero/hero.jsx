import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <section>
      <div className={styles.hero}>
        <h1>Experience Quality and Precision</h1>
        <h2>
          mCourt is a company with over a decade of experience in building and
          maintaining tennis courts.
        </h2>
      </div>
      <button>Learn More</button>
      <img className={styles.ball} src="./vectors/ball.svg" alt="ball" />

      <img
        className={styles.background}
        src="./img/tennis-court.png"
        alt="tennis-court"
      />
    </section>
  );
}
