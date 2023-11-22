import Image from "next/image";
import styles from "./features.module.scss";

export default function Features() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.surface}>
          <Image
            className="lg:order-1 rotate-180"
            src="https://media.graphassets.com/467c6b3StqqT1fJa3aDI"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h3>
              Dlaczego warto skorzystać z naszych usług? Odpowiedź jest prosta:
              nasze doświadczenie i zaangażowanie w dostarczanie najwyższej
              jakości rozwiązań termoizolacyjnych dla hal tenisowych.
              Niezależnie od tego, czy prowadzisz profesjonalny obiekt sportowy,
              czy też prywatną halę do tenisa, nasza firma ma odpowiednie
              narzędzia i ekspertyzę, aby zoptymalizować termoizolację i
              stworzyć optymalne warunki dla gry.
            </h3>
          </div>
        </div>
        <div className={styles.surface}>
          <Image
            src="https://media.graphassets.com/sZ2UUyCzSgSWm4dYYkkP"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h3>
              Proces ten polega na wprowadzaniu styropianu pomiędzy dwie warstwy
              powłok, co tworzy efektywną warstwę izolacyjną o grubości zależnej
              od stopnia naciągnięcia powłok. W miejscach, gdzie jest to
              konieczne, stosowane są specjalne dystansery wzmacniające, aby
              zapewnić dodatkową trwałość i wytrzymałość konstrukcji.
            </h3>
          </div>
        </div>
        <div className={styles.surface}>
          <Image
            className="lg:order-1 rotate-180"
            src="https://media.graphassets.com/yZBAwHMLRLKuVUHIcfWZ"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h3>
              Ocieplenie hali tenisowej to kluczowy element utrzymania
              optymalnych warunków zarówno podczas zimy, jak i latem. Poprawa
              termoizolacji przyczynia się do redukcji strat ciepła, co nie
              tylko obniża koszty ogrzewania, ale również wpływa pozytywnie na
              komfort korzystających z obiektu. Dla zawodników oznacza to
              stabilne warunki gry, bez względu na panującą pogodę na zewnątrz.
            </h3>
          </div>
        </div>
        <div className={styles.surface}>
          <Image
            src="https://media.graphassets.com/sZ2UUyCzSgSWm4dYYkkP"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Korzyści z wykonania termoizolacji</h2>
            <h3>
              Przede wszystkim – dobrze wykonana termoizolacja hal pozwoli
              znacząco obniżyć koszty ogrzewania - a same oszczędności mogą
              sięgać nawet do 80%. Po zaizolowaniu hal wewnątrz poprawiają się
              znacznie lepsze warunki. Przykładowo latem temperatura jest o
              około 15°C niższa niż na zewnątrz, co sprawia, że hala jest
              przyjemnie chłodniejsza. Zimą natomiast utrzymuje się ciepło, a
              temperatura w hali rano może być o 11-18°C wyższa niż na zewnątrz,
              zwłaszcza w przypadku niskich temperatur.
            </h3>
          </div>
        </div>
        <div className="flex pb-[100px] pt-[60px] lg:gap-[100px] px-[20px] text-[14px] max-[600px]:flex-col max-[600px]:gap-[140px]">
          <div className="flex flex-col gap-[60px] items-center">
            <Image
              className="rotate-90 rounded-[15px]"
              src="https://media.graphassets.com/Ans7MMCLRE2JllYwIt4z"
              loading="lazy"
              width={378}
              height={504}
              alt="antuka"
            />

            <p>Temperatura na zewnątrz 28,2*C</p>
          </div>
          <div className="flex flex-col gap-[60px] items-center">
            <Image
              className="rotate-90 rounded-[15px]"
              src="https://media.graphassets.com/zzyKzp5IRvyRMQf7EBUY"
              loading="lazy"
              width={378}
              height={504}
              alt="antuka"
            />
            <p>Temperatura w zaizolowanej hali 21,8*C</p>
          </div>
        </div>

        <div className={styles.surface}>
          <Image
            className="lg:order-1"
            src="https://media.graphassets.com/DK3vdAd9QumtBwSesf9K"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h3>
              <p>
                Dzięki izolacji termicznej możemy dobrać optymalną jednostkę
                grzewczą do danej hali, co przekłada się na dodatkowe
                oszczędności eksploatacyjne. Problem skraplającej się pary
                wodnej na ścianach i spływającej po plandekach jest
                natychmiastowo wyeliminowany.
              </p>
              <p>
                Dodatkową korzyścią jest znaczne wzmocnienie mechaniczne ścian
                hali, co sprawia, że jest ona bardziej odporna na wiatr.
                Izolacja akustyczna, uzyskiwana dzięki średnio 30-centymetrowej
                warstwie styropianu w ścianach, redukuje hałas wydostający się
                na zewnątrz o imponujące 29-32 dB.
              </p>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
