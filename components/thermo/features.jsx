import Image from "next/image";
import styles from "./features.module.scss";

export default function Features() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.surface}>
          <Image
            className="lg:order-1"
            src="https://media.graphassets.com/467c6b3StqqT1fJa3aDI"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Ocieplenie obiektu</h2>
            <h3>
              Dlaczego warto skorzystać z naszych usług? Odpowiedź jest prosta: nasze doświadczenie i zaangażowanie w dostarczaniu najwyższej jakości rozwiązań termoizolacyjnych dla hal tenisowych. Niezależnie od tego, czy prowadzisz profesjonalny obiekt sportowy, czy masz prywatną halę do tenisa, nasza firma ma odpowiednie narzędzia i doświadczenie, aby zoptymalizować warunki termiczne na Twojej hali.
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
            <h2>Opis procesu termoizolacji</h2>
            <h3>
              Proces polega na wprowadzaniu styropianu pomiędzy dwie warstwy powłok, co tworzy efektywną warstwę izolacyjną o grubości, zależnej od stopnia naciągnięcia powłok. W miejscach, gdzie jest to konieczne, stosowane są specjalne dystansery wzmacniające, aby zapewnić dodatkową trwałość i wytrzymałość konstrukcji.
            </h3>
          </div>
        </div>
        <div className={styles.surface}>
          <Image
            className="lg:order-1"
            src="https://media.graphassets.com/yZBAwHMLRLKuVUHIcfWZ"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Redukcja strat ciepła</h2>
            <h3>
              Termoizolacja hali tenisowej to kluczowy element utrzymania optymalnych warunków o każdej porze roku. Odpowiednia termoizolacja przyczynia się do redukcji strat ciepła, co nie tylko obniża koszty ogrzewania, ale również wpływa pozytywnie na komfort osób korzystających z obiektu. Dla zawodników oznacza to stabilne warunki gry, bez względu na panującą pogodę na zewnątrz.
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
            <h2>Termoizolacja=niższe rachunki za ogrzewanie</h2>
            <h3>
              Dobrze wykonana termoizolacja hal pozwoli znacząco obniżyć koszty ogrzewania, a oszczędności mogą sięgać nawet do 80%. Latem temperatura w zaizolowanej hali jest niższa o około 15°C niż na zewnątrz, natomiast zimą jest wyższa o około 10 °C. Dlatego po zaizolowaniu hal, nasze rachunki za ogrzewanie hali będą dużo mniejsze.
            </h3>
          </div>
        </div>
        <h2 className="text-center text-[26px] font-bold px-[60px] max-[600px]:text-[18px]">
          Temperatury w hali w szczycie letniego sezonu przed i po wykonaniu
          termoizolacji
        </h2>
        <div className="flex pb-[100px] pt-[60px] lg:gap-[100px] px-[20px] text-[14px] max-[800px]:flex-col max-[800px]:gap-[140px]">
          <div className="flex flex-col gap-[60px] items-center text-center">
            <Image
              className="rounded-[15px] max-w-[283px]"
              src="https://media.graphassets.com/Ans7MMCLRE2JllYwIt4z"
              loading="lazy"
              width={378}
              height={504}
              alt="antuka"
            />

            <p>
              Przed wykonaniem termoizolacji, temperatura w hali 28,2 *C przy
              wilgotności 89,4%
            </p>
          </div>
          <div className="flex flex-col gap-[60px] items-center text-center">
            <Image
              className="rounded-[15px] max-w-[283px]"
              src="https://media.graphassets.com/a1ZXYHAST9uKhePjOaNV"
              loading="lazy"
              width={378}
              height={504}
              alt="antuka"
            />
            <p>
              Po wykonaniu termoizolacji, temperatura w hali 21,8 *C przy
              wilgotności 71,7%
            </p>
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
            <h2>Pozostałe korzyści</h2>
            <ul className="list-disc pl-10">
              <li>Decydując się na izolację, możemy dobrać optymalną jednostkę grzewczą do danej hali, co przekłada się na dodatkowe oszczędności eksploatacyjne.</li>
              <li>Dzięki izolacji znika problem skraplającej się pary wodnej na ścianach i na plandekach.</li>
              <li>Kolejną korzyścią jest znaczne wzmocnienie mechaniczne ścian hali, co sprawia, że jest ona bardziej odporna na wiatr.</li>
              <li>Uzyskujemy izolację akustyczną dzięki średnio 30-centymetrowej warstwie styropianu w ścianach, redukuje ona hałas wydostający się na zewnątrz o imponujące 29-32 dB.</li>
            </ul>
          </div>
        </div>
        <h2 className="text-center text-[26px] font-bold px-[60px] max-[600px]:text-[18px]">
          Jesteśmy przekonani, że nasza oferta zapewni Państwu kompleksowe i skuteczne ocieplenie hal, co przyczyni się do poprawy warunków wewnątrz obiektu, obniżenia kosztów ogrzewania oraz zwiększenia trwałości konstrukcji. Chętnie odpowiemy na wszelkie pytania i dostosujemy naszą ofertę do Państwa indywidualnych potrzeb.
        </h2>
      </div>
    </section>
  );
}
