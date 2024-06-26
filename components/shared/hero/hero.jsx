import Image from "next/image";
import styles from "./hero.module.scss";

export default function Hero({ backgroundUrl, title, offsetX, offsetY, size, subtitle }) {
  return (
    <section className="overflow-hidden pb-[720px] relative">
      <div
        className={styles.wrapper}
        style={{
          backgroundImage: `url('${backgroundUrl}')`,
          backgroundPositionY: offsetY || "center",
          backgroundPositionX: offsetX || "center",
          backgroundSize: size || "cover",
        }}
      >
        <div className={styles.hero}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <div className="absolute top-[500px] left-[calc(50%-25px)] z-10">
            <svg
              width="49"
              height="76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                const video = document.getElementById("contact-form");
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
        </div>
      </div>
    </section>
  );
}
