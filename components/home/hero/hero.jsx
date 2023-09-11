import Image from "next/image";
import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <section className="overflow-hidden">
      <div className={styles.wrapper}>
        <div className={styles.hero}>
          <h1>Jakość, doświadczenie i precyzja</h1>
          <h2>
            Budujemy korty tenisowe od 2008 roku, naszym klientom proponujemy
            rozwiązania najlepszych światowych producentów
          </h2>
          <button
            className={styles.cta}
            onClick={() => {
              const video = document.getElementById("projects");
              video.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Dowiedz się więcej
          </button>
        </div>

        <div className="flex w-full justify-center pb-[100px]">
          <svg
            width="49"
            height="76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              const video = document.getElementById("about");
              video.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <path
              d="M23.293 50.707a1 1 0 0 0 1.414 0l6.364-6.364a1 1 0 0 0-1.414-1.414L24 48.586l-5.657-5.657a1 1 0 0 0-1.414 1.414l6.364 6.364ZM23 24v26h2V24h-2Z"
              fill="#7ED957"
            />
            <rect
              x=".5"
              y=".5"
              width="48"
              height="75"
              rx="24"
              stroke="#7ED957"
            />
          </svg>
        </div>

        <img className={styles.ball} src="./vectors/ball.svg" alt="ball" />

        <div className={styles.background}>
          <Image
            src="/img/tennis-court.png"
            alt="tennis-court"
            quality={25}
            fill
          />
        </div>
      </div>
    </section>
  );
}
