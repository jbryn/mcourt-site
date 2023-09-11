import Link from "next/link";
import styles from "./header.module.scss";
import { useRef, useState } from "react";
import classNames from "classnames";

export default function Header() {
  const tooltipRef = useRef();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const setVisible = (visible) => {
    tooltipRef.current.style.visibility = visible ? "visible" : "hidden";
  };

  return (
    <header>
      <div className={classNames(styles.wrapper)}>
        <Link href="/">
          <img
            className={styles.logo}
            src="./img/logos/mcourt-logo.png"
            alt="mcourt-logo"
          />
        </Link>
        <ul className={styles.list}>
          <Link href="/">
            <li>Home</li>
          </Link>

          <Link href="/courts" onMouseEnter={() => setVisible(true)}>
            <li>Courts</li>
          </Link>

          <Link href="/tennis-halls">
            <li>Tennis halls</li>
          </Link>
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
      <div
        ref={tooltipRef}
        className={styles.tooltip}
        onMouseLeave={() => setVisible(false)}
      >
        <span className={styles.tooltipContent}>
          <Link href="/courts">Nawierzchnie akrylowe</Link>
          <Link href="/courts">Sztuczna trawa</Link>
          <Link href="/courts">Nawierzchnie hybrydowe</Link>
          <Link href="/courts">Nawierzchnia ceglana</Link>
        </span>
      </div>
      <div className={classNames(styles.menu, { ["hidden"]: !isMenuOpen })}>
        <div
          className={styles.close}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <img src="./icons/close.svg" alt="close" />
        </div>
        <ul className={styles.list}>
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <li>Home</li>
          </Link>
          <Link href="/courts" onClick={() => setMenuOpen(false)}>
            <li id="courts">Courts</li>
          </Link>
          <Link href="/tennis-halls" onClick={() => setMenuOpen(false)}>
            <li>Tennis halls</li>
          </Link>
          <li>Padel</li>
          <li>Pickelball</li>
        </ul>
      </div>
    </header>
  );
}
