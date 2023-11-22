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
              Padel to dynamiczny i ekscytujący sport, który łączy w sobie
              emocje tenisa z łatwością nauki dla wszystkich grup wiekowych.
              Grając na specjalnie przystosowanych boiskach otoczonych szklanymi
              ścianami, padel oferuje unikalne doznania, podnosząc rywalizację
              na nowy poziom. Dzięki prostszym zasadom niż tradycyjny tenis,
              padel jest dostępny dla każdego, a jednocześnie zapewnia wyzwania
              dla doświadczonych graczy.
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
            <h2>Czym jest Padel?</h2>
            <h3>
              W sporcie tym można znaleźć kombinacje tenisa i squasha. Zasady
              punktacji są identyczne jak w przypadku tenisa. Ze squasha’em
              łączy go fakt, że sama gra odbywa się w zamkniętym korcie.
              Przestrzeń do gry otacza specjalne ogrodzenie boiska do padla.
              Może być ono wykonane z siatki drucianej. Bywają także korty
              otoczone wysokimi ścianami z betonu lub szkła. Komfortową grę
              zapewnia odpowiednia nawierzchnia boiska do padla.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
