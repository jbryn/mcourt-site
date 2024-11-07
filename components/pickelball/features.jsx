import Image from "next/image";
import styles from "./features.module.scss";

export default function Features() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.surface}>
          <Image
            className="order-1"
            src="https://media.graphassets.com/7djELrtJRFq9hrdXXaNw"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Czym jest pickleball?</h2>
            <h3>
              Pickleball to sport rakietowy, będąca połączeniem tenisa, tenisa stołowego i badmintona. Został stworzony w 1965 roku w Stanach Zjednoczonych i szybko zyskał popularność, zarówno wśród młodszych, jak i starszych graczy.
            </h3>
          </div>
        </div>
        <div className={styles.surface}>
          <Image
            className="max-[1024px]:order-1"
            src="https://media.graphassets.com/J4BNAt4EQcKYytWGoi5V"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Czym się wyróżnia?</h2>
            <h3>
              <ul className="pl-[20px]">
                <li>
                  Rakiety: Do gry używa się specjalnych rakiet. Rakiety do pickleballa są lżejsze i mają krótsze rączki niż przeznaczone do tenisa.
                </li>
                <li>
                  Piłeczki: Pickleball jest rozgrywany piłeczkami z dziurkami, podobnymi do używanych w tenisie stołowym. Piłeczki do pickleballa są lekkie, co sprawia, że gra jest łatwa i dostępna dla każdego.
                </li>
              </ul>
            </h3>
          </div>
        </div>
        <div className={styles.surface}>
          <Image
            className="order-1 max-h-[356px]"
            src="https://media.graphassets.com/Tlwi39KQRzuhrnAItbnU"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h3>
              <ul className="flex flex-col gap-[40px] pl-[20px] ">
                <li>
                  Kort: Kort do pickleballa ma wymiary 13,41 na 6,09 m. Linie na korcie wyznaczają obszary gry singlowej i deblowej.
                </li>
                <li>
                  Pickleball jest zazwyczaj rozgrywany jako gra podwójna, ale można też grać w singla.
                </li>
              </ul>
            </h3>
          </div>
        </div>
        <div className={styles.surface}>
          <Image
            className="max-[1024px]:order-1"
            src="https://media.graphassets.com/aGMQD0XOQRqJxYFry8tA"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Zbudujemy Twój kort do pickleballa!</h2>
            <h3>
              Dla nas pickleball to nie tylko gra - to pasja. Chcemy, aby korty,
              które projektujemy i budujemy, były miejscem, gdzie ta pasja może
              się rozwijać. Bez względu na poziom zaawansowania graczy, nasze
              korty zapewniają optymalne warunki do pełnej przyjemności z gry.
            </h3>
          </div>
        </div>
        <h3 className="text-[26px] text-center max-w-[1000px]">
          Zapraszamy do kontaktu z nami, jeśli marzysz o idealnym korcie do
          pickleballa. Razem stworzymy przestrzeń, która spełni wszystkie Twoje
          oczekiwania!
        </h3>
      </div>
    </section>
  );
}
