import Image from "next/image";
import styles from "./features.module.scss";

export default function Features() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.feature}>
          <Image
            className="lg:order-1"
            src="https://media.graphassets.com/ElE0uEe6SQGhhdaUwHlk"
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
            src="https://media.graphassets.com/JmJ8dnoTS8eRYNTaaUeD"
            width={540}
            height={406}
            alt="budowa"
          />
          <div className={styles.description}>
            <h2>Konstrukcja</h2>
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
            className="lg:order-1"
            src="https://media.graphassets.com/2m8U5PyGR4ueMqkHG0Qq"
            width={640}
            height={406}
            alt="hall"
          />
          <div className={styles.description}>
            <h2>Przykrycia</h2>
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
        <div className={styles.feature}>
          <Image
            src="https://media.graphassets.com/SKlPEJRTPSwn42o5Lf4Q"
            width={540}
            height={406}
            alt="budowa"
          />
          <div className={styles.description}>
            <h2>Oświetlenie</h2>
            <h3>
              <p>
                W naszych halach łukowych stosujemy nowoczesne oświetlenie LED o
                intensywności na poziomie 350 lx. To zapewnia doskonałe warunki
                oświetleniowe, które są nie tylko energooszczędne, ale także
                optymalne dla różnych zastosowań. Oświetlenie LED oferuje
                jasność i równomierny rozkład światła, co zwiększa efektywność
                pracy oraz komfort użytkowników wewnątrz hali.
              </p>
            </h3>
          </div>
        </div>
        <div className={styles.feature}>
          <Image
            className="lg:order-1"
            src="https://media.graphassets.com/R666H1mRjOWejcte7tHx"
            width={640}
            height={406}
            alt="hall"
          />
          <div className={styles.description}>
            <h2>Ogrzewanie</h2>
            <h3>
              <p>
                W zależności od dostępnych źródeł energii, istnieje opcja
                <strong> ogrzewania hali tenisowej</strong> za pomocą gazu,
                podłączenia do sieci centralnego ogrzewania, lub alternatywnie,
                w przypadku braku dostępności tych mediów, można rozważyć opcję
                ogrzewania olejem opałowym. Proponowane przez nas systemy
                grzewcze zapewniają optymalne warunki do gry w tenisa,
                utrzymując stabilną i komfortową temperaturę wewnątrz hali
                niezależnie od pory roku czy warunków atmosferycznych na
                zewnątrz.
              </p>
            </h3>
          </div>
        </div>
        <div className={styles.feature}>
          <Image
            src="https://media.graphassets.com/p0NNNUw3QNOLlCW0IcwJ"
            width={540}
            height={406}
            alt="budowa"
          />
          <div className={styles.description}>
            <h2>Dodatki</h2>
            <h3>
              <p>
                Nasze <strong>hale tenisowe</strong> wyposażamy w rozsuwane
                rolety boczne. Te innowacyjne rozwiązania pozwalają na regulację
                przepływu powietrza wewnątrz hali, umożliwiając efektywne
                chłodzenie i cyrkulację powietrza w cieplejszych miesiącach. To
                kolejny element, który sprawia, że nasze hale są dostosowane do
                różnorodnych potrzeb i sezonowych wymagań.
              </p>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
