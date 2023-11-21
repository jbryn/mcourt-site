import Image from "next/image";
import styles from "../surfaces.module.scss";

export default function Antuka() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.surface}>
          <Image
            className="lg:order-1"
            src="https://media.graphassets.com/FlWh3b0QN2uxPbITbblg"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Czym są korty z mączki?</h2>
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
            src="https://media.graphassets.com/BySB9IpTziXwKJuGz7VU"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Nasza oferta</h2>
            <h3>
              W naszej ofercie posiadamy ceglaną nawierzchnię tenisową Antuka
              Premium, którą można dostrzec na największych turniejach
              tenisowych na całym świecie. Dzięki specjalnie zaprojektowanej
              strukturze nawierzchni - grubość wierzchniej warstwy kortu Antuka
              Premium jest znacząco mniejsza niż w przypadku jej zwykłych
              odpowiedników, kort z mączki ceglanej Antuka wykazuje wysoką
              wodoprzepuszczalność i odporność na warunki atmosferyczne.
            </h3>
          </div>
        </div>
        <div className={styles.antuka2}>
          <Image
            className="lg:order-1"
            src="https://media.graphassets.com/IqyC7bgxQ8ekd9IntoYd"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Wykonanie</h2>
            <h3>
              Wykonanie nawierzchni nawierzchni <strong>Antuka</strong> możliwe
              jest tylko przy wykorzystaniu specjalistycznych urządzeń,
              gwarantujących precyzję, której nie można osiągnąć ręcznymi
              metodami. Struktura podłoża została zaprojektowana tak aby
              zmniejszyć obciążenie stawów i zmniejszyć prawdopodobieństwo
              powstania ewentualnych kontuzji. Ponadto odpowiednio dobrana
              granulacja mączki ceglanej pozwala na uzyskanie jednolitej
              nawierzchni, która idealnie sprawdza się na kortach zewnętrznych i
              krytych.
            </h3>
          </div>
        </div>
        <div className={styles.antuka}>
          <Image
            src="https://media.graphassets.com/4EgBRIiaROe6ijWEqkln"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Zalety nawierzchni Antuka</h2>
            <h3>
              <ul className="pl-[20px] max-[600px]:pb-[60px]">
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
            src="https://media.graphassets.com/TgkYxLfyRZKJEJ8tbJqT"
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
