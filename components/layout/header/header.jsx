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

          <li className={styles.tooltip} onMouseEnter={() => setVisible(true)}>
            Courts
            <span
              ref={tooltipRef}
              className={styles.tooltipContent}
              onMouseLeave={() => setVisible(false)}
            >
              <Link href="/">Hard surfaces/acrylics</Link>
              <Link href="/">Artificial surfaces/grass</Link>
              <Link href="/">Hybrid surfaces</Link>
              <Link href="/">Carpet surfaces</Link>
              <Link href="/">Court lightning</Link>
              <Link href="/">Court hydration</Link>
            </span>
          </li>

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
      {/* <div className={styles.tooltip}></div> */}
      <div className={classNames(styles.menu, { ["hidden"]: !isMenuOpen })}>
        <div
          className={styles.close}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <img src="./icons/close.svg" alt="close" />
        </div>
        <ul className={styles.list}>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/courts">
            <li id="courts">Courts</li>
          </Link>
          <Link href="/tennis-halls">
            <li>Tennis halls</li>
          </Link>
          <li>Padel</li>
          <li>Pickelball</li>
        </ul>
      </div>
    </header>
  );
}
