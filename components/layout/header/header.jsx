import { React, useRef, useState, useEffect } from "react";
import Link from "next/link";
import styles from "./header.module.scss";
import classNames from "classnames";

export default function Header() {
  const tooltipRef = useRef();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const setVisible = (visible) => {
    tooltipRef.current.style.visibility = visible ? "visible" : "hidden";
  };

  useEffect(() => {
    const body = document.getElementById("body");

    if (isMenuOpen) {
      body.style.position = "fixed";
    } else body.style.position = "static";
  }, [isMenuOpen]);

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
          <li>
            <Link href="/">Strona główna</Link>
          </li>

          <li>
            <Link href="/korty" onMouseEnter={() => setVisible(true)}>
              Korty
            </Link>
          </li>

          <li>
            <Link href="/hale-tenisowe">Hale tenisowe</Link>
          </li>

          <li>
            <Link href="/padel">Padel</Link>
          </li>

          <li>
            <Link href="/pickelball">Pickelball</Link>
          </li>

          <li
            className={styles.contact}
            onClick={() => {
              const footer = document.getElementById("footer");
              footer.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Kontakt
          </li>
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
          <Link href="/oswietlenie-kortow">Oświetlenie kortów</Link>
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
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>

          <li id="courts">
            <Link href="/korty" onClick={() => setMenuOpen(false)}>
              Korty
            </Link>
          </li>

          <li>
            <Link href="/hale-tenisowe" onClick={() => setMenuOpen(false)}>
              Hale
            </Link>
          </li>

          <li>
            <Link href="/padel" onClick={() => setMenuOpen(false)}>
              Padel
            </Link>
          </li>

          <li>
            <Link href="/pickelball" onClick={() => setMenuOpen(false)}>
              Pickelball
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
