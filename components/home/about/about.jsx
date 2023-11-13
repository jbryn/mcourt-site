import Image from "next/image";
import styles from "./about.module.scss";

export default function About() {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.cardsWrapper}>
        <div className={styles.card}>
          <h2>O nas</h2>
          <p>
            Od 2008 roku z dumą dostarczamy najwyższej jakości{" "}
            <strong>
              korty tenisowe, korty do padla i korty do pickleballa
            </strong>
            . Nasi wysoko wykwalifikowani specjaliści zawsze służą fachowym
            doradztwem i wsparciem technicznym, aby dostosować rozwiązania do
            indywidualnych potrzeb i wymagań klienta. Niezależnie od tego, czy
            planujesz budowę nowego <strong>kortu tenisowego</strong>,{" "}
            <strong>modernizację istniejącego obiektu</strong> czy{" "}
            <strong>konserwację nawierzchni tenisowej</strong>, jesteśmy gotowi
            zapewnić Ci kompleksową obsługę na najwyższym poziomie.
          </p>
          <div className={styles.bottom}>
            <button className={styles.button}>Skontaktuj się z nami</button>

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
          src="https://media.graphassets.com/ucyKSNExTqW6u33AmZ3s"
          width={683}
          height={1024}
          alt="paddle"
        />
      </div>

      <div className={styles.statsContainer}>
        <div className={styles.stat}>
          <div className={styles.top}>
            <span>225</span>
            <img src="./vectors/stats-circles.svg" alt="stat" />
          </div>
          <p>Zbudowanych kortów</p>
        </div>
        <div className={styles.stat}>
          <div className={styles.top}>
            <span>15</span>
            <img src="./vectors/stats-circles.svg" alt="stat" />
          </div>
          <p>Lat doświadczenia</p>
        </div>
        <div className={styles.stat}>
          <div className={styles.top}>
            <span>5</span>
            <img src="./vectors/stats-circles.svg" alt="stat" />
          </div>
          <p>Typów kortów budujemy</p>
        </div>
      </div>
    </section>
  );
}
