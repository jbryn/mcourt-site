import Image from "next/image";
import styles from "./article.module.scss";

export default function Article({ imageUrl, description, inverted }) {
  return (
    <div className={styles.article}>
      <Image
        className={inverted ? "lg:order-1" : ""}
        src={imageUrl}
        loading="lazy"
        width={440}
        height={306}
        alt="antuka"
      />
      <div className={styles.description}>
        <h3>{description}</h3>
      </div>
    </div>
  );
}
