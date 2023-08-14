import Link from "next/link";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header>
      <div className={styles.wrapper}>
        <Link href="/">
          <img
            className={styles.logo}
            src="./img/mcourt-logo.png"
            alt="mcourt-logo"
          ></img>
        </Link>
        <ul className={styles.list}>
          <li>Home</li>
          <li>Courts</li>
          <li>Tennis halls</li>
          <li>Padel</li>
          <li>Pickelball</li>
        </ul>
      </div>
    </header>
  );
}
