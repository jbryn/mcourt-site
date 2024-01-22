import Image from "next/image";
import styles from "./features.module.scss";

export default function Features() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.surface}>
          <Image
            className="lg:order-1"
            src="https://media.graphassets.com/yIkmbfzoRZWAeFI0fGPE"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Czym jest Padel?</h2>
            <h3>
              <strong>Padel</strong> to dynamiczny i ekscytujący sport, który
              łączy w sobie emocje tenisa z łatwością nauki dla wszystkich grup
              wiekowych. Grając na specjalnie przystosowanych boiskach
              otoczonych szklanymi ścianami, <strong>padel oferuje</strong>{" "}
              unikalne doznania, podnosząc rywalizację na nowy poziom. Dzięki
              prostszym zasadom niż tradycyjny tenis,{" "}
              <strong>padel jest dostępny dla każdego</strong>, a jednocześnie
              zapewnia wyzwania dla doświadczonych graczy.
            </h3>
          </div>
        </div>
        <div className={styles.surface}>
          <Image
            src="https://media.graphassets.com/l0uB4gOjQzKUMDGLTez3"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Zasady gry</h2>
            <h3>
              W sporcie tym można znaleźć{" "}
              <strong>kombinacje tenisa i squasha</strong>. Zasady punktacji są
              identyczne jak w przypadku tenisa. Ze squasha’em łączy go fakt, że
              sama gra odbywa się w zamkniętym korcie. Przestrzeń do gry otacza
              specjalne <strong>ogrodzenie boiska do padla</strong>. Może być
              ono wykonane z siatki drucianej. Bywają także korty otoczone
              wysokimi ścianami z betonu lub szkła. Komfortową grę zapewnia{" "}
              <strong>odpowiednia nawierzchnia boiska do padla</strong>.
            </h3>
          </div>
        </div>
        <div className={styles.surface}>
          <Image
            className="lg:order-1"
            src="https://media.graphassets.com/Q9llusXyRhUmbEaHMe3Q"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Specjalistyczna podbudowa</h2>
            <h3>
              Odpowiednio wykonana podbudowa gwarantuje{" "}
              <strong>trwałość kortów na wiele lat</strong>. Przed wylaniem
              płyty betonowej podłoże powinno zostać wyrównane przy użyciu
              specjalistycznych maszyn profilujących (zdjęcie obok). Płyty
              wykonujemy z betonu posadzkowego o odpowiedniej grubości lub z
              kruszywa, oporowanego pasem betonu.
            </h3>
          </div>
        </div>
        <div className={styles.surface}>
          <Image
            src="https://media.graphassets.com/XQn1Q8zmSVKyv3gM2WvQ"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Nawierzchnia do padla</h2>
            <h3>
              <p>
                Ze względu na komfort gry oraz stosunkowo niskie nakłady pracy
                podczas eksploatacji{" "}
                <strong>
                  najczęściej rekomendowaną nawierzchnią do gry w Padla jest
                  sztuczna trawa
                </strong>
                . Jest to <strong>nawierzchnia syntetyczna</strong>, składająca
                się z mocnego i elastycznego podkładu, w który wtkane są włókna.
              </p>
              <p>
                Najczęściej stosowana jest sztuczna trawa w kolorze niebieskim.
              </p>
            </h3>
          </div>
        </div>
        <div className={styles.surface}>
          <Image
            className="lg:order-1"
            src="https://media.graphassets.com/HtaMsG07S1qCwMxl7dnq"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Oświetlenie</h2>
            <h3>
              Bardzo ważnym aspektem przy budowie kortu do padla jest{" "}
              <strong>odpowiednie oświetlenie</strong>, które ma decydujący
              wpływ na grę po zmroku. Piłka musi być bardzo dobrze widoczna, jak
              i zawodnicy znajdujący się na korcie. Rekomendowane jest
              oświetlenie lampami LED, dające minimum 200 luksów. Oświetlenie, na
              tym poziomie, znajduje się w systemie Standard, składa się ono z 4
              lamp zamontowanych na czterech słupach o wysokości 6m wokół całego
              kortu. Oświetlenie na poziomie 300 luksów montujemy w systemie
              Panorama. Składa się ono z 8 lamp, które montowane są na czterech
              słupach dookoła kortu.
            </h3>
          </div>
        </div>
        <h2 className="text-[42px] font-bold">SYSTEMY OGRODZEŃ</h2>
        <div className={styles.surface}>
          <Image
            className="lg:order-1"
            src="https://media.graphassets.com/ilJcndDRSWW9ab5yzt30"
            loading="lazy"
            width={540}
            height={406}
            alt="standard"
          />
          <div className={styles.description}>
            <h2>System Standard</h2>
            <h3>
              <strong>Konstrukcja kortu</strong> w systemie Standard wykonana
              jest z stalowych ocynkowanych profili zamkniętych malowanych
              proszkowo. Ściany boczne łączone są za pomocą śrub do słupów
              ogrodzeniowych, zbudowane są z ram wypełnionych siatką malowaną
              proszkowo.{" "}
              <strong>Przeszklenia kortu</strong> na ścianach końcowych i
              bocznych, na odcinku czterometrowym od narożników, składają się z
              szkła hartowanego o grubości 10mm.
            </h3>
          </div>
        </div>
        <div className={styles.surface}>
          <Image
            className="lg:order-1"
            src="https://media.graphassets.com/SdmikGKhSSK7EbQ1YUr1"
            loading="lazy"
            width={540}
            height={406}
            alt="panorama"
          />
          <div className={styles.description}>
            <h2>System Panorama</h2>
            <h3>
              Konstrukcja kortu w systemie Panorama bazuje na takich samych
              elementach, jak w przypadku systemu Standard, za wyjątkiem szkła
              hartowanego, które w tym wypadku ma grubość 12mm. Nazwa panorama
              wywodzi się z zwiększonej widoczności kortu, spowodowanej
              usunięciem słupów w miejscach przeszkleń tj. na ścianach końcowych
              i odcinkach czterometrowym na ścianach bocznych. W{" "}
              <strong>systemie Panorama</strong> oświetlenie kortu jest na
              poziomie 300 luksów.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
