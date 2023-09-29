import Link from "next/link";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <img
            src="https://media.graphassets.com/GAIKjn52QECZ8IAZgHUO"
            alt="logo"
          />
          <ul className={styles.menu}>
            <Link href="/">
              <li>Strona główna</li>
            </Link>
            <Link href="/korty">
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
          <div className={styles.socials}>
            <Link href="https://www.facebook.com/mcourt.eu" target="_blank">
              <img src="./icons/facebook.svg" alt="facebook" />
            </Link>
            <Link href="https://www.instagram.com/mcourt.eu/" target="_blank">
              <img src="./icons/instagram.svg" alt="instagram" />
            </Link>
            <Link href="">
              <img src="./icons/twitter.svg" alt="twitter" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/mcourt-polska/"
              target="_blank"
            >
              <img src="./icons/linkedin.svg" alt="linkedin" />
            </Link>
          </div>
        </div>
        <div className={styles.top} />
        <div className={styles.bottom}>
          <p>Copyright 2023 © MCOURT | All Rights Reserved</p>
          <button className={styles.contact}>
            <img src="./icons/phone.svg" alt="phone" />
            <div className="flex flex-col">
              <p>531-988-445</p>
              <p>507-302-897</p>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
