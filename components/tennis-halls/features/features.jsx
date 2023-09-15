import Image from "next/image";
import styles from "./features.module.scss";

export default function Features() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.feature}>
          <Image
            className="order-1"
            src="/img/tennis-halls/image1.jpeg"
            width={640}
            height={406}
            alt="hall"
          />
          <div className={styles.description}>
            <h2>Tytuł sekcji</h2>
            <h3>
              <p>
                Od wielu lat dostarczamy naszym klientom innowacyjne rozwiązania
                budowlane, które łączą w sobie trwałość, ekologię i estetykę
              </p>{" "}
              <p>
                Jako doświadczony zespół profesjonalistów, przekształcamy wizje
                naszych klientów w rzeczywistość, projektując i wznosząc{" "}
                <strong>hale tenisowe</strong>, które spełniają najwyższe
                standardy jakości i bezpieczeństwa. Nasza ekspertyza{" "}
                <strong>w zakresie konstrukcji drewnianych hal łukowych</strong>{" "}
                pozwala nam dostarczać nie tylko funkcjonalne, ale także
                estetyczne rozwiązania.
              </p>
            </h3>
          </div>
        </div>
        <div className={styles.feature}>
          <Image
            src="/img/tennis-halls/image2.jpeg"
            width={540}
            height={406}
            alt="budowa"
          />
          <div className={styles.description}>
            <h2>Tytuł sekcji</h2>
            <h3>
              <p>
                Konstrukcja naszych <strong>hal tenisowych</strong> opiera się
                na innowacyjnym podejściu, gdzie głównym materiałem
                konstrukcyjnym jest drewno klejone warstwowo.
              </p>{" "}
              <p>
                Jest to materiał, który łączy w sobie wyjątkową wytrzymałość i
                elastyczność. Dzięki precyzyjnemu klejeniu warstw drewna,
                osiągamy doskonałą trwałość i stabilność konstrukcji. Drewno
                klejone warstwowo jest również bardziej odporne na warunki
                atmosferyczne i zmienne temperatury, co sprawia, że hale są nie
                tylko solidne, ale także długotrwałe.
              </p>
            </h3>
          </div>
        </div>
        <div className={styles.feature}>
          <Image
            className="order-1"
            src="/img/tennis-halls/image3.jpeg"
            width={640}
            height={406}
            alt="hall"
          />
          <div className={styles.description}>
            <h2>Tytuł sekcji</h2>
            <h3>
              <p>
                Pokrycie hal <strong>dwuwarstwową plandeką PVC</strong> jest
                jednym z kluczowych elementów naszych konstrukcji.
              </p>{" "}
              <p>
                Dzięki temu rozwiązaniu, powłoki PVC tworzą efektywną poduszkę
                powietrzną, poprawiając właściwości termoizolacyjne hal.
                Ponadto, plandeki PVC są translucentne, co oznacza, że światło
                naturalne może swobodnie przenikać do wnętrza hali w ciągu dnia
                i nie ma konieczności stosowania dodatkowego oświetlenia.
              </p>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
