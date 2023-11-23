import Image from "next/image";
import ContactForm from "@/components/shared/contact-form/contact-form";
import styles from "./contact.module.scss";

export default function Contact({ imageUrl }) {
  return (
    <section id="contact">
      <div className={styles.wrapper}>
        <Image
          src={imageUrl}
          width={542}
          height={542}
          loading="eager"
          alt="sygnet"
        />
        <ContactForm />
      </div>
    </section>
  );
}
