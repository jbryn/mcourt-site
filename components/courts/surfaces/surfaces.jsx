import Link from "next/link";
import Image from "next/image";
import styles from "./surfaces.module.scss";

export default function Surfaces() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.surface}>
          <Image
            className="lg:order-1"
            src="https://media.graphassets.com/5o1AZlSi6STe2ER8Qvge"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <Link
              href="/nawierzchnie-akrylowe"
              className="hover:cursor-pointer hover:underline"
            >
              <h2>Akrylowe nawierzchnie Laykold</h2>
            </Link>
            <h3>
              <p>
                W naszej ofercie znajdziesz prestiżowe{" "}
                <strong>nawierzchnie akrylowe</strong> od światowego lidera,
                firmy Laykold. To dokładnie te nawierzchnie, na których
                rywalizują zawodowcy na takich wydarzeniach jak{" "}
                <strong>US Open</strong>, <strong>Miami Open</strong> a także na
                kortach w <strong>Akademii Tenisa Kozerki</strong> czy na{" "}
                <strong>Legii Warszawa</strong>.
              </p>
            </h3>
          </div>
        </div>
        <div className={styles.surface}>
          <Image
            src="https://media.graphassets.com/oqbjYrm7Tjua5UUxjTgZ"
            loading="lazy"
            width={540}
            height={406}
            alt="fast-track"
          />
          <div className={styles.description}>
            <Link
              href="/nawierzchnie-ceglane"
              className="hover:cursor-pointer hover:underline"
            >
              <h2>Nawierzchnie z mączki ceglanej</h2>
            </Link>
            <h3>
              <p>
                Nasze nawierzchnie z klasycznej mączki ceglanej czeskiego
                producenta - <strong>Antuka Premium</strong> to połączenie
                tradycji i nowoczesności. Wyróżniają się one doskonałą
                przepuszczalnością wody, co oznacza, że kort po gwałtownych
                opadach po kilkunastu minutach będzie zawsze gotowy do gry.
                Dodatkowo, łatwa konserwacja sprawi, że Twój kort będzie zawsze
                idealnie równy.
              </p>
              <p>
                {" "}
                Odkryj nasze nawierzchnie z{" "}
                <strong>mączki ceglanej Antuka</strong> i przekonaj się, jakie
                korzyści może przynieść ten klasyczny wybór.
              </p>{" "}
            </h3>
          </div>
        </div>
        <div className={styles.surface}>
          <Image
            className="lg:order-1"
            src="https://media.graphassets.com/BsCPdzHATdGnCNkxjHAa"
            loading="lazy"
            width={540}
            height={406}
            alt="padel"
          />
          <div className={styles.description}>
            <Link
              href="/sztuczna-trawa"
              className="hover:cursor-pointer hover:underline"
            >
              <h2>Korty ze sztucznej trawy</h2>
            </Link>
            <h3>
              <p>
                Marzysz o własnym <strong>korcie tenisowym</strong> przy domu?
                Nasze <strong>korty tenisowe</strong> ze{" "}
                <strong>sztucznej trawy</strong> są idealnym rozwiązaniem.
              </p>
              <p>
                {" "}
                Stworzone z myślą o Twojej wygodzie, zapewniają doskonałą jakość
                gry i niski poziom konserwacji. Przenieś swoją pasję tenisową na
                prywatny kort i ciesz się nieograniczonymi grami o każdej porze
                dnia i nocy. Odkryj naszą ofertę{" "}
                <strong>kortów ze sztucznej trawy</strong> i rozpocznij swoją
                tenisową przygodę już teraz
              </p>{" "}
            </h3>
          </div>
        </div>
        <div className={styles.surface}>
          <Image
            src="https://media.graphassets.com/v3rhqLzaTA2lZfn08t0C"
            loading="lazy"
            width={540}
            height={406}
            alt="tennis-halls"
          />
          <div className={styles.description}>
            <Link
              href="/oswietlenie-kortow"
              className="hover:cursor-pointer hover:underline"
            >
              <h2>Oświetlenie kortów tenisowych</h2>
            </Link>
            <h3>
              <p>
                Nasze korty tenisowe wyróżniają się dzięki oświetleniu firmy
                LedCourt, lidera w branży oświetleniowej.
              </p>
              <p>
                {" "}
                Dzięki zaawansowanej technologii LED, zapewniamy nie tylko
                doskonałą jakość oświetlenia, ale także oszczędność energii.
              </p>{" "}
              <p>
                Zainwestuj w renomowaną jakość, a Twój kort zawsze będzie
                oświetlony w sposób idealny. Odkryj jasną przyszłość dla swojego
                kortu tenisowego dzięki LedCourt
              </p>
            </h3>
          </div>
        </div>
        <div className={styles.surface}>
          <Image
            src="https://media.graphassets.com/DK3vdAd9QumtBwSesf9K"
            className="lg:order-1"
            loading="lazy"
            width={540}
            height={406}
            alt="termoizolacja"
          />
          <div className={styles.description}>
            <Link
              href="/termoizolacja"
              className="hover:cursor-pointer hover:underline"
            >
              <h2>Termoizolacja hal tenisowych</h2>
            </Link>
            <h3>
              <p>
                Odpowiednia izolacja termiczna może przyczynić się do utrzymania
                stabilnej temperatury w hali, co jest istotne zarówno dla
                zawodników, jak i widzów. Dodatkowo, poprawia efektywność
                systemu ogrzewania, co w niedalekiej przyszłości przynosi duże
                oszczędności energetyczne.
              </p>
              <p>
                {" "}
                Sprawdź jakie korzyści może przynieść Ci poprawa termoizolacji
                obiektu.
              </p>{" "}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
