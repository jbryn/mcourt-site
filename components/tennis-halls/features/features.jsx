import Image from "next/image";
import styles from "./features.module.scss";

export default function Features() {
  return (
    <section className="pb-[100px]">
      <div className={styles.wrapper}>
        <div className={styles.feature}>
          <Image
            className="lg:order-1"
            src="https://media.graphassets.com/3HycZ0RtWf15zgrVLNgQ"
            width={540}
            height={406}
            alt="hall"
          />
          <div className={styles.description}>
            <h2>Zadaszenie kortów</h2>
            <h3>
              <p>
                Od wielu lat dostarczamy naszym klientom innowacyjne rozwiązania budowlane, które łączą w sobie trwałość, ekologię i estetykę.
              </p>{" "}
              <p>
                Jako doświadczony zespół profesjonalistów, przekształcamy wizje naszych klientów w rzeczywistość, projektując i wznosząc hale tenisowe, które spełniają najwyższe standardy jakości i bezpieczeństwa. Nasza ekspertyza w zakresie konstrukcji drewnianych hal łukowych pozwala nam dostarczać nie tylko funkcjonalne, ale także estetyczne rozwiązania.
              </p>
            </h3>
          </div>
        </div>
        <div className={styles.feature}>
          <Image
            src="https://media.graphassets.com/gsYhiHqKRKQI935u65j3"
            width={540}
            height={406}
            alt="budowa"
          />
          <div className={styles.description}>
            <h2>Konstrukcja</h2>
            <h3>
              <p>
                Konstrukcja naszych hal tenisowych opiera się na innowacyjnym rozwiązaniu, w którym głównym materiałem konstrukcyjnym jest drewno klejone warstwowo.
              </p>{" "}
              <p>
                Jest to materiał, który łączy w sobie wyjątkową wytrzymałość i elastyczność. Dzięki precyzyjnemu klejeniu warstw drewna, osiągamy doskonałą trwałość i stabilność konstrukcji. Drewno klejone warstwowo jest również bardzo odporne na warunki atmosferyczne i zmienne temperatury, co sprawia, że hale są nie tylko solidne, ale także długotrwałe.
              </p>
            </h3>
          </div>
        </div>
        <div className={styles.feature}>
          <Image
            className="lg:order-1"
            src="https://media.graphassets.com/EUIIDFwRHG6EKeYp1WnB"
            width={540}
            height={406}
            alt="hall"
          />
          <div className={styles.description}>
            <h2>Przykrycia</h2>
            <h3>
              <p>
                Pokrycie hal dwuwarstwową plandeką PVC jest kolejnym elementem naszych konstrukcji.
              </p>{" "}
              <p>
                Powłoki PVC tworzą efektywną poduszkę powietrzną,  która jest doskonałym izolatorem dla hali. Ponadto plandeki PVC są translucentne, co oznacza, że światło naturalne może swobodnie przenikać do wnętrza hali w ciągu dnia i nie ma konieczności stosowania dodatkowego oświetlenia.
              </p>
            </h3>
          </div>
        </div>
        <div className={styles.feature}>
          <Image
            src="https://media.graphassets.com/hjVwRLHPTfe0kHZAx6YP"
            width={540}
            height={406}
            alt="budowa"
          />
          <div className={styles.description}>
            <h2>Oświetlenie</h2>
            <h3>
              <p>
                W naszych halach łukowych stosujemy nowoczesne oświetlenie LED o intensywności na poziomie 350 lx. Zapewniamy  doskonałe warunki oświetleniowe, komfortowe dla graczy, ale jednocześnie energooszczędne.
              </p>
            </h3>
          </div>
        </div>
        <div className={styles.feature}>
          <Image
            className="lg:order-1"
            src="https://media.graphassets.com/CTOgSsIvQtqQZ1Pm3c6y"
            width={540}
            height={406}
            alt="hall"
          />
          <div className={styles.description}>
            <h2>Ogrzewanie</h2>
            <h3>
              <p>
                W zależności od dostępnych źródeł energii, istnieje opcja ogrzewania hali tenisowej za pomocą gazu, podłączenia do sieci centralnego ogrzewania lub w przypadku braku dostępności tych mediów, można rozważyć opcję ogrzewania olejem opałowym. Proponowane przez nas systemy grzewcze zapewniają optymalne warunki do gry w tenisa, utrzymując stabilną i komfortową temperaturę wewnątrz hali, niezależnie od panujących warunków atmosferycznych na zewnątrz.
              </p>
            </h3>
          </div>
        </div>
        <div className={styles.feature}>
          <Image
            src="https://media.graphassets.com/K8jujnt8TbqIK5hAOMuk"
            width={540}
            height={406}
            alt="budowa"
          />
          <div className={styles.description}>
            <h2>Dodatki</h2>
            <h3>
              <p>
                Nasze hale tenisowe wyposażamy w rozsuwane rolety boczne. Te innowacyjne rozwiązania pozwalają na regulację przepływu powietrza wewnątrz hali, umożliwiając efektywne chłodzenie i cyrkulację powietrza w cieplejszych miesiącach. To kolejny element, który sprawia, że nasze hale są dostosowane do różnorodnych potrzeb i sezonowych wymagań.
              </p>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
