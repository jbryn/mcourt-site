import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <img src="./vectors/footer.svg" alt="footer" />
        </div>
      </div>
    </footer>
  );
}
