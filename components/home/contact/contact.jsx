import ContactForm from "@/components/shared/contact-form/contact-form";
import styles from "./contact.module.scss";

export default function Contact() {
  return (
    <section className="pb-[232px]">
      <div className={styles.wrapper}>
        <img src="./img/logos/mcourt-sygnet.png" alt="sygnet" />
        <ContactForm />
      </div>
    </section>
  );
}
