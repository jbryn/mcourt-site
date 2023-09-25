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
    <header className="bg-black fixed w-full z-50">
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
            <li>Strona główna</li>
          </Link>

          <Link href="/korty" onMouseEnter={() => setVisible(true)}>
            <li>Korty</li>
          </Link>

          <Link href="/hale-tenisowe">
            <li>Hale tenisowe</li>
          </Link>
          <Link href="/padel">
            <li>Padel</li>
          </Link>
          <Link href="/pickelball">
            <li>Pickelball</li>
          </Link>
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
          <Link href="/nawierzchnie-akrylowe">Nawierzchnie akrylowe</Link>
          <Link href="/sztuczna-trawa">Sztuczna trawa</Link>
          <Link href="/nawierzchnie-hybrydowe">Nawierzchnie hybrydowe</Link>
          <Link href="/nawierzchnie-ceglane">Nawierzchnia ceglana</Link>
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
            <li>Strona główna</li>
          </Link>
          <Link href="/korty" onClick={() => setMenuOpen(false)}>
            <li id="courts">Korty</li>
          </Link>
          <Link href="/hale-tenisowe" onClick={() => setMenuOpen(false)}>
            <li>Hale tenisowe</li>
          </Link>
          <Link href="/padel">
            <li>Padel</li>
          </Link>
          <Link href="/pickelball">
            <li>Pickelball</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
