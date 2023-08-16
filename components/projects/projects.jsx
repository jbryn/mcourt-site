import styles from "./projects.module.scss";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="overflow-hidden pb-[300px]">
      <div className={styles.nav}>
        <h2>Nasze projekty</h2>
        <img src="./vectors/nav-arrows.svg" alt="navigation arrows" />
      </div>
      <div className={styles.cards}>
        {/* <div className="w-[165px] h-[118px] bg-other-grey transform translate-y-[265px]" /> */}
        <div className={styles.card}>
          <img src="./img/project1.png" alt="project1" />
          <h3>Project Number One</h3>
          <Link href="/">
            <span>View More</span>
            <img src="./icons/little-arrow.svg" alt="arrow" />
          </Link>
        </div>
        <div className={styles.card}>
          <img src="./img/project2.png" alt="project2" />
          <h3>Project Number One</h3>
          <Link href="/">
            <span>View More</span>
            <img src="./icons/little-arrow.svg" alt="arrow" />
          </Link>
        </div>
        <div className={styles.card}>
          <img src="./img/project3.png" alt="project3" />
          <h3>Project Number One</h3>
          <Link href="/">
            <span>View More</span>
            <img src="./icons/little-arrow.svg" alt="arrow" />
          </Link>
        </div>
        <div className={styles.card}>
          <img src="./img/project4.png" alt="project4" />
          <h3>Project Number One</h3>
          <Link href="/">
            <span>View More</span>
            <img src="./icons/little-arrow.svg" alt="arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
