import Link from "next/link";
import styles from "./header.module.scss";
import { useState } from "react";
import classNames from "classnames";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className={classNames(styles.wrapper)}>
        <Link href="/">
          <img
            className={styles.logo}
            src="./img/mcourt-logo.png"
            alt="mcourt-logo"
          />
        </Link>
        <ul className={styles.list}>
          <li>Home</li>
          <li>Courts</li>
          <li>Tennis halls</li>
          <li>Padel</li>
          <li>Pickelball</li>
        </ul>
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <img src="./icons/hamburger.svg" alt="hamburger" />
        </div>
      </div>
      <div className={classNames(styles.menu, { ["hidden"]: isMenuOpen })}>
        <div
          className={styles.close}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <img src="./icons/close.svg" alt="close" />
        </div>
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
