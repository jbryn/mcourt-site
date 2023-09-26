import Image from "next/image";
import styles from "../surfaces.module.scss";

export default function Antuka() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.surface}>
          <Image
            className="lg:order-1"
            src="/img/courts/image3.jpeg"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Tytuł sekcji</h2>
            <h3>
              <p>
                <strong>Korty ceglane</strong> charakteryzują się niezwykle
                przyjaznym dla zawodników stylem gry, pozwalając na rozwinięcie
                pełnego potencjału umiejętności. Elastyczność i miękkość{" "}
                <strong>kortów tenisowych</strong> z mączki zapewniają wysokie
                odbicie piłki, co daje tenisistom większą kontrolę nad jej
                trajektorią. To właśnie na{" "}
                <strong>nawierzchniach tenisowych ceglanych</strong>
                można doświadczyć niezwykłych efektów rotacji piłki, co stanowi
                znaczącą przewagę podczas rywalizacji.
              </p>
            </h3>
          </div>
        </div>
        <div className={styles.antuka}>
          <Image
            src="/img/antuka/image3.jpeg"
            loading="lazy"
            width={387}
            height={580}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Oferta</h2>
            <h3>
              <p>
                W naszej ofercie posiadamy nawierzchnie tenisową ceglaną Antuka
                Premium, którą można zobaczyć na największych turniejach
                tenisowych na całym świecie {`(`}np. turnieje pod szyldem WTA,
                ATP Challenger czy rozgrywki o puchar Davisa{`)`}. Dzięki
                specjalnie zaprojekowanej strukturze nawierzchnia ceglana Antuka
                Premium znacznie obniża prawdopodobieństwo wystąpienia kontuzji.
                Co więcej, grubość wierzchniej warstwy kortu Antuka Premium jest
                znacząco mniejsza niż w przypadku jej zwykłych odpowiedników
                mączki. Dzięki temu kort z mączki Antuka Premium zachowuje swoje
                właściwości, przepuszczalność wody i odporność na warunki
                atmosferyczne.
              </p>
              <strong>Zalety: </strong>
              <ul className="pl-[20px]">
                <li>
                  Dłuższy sezon na kortach zewnętrznych o co najmniej dwa
                  miesiące!
                </li>
                <li>
                  Już po 15 minutach intensywnych opadów, korty nadają się do
                  gry
                </li>
                <li>
                  Dużo łatwiejsza konserwacja kortu i zachowanie równości
                  powierzchni
                </li>
                <li>Brak efektu &quot;klepiska&quot;</li>
              </ul>
            </h3>
          </div>
        </div>
        <div className={styles.antuka2}>
          <Image
            className="lg:order-1"
            src="/img/antuka/image2.jpeg"
            loading="lazy"
            width={459}
            height={306}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Czym wyróżnia się Antuka Premium?</h2>
            <h3>
              <ul className="pl-[20px]">
                <li>
                  Mączka Antuka produkowana jest z najlepszej jakości kruszywa
                  ceglanego
                </li>
                <li>Grubość nawierzchni 10 – 15 mm</li>
                <li>
                  Brak surowej gliny powoduje doskonałą przepuszczalność
                  nawierzchni
                </li>
                <li>
                  Intensywny pomarańczowy kolor dodaje walorów estetycznych
                  nawierzchni
                </li>
                <li>
                  Nawierzchnia Antuka, ze względu na swoje właściwości znalazła
                  uznanie wśród profesjonalistów
                </li>
              </ul>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
