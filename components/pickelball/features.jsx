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
              Pickleball to dynamiczna gra ruchowa, będąca połączeniem tenisa,
              tenisa stołowego i badmintona. Została stworzona w 1965 roku w
              Stanach Zjednoczonych i szybko zyskała popularność, zarówno wśród
              młodszych, jak i starszych graczy. Gra jest zazwyczaj rozgrywana
              na specjalnych kortach o wymiarach zbliżonych do tych używanych do
              badmintona.
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
            <h2>Oto kilka kluczowych elementów związanych z pickleballem:</h2>
            <h3>
              <ul className="pl-[20px]">
                <li>
                  Rakiety: Podobnie jak w tenisie, używa się specjalnych rakiet,
                  jednak kształt i waga mogą się różnić. Rakiety do pickleballa
                  są lżejsze i mają krótsze rączki niż te do tenisa.
                </li>
                <li>
                  Piłeczka: Pickleball jest rozgrywany piłeczką z dziurkami,
                  podobną do tej używanej w tenisie stołowym. Piłeczki
                  pickleballa są lekkie, co sprawia, że gra jest bardziej
                  dostępna dla różnych grup wiekowych.
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
            <h2>Czym się wyróżnia?</h2>
            <h3>
              <ul className="flex flex-col gap-[40px] pl-[20px] ">
                <li>
                  Kort: Kort do pickleballa ma wymiary 13,41 na 6,09 m, co
                  sprawia, że jest mniejszy niż kort tenisowy. Linie na korcie
                  obejmują obszar gry dla singla i podwójnego.
                </li>
                <li>
                  Zasady Gry: Pickleball jest zazwyczaj rozgrywany jako gra
                  podwójna, ale można też grać w singla. Podstawowym celem gry
                  jest zdobycie punktu poprzez umiejętne odbijanie piłeczki
                  między drużynami, a punkt zdobywany jest, gdy przeciwnicy
                  popełniają błąd lub nie są w stanie skutecznie odpowiedzieć na
                  zagranie.
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
