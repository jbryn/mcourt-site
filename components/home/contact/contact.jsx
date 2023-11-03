import Image from "next/image";
import ContactForm from "@/components/shared/contact-form/contact-form";
import styles from "./contact.module.scss";

export default function Contact() {
  return (
    <section id="contact">
      <div className={styles.wrapper}>
        <Image
          src="/img/logos/mcourt-sygnet.png"
          width={542}
          height={542}
          alt="sygnet"
        />
        <ContactForm />
      </div>
    </section>
  );
}
