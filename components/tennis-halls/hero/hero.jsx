import styles from "./hero.module.scss";
export default function Hero() {
  return (
    <section>
      <div className={styles.hero}>
        <h1>Tennis Halls</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur. Nibh suspendisse aliquam sed
          libero eu faucibus commodo sagittis. Sit accumsan et mauris fringilla
          elementum elit interdum scelerisque consectetur.
        </h2>
        <svg
          width="49"
          height="76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            // const video = document.getElementById("video");
            // video.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <path
            d="M23.293 50.707a1 1 0 0 0 1.414 0l6.364-6.364a1 1 0 0 0-1.414-1.414L24 48.586l-5.657-5.657a1 1 0 0 0-1.414 1.414l6.364 6.364ZM23 24v26h2V24h-2Z"
            fill="#7ED957"
          />
          <rect x=".5" y=".5" width="48" height="75" rx="24" stroke="#7ED957" />
        </svg>
      </div>
      <img
        className={styles.background}
        src="./img/tennis-halls/hero.png"
        alt="hero"
      />
    </section>
  );
}
