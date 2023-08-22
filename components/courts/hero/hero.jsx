import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <section className="overflow-hidden">
      <div className={styles.hero}>
        <h1>Courts</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur. Nibh suspendisse aliquam sed
          libero eu faucibus commodo sagittis. Sit accumsan et mauris fringilla
          elementum elit interdum scelerisque consectetur.
        </h2>
        <div className={styles.scrollDown}>
          <img src="./vectors/arrow-scroll-down.svg" alt="scroll-down" />
        </div>
      </div>

      <img
        className={styles.background}
        src="./img/courts-hero.png"
        alt="tennis-court"
      />
    </section>
  );
}
