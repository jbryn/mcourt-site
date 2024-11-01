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
            <Link href="/rodo">
              <li>Polityka prywatności</li>
            </Link>
          </ul>
          <div className={styles.socials}>
            <Link href="https://www.facebook.com/mcourt.eu" target="_blank">
              <img src="./icons/facebook.svg" alt="facebook" />
            </Link>
            <Link href="https://www.instagram.com/mcourt.eu/" target="_blank">
              <img src="./icons/instagram.svg" alt="instagram" />
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
          <div id="footer" className={styles.contact}>
            <div className="flex flex-col items-start">
              <p>Kineskopowa 1/F</p>
              <p>05-500</p>
              <p>Piaseczno</p>
            </div>
            <div>
              <p className="flex max-[380px]:flex-col">
                <span>Poniedziałek - Piątek: </span>
                <span className="pl-[5px]">9:00 - 17:00</span>
              </p>
              <p className="flex max-[380px]:flex-col">
                <span>Sobota - Niedziela: </span>
                <span className="pl-[5px]">Zamknięte</span>
              </p>
              <p className="pt-[20px] font-bold text-[18px]">
                budowy@mcourt.pl
              </p>
            </div>
            <div className="flex flex-col items-end max-[500px]:hidden">
              <p>+48 22 643 55 62</p>
              <p>+48 507 302 897</p>
            </div>
          </div>
          <div className={styles.phone}>
            <p>+48 22 643 55 62</p>
            <p>+48 507 302 897</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
