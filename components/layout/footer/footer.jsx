import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <img src="./img/logos/mcourt-logo-color.png" alt="logo" />
          <ul className={styles.menu}>
            <li>Home</li>
            <li>Courts</li>
            <li>Tennis halls</li>
            <li>Padel</li>
            <li>Pickelball</li>
          </ul>
          <div className={styles.socials}>
            <img src="./icons/facebook.svg" alt="facebook" />
            <img src="./icons/instagram.svg" alt="instagram" />
            <img src="./icons/twitter.svg" alt="twitter" />
            <img src="./icons/linkedin.svg" alt="linkedin" />
          </div>
        </div>
        <div className={styles.top} />
        <div className={styles.bottom}>
          <p>Copyright 2023 © MCOURT | All Rights Reserved</p>
          <button className={styles.contact}>
            <img src="./icons/phone.svg" alt="phone" />
            <span>Call us</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
