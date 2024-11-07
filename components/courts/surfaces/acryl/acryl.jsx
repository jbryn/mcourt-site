import Image from "next/image";
import styles from "../surfaces.module.scss";

export default function Acryl() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.surface}>
          <Image
            className="lg:order-1"
            src="https://media.graphassets.com/I9tcS4GSeCcI2sSQ2qr6"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Czym są akryle?</h2>
            <h3>
              <p>
                Nawierzchnia akrylowa jest jedną z najpopularniejszych nawierzchni kortów tenisowych na całym
                świecie. Akrylowe korty tenisowe są wykorzystywane na największych i najbardziej prestiżowych
                turniejach, takich jak Australian Open, US Open, Miami Open czy turnieje tenisowe serii Masters oraz
                wielu innych. Nawierzchnia akrylowa zapewnia zarówno profesjonalistom, jak i amatorom,
                dynamiczną grę, ponieważ gwarantuje szybkie i równe odbicie piłki.
              </p>
              <p className="pt-[10px]">
                {" "}
                Dołącz do grona tych, którzy wybierają jakość i doświadczenie Laykold i przekształć swój kort
                tenisowy w arenę mistrzów.
              </p>{" "}
            </h3>
          </div>
        </div>
        <div className={styles.surface}>
          <Image
            className="min-[600px]:min-h-[406px]"
            src="https://media.graphassets.com/QDn15GJJSeiHUSP9K0FM"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Zalety nawierzchni tenisowych Laykold:</h2>
            <h3>
              <ul className="px-[10px] flex flex-col gap-[10px]">
                <li>
                  Większa ochrona stawów - kort pokryty wysokiej jakości akrylem <strong>Laykold®</strong> zapewnia równomierne
                  odbicie, tempo i trzymanie stopy,
                </li>
                <li>
                  Nawierzchnia <strong>Laykold®</strong> jest oficjalną nawierzchnią turniejową – trenując na tej nawierzchni, zawodnik
                  przygotowuje się do gry na turniejach na najwyższym poziomie,
                </li>
                <li>
                  System <strong>Laykold®</strong> w porównaniu do konkurencyjnych nawierzchni o podobnych parametrach,
                  wyróżnia się znacznie lepszym efektem amortyzacji,
                </li>
              </ul>
            </h3>
          </div>
        </div>

        <div className={styles.laykold}>
          <div className="lg:order-1">
            <Image
              src="https://media.graphassets.com/DJqtSYORGqo5eQN5dwqy"
              loading="lazy"
              width={540}
              height={406}
              alt="antuka"
            />
          </div>
          <div className={styles.description}>
            <h2>Zaufanie US Open</h2>
            <h3>
              <p>
                Nawierzchnia Laykold to rozwiązanie, które zdobyło uznanie w świecie tenisa. Jest to syntetyczna
                nawierzchnia tenisowa, która oferuje wiele korzyści, takich jak trwałość, odporność na warunki
                atmosferyczne oraz doskonałe właściwości gry. Od 2020 roku nawierzchnia Laykold jest oficjalną
                nawierzchnią turnieju US Open, co świadczy o najwyższej jakości tego produktu.
              </p>
            </h3>
          </div>
        </div>

        <div className={styles.surface}>
          <Image
            src="https://media.graphassets.com/4Fo65evrRQ2MZaTx8iQO"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Nawierzchnia turniejowa</h2>
            <h3>
              <p>
                Nawierzchnia Laykold jest używana także na innych prestiżowych turniejach, takich jak Miami Open,
                New York Open, Winston Salem Open, San Diego Open, itp., co potwierdza jej popularność i zaufanie
                do niej organizatorów ogromnych imprez tenisowych. Zawodnicy chwalą tę nawierzchnię za
                równomierne odbicie piłki, elastyczność oraz przyjemność z gry.
              </p>
            </h3>
          </div>
        </div>

        <div className={styles.surface}>
          <Image
            className="lg:order-1 max-h-[300px]"
            src="https://media.graphassets.com/ahgdtH8S92z0H64tfAD8"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Żywotność</h2>
            <h3>
              <p>
                Czy ma sens coroczne zmienianie nawierzchni kortów tenisowych? Tradycyjne rozwiązania sprawiają,
                że korty tracą swoją amortyzację wraz z upływem lat, a ich właściwości stopniowo spadają do zera w
                ciągu 3 lat od zainstalowania. Jednak dzięki rewolucyjnej technologii Laykold Masters®, ta sytuacja
                ulega zmianie! Nasze korty amortyzujące Laykold Masters® utrzymują imponujące 95%-98%
                elastyczności nawet po 10 latach od instalacji, co oznacza przełom w trwałości i wydajności kortów
                tenisowych.
              </p>
            </h3>
          </div>
        </div>

        <div className="pb-[30px] flex flex-col items-center gap-[50px]">
          <h2 className="font-semibold text-[42px] max-w-[1000px] text-center max-[600px]:text-[30px]">
            Nawierzchnia certyfikowana przez Międzynarodową Federację Tenisa
            (ITF):
          </h2>
          <Image
            className="rounded-[10px]"
            src="https://media.graphassets.com/9eroL6XZTCWeZqs0fZTU"
            loading="lazy"
            width={646}
            height={304}
            alt="laykold"
          />
        </div>

        <div className={styles.surface}>
          <Image
            src="https://media.graphassets.com/tmqrzSGFSuyhGKdMcE1y"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Systemy dopasowane do potrzeb</h2>
            <h3>
              <p>
                Nawierzchnia Laykold to rozwiązanie, które rewolucjonizuje korty
                tenisowe na całym świecie. Charakteryzuje się wyjątkową jakością
                i trwałością, a także oferuje różne systemy twarde i
                amortyzowane, które można dostosować do konkretnej preferencji
                graczy. Skontaktuj się z naszymi przedstawicielami w celu
                dobrania odpowiedniego systemu nawierzchni Laykold do Twoich
                potrzeb.
              </p>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
