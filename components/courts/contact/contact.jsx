import ContactForm from "@/components/shared/contact-form/contact-form";
import styles from "./contact.module.scss";

export default function Contact() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.cardsWrapper}>
          <img
            className={styles.image}
            src="./img/tennis-ball-hd.png"
            alt="ball"
          />
          <div className={styles.card}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
