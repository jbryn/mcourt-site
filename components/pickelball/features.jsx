import Image from "next/image";
import styles from "./features.module.scss";

export default function Features() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.laykold}>
          <Image
            className="lg:order-1"
            src="https://media.graphassets.com/TBapPwlqQcWnmAjBC8pJ"
            loading="lazy"
            // width={692}
            width={914}
            // height={235}
            height={310}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Akrylowe nawierzchnie Laykold</h2>
            <h3>
              <p>
                W naszej ofercie znajdziesz prestiżowe{" "}
                <strong>nawierzchnie akrylowe</strong> od światowego lidera,
                firmy Laykold. To dokładnie te nawierzchnie, na których
                rywalizują zawodowcy na takich wydarzeniach jak{" "}
                <strong>US Open</strong>, <strong>Miami Open</strong> a także na
                kortach w <strong>Akademii Tenisa Kozerki</strong> czy na{" "}
                <strong>Legii Warszawa</strong>.
              </p>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
