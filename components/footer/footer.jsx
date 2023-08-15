import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <img
            className={styles.logo}
            src="./img/mcourt-logo-color.png"
            alt="logo"
          />
          <img
            className={styles.background}
            src="./img/footer.png"
            alt="footer"
          />
        </div>

        <span>Copyright 2023 © MCOURT | All Rights Reserved</span>
        <div className={styles.contact}>
          <img src="./icons/phone.svg" alt="call-us" />
          <p>Call us</p>
        </div>
      </div>
    </footer>
  );
}
