import Image from "next/image";
import styles from "./acryl.module.scss";

export default function Acryl() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.surface}>
          <Image
            className="lg:order-1"
            src="/img/acryl/image2.jpeg"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Tytuł sekcji</h2>
            <h3>
              <p>
                <strong>Nawierzchnia akrylowa</strong> jest jednym z
                najpopularniejszych rodzajów{" "}
                <strong>nawierzchni kortów tenisowych</strong>.{" "}
                <strong>Akrylowe korty tenisowe</strong> są wykorzystywane na
                największych i najbardziej prestiżowych turniejach, takich jak{" "}
                <strong>Australian Open, US Open, Miami Open</strong> czy
                <strong>turnieje tenisowe serii Masters</strong> oraz wiele
                innych. <strong>Nawierzchnia akrylowa</strong> zapewnia
                niezrównaną jakość gry i dynamiczne doświadczenie tenisowe
                zarówno dla profesjonalistów jak i amatorów.
              </p>
              <p>
                {" "}
                Dołącz do grona tych, którzy wybierają jakość i doświadczenie{" "}
                <strong>Laykold</strong>, i przekształć swój kort tenisowy w
                arenę mistrzów.
              </p>{" "}
            </h3>
          </div>
        </div>
        <div className={styles.surface}>
          <Image
            src="/img/acryl/image1.jpeg"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Tytuł sekcji</h2>
            <h3>
              <p>
                <strong>Korty tenisowe twarde</strong> charakteryzują się
                wyjątkową trwałością, elastycznością i odpornością na warunki
                atmosferyczne. Nie straszna jest im deszczowa pogoda - ich
                twardość oraz perfekcyjne wyrównanie pozwala na szybki odpływ
                wody. Co więcej, oferują <strong>tenisistom</strong> doskonałą
                przyczepność i charakteryzują się średniowysokim oraz szybkim
                odbiciem piłki, co przekłada się na precyzję i kontrolę w
                trakcie <strong>meczu tenisowego</strong>.
              </p>
            </h3>
          </div>
        </div>

        <div className={styles.laykold}>
          <Image
            className="lg:order-1"
            src="/img/acryl/image14.jpeg"
            loading="lazy"
            width={600}
            height={185}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Tytuł sekcji</h2>
            <h3>
              <p>
                Nawierzchnia <strong>Laykold</strong> to rozwiązanie, które
                rewolucjonizuje korty tenisowe na całym świecie. Charakteryzuje
                się wyjątkową jakością i trwałością, a także oferuje różne
                systemy, które można dostosować do konkretnej preferencji
                graczy. Warto bliżej przyjrzeć się dwóm głównym kategoriom
                nawierzchni Laykold: systemom twardym i{" "}
                <strong>amortyzowanym</strong>.
              </p>
            </h3>
          </div>
        </div>

        <div className={styles.surface}>
          <Image
            src="/img/acryl/image3.jpg"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Tytuł sekcji</h2>
            <h3>
              <p>
                Nawierzchnia <strong>Laykold</strong> to rozwiązanie, które
                rewolucjonizuje korty tenisowe na całym świecie. Charakteryzuje
                się wyjątkową jakością i trwałością, a także oferuje różne
                systemy, które można dostosować do konkretnej preferencji
                graczy. Warto bliżej przyjrzeć się dwóm głównym kategoriom
                nawierzchni Laykold: systemom twardym i{" "}
                <strong>amortyzowanym</strong>.
              </p>
            </h3>
          </div>
        </div>
        <div className={styles.surface}>
          <Image
            className="lg:order-1"
            src="/img/acryl/image15.jpeg"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Zalety nawierzchni tenisowych Laykold:</h2>
            <h3>
              <ul>
                <li>
                  Większa ochrona stawów - Kort pokryty wysokiej jakości akrylem
                  Laykold® zapewnia równomierne odbicie, tempo i niezawodne
                  trzymanie stopy
                </li>
                <li>
                  Nawierzchnia Laykold® jest oficjalną nawierzchnią turniejową –
                  trenując na tej nawierzchni zawodnik znacznie lepiej
                  przygotowuje się do gry na turniejach na najwyższym poziomie
                </li>
                <li>
                  System Laykold w porównaniu do konkurencyjnych nawierzchni o
                  podobnych parametrach wyróżniją się 14% lepszym efektem
                  amortyzacji, zmniejszając ryzyko powstawania kontuzji.
                </li>
              </ul>
            </h3>
          </div>
        </div>
        <div className="px-[100px] flex flex-col items-center gap-[50px]">
          <h2 className="font-semibold text-[42px]">
            Szybkość nawierzchni potwierdzają certyfikaty ITF:
          </h2>
          <Image
            className="rounded-[10px]"
            src="/img/acryl/image12.png"
            loading="lazy"
            width={1292}
            height={609}
            alt="laykold"
          />
        </div>
      </div>
    </section>
  );
}
