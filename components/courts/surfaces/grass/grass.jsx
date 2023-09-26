import Image from "next/image";
import styles from "../surfaces.module.scss";

export default function Grass() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.surface}>
          <Image
            className="lg:order-1"
            src="/img/grass/image2.jpeg"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Tytuł sekcji</h2>
            <h3>
              <p>
                <strong>Sztuczna trawa</strong> bardzo często jest postrzegana
                jako uniwersalna i wielofunkcyjna <strong>nawierzchnia</strong>.
                Nic nie stoi na przeszkodzie, aby użyć jej do budowy
                przydomowego <strong>kortu tenisowego</strong>..
              </p>
              <p>
                {" "}
                <strong>Nawierzchnie ze sztucznej trawy</strong>, z naszej
                oferty, są trwałe i odporne na ścieranie. Doskonale sprawdzą się
                jako korty przydomowe, ze względu na niskie nakłady czasowe
                potrzebne na bieżącą konserwację{" "}
                <strong>kortu tenisowego ze sztucznej trawy</strong>.
              </p>{" "}
            </h3>
          </div>
        </div>
        <div className={styles.surface}>
          <Image
            src="/img/grass/image1.jpeg"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Tytuł sekcji</h2>
            <h3>
              <p>
                Gra na <strong>sztucznej trawie</strong> charakteryzuje się
                szybką grą oraz niskim odbiciem piłki. Efektem tego są krótsze
                wymiany niż na innych typach{" "}
                <strong>nawierzchni tenisowych</strong>. Dużą zaletą{" "}
                <strong>kortów tenisowych ze sztucznej trawy</strong> jest
                możliwość regulowania poślizgu poprzez ilość piasku wczesanego w
                kort. Co ważne, pielęgnacja sztucznej trawy jest łatwa i szybka.
              </p>
            </h3>
          </div>
        </div>
        <div className={styles.surface}>
          <Image
            className="lg:order-1"
            src="/img/grass/image3.jpeg"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Tytuł sekcji</h2>
            <h3>
              <p>
                <strong>Piasek na nawierzchni kortu</strong> pomaga w utrzymaniu
                równomiernej wysokości trawy, co zapewnia idealne warunki gry.
                Dodatkowo, <strong>kort zasypany piaskiem</strong> powoduje, że
                <strong>nawierzchnia tenisowa</strong> jest bardziej stabilna,
                co minimalizuje ryzyko poślizgnięcia się i zapewnia większe
                bezpieczeństwo dla graczy.
              </p>
            </h3>
          </div>
        </div>
        <div className={styles.surface}>
          <Image
            src="/img/grass/image4.jpg"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Tytuł sekcji</h2>
            <h3>
              <p>
                <strong>Korty ze sztucznej trawy z piaskiem</strong> są idealne
                zarówno dla zawodowców, jak i amatorów, którzy szukają
                doskonałego miejsca do gry. Nasze{" "}
                <strong>korty tenisowe</strong> zapewniają doskonałe warunki dla
                Twojej gry, niezależnie od poziomu umiejętności. W swojej
                ofercie posiadamy <strong>nawierzchnie</strong> od{" "}
                <strong>
                  czeskich, włoskich oraz polskich producentów sztucznej trawy
                </strong>
                .
              </p>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
