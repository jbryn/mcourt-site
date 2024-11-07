import Image from "next/image";
import styles from "../surfaces.module.scss";

export default function Grass() {
  return (
    <section className="pb-[100px]">
      <div className={styles.wrapper}>
        <div className={styles.surface} style={{ alignItems: "center" }}>
          <Image
            className="lg:order-1"
            src="https://media.graphassets.com/ldUbVxBYT9G4XL3mtwsv"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Uniwersalna nawierzchnia</h2>
            <h3>
              <p>
                Sztuczna trawa to idealna nawierzchnia dla prywatnego kortu tenisowego. Doskonale sprawdza się
                jako kort przydomowy, bo wymaga bardzo mało czasu na bieżącą konserwację.
              </p>
              <p>
                {" "}
                Nawierzchnie ze sztucznej trawy, z naszej oferty, są trwałe i odporne na ścieranie. Równomierna
                struktura zapewnia solidne, stabilne odbicie piłki tenisowej, a jakość użytych materiałów do budowy
                kortu gwarantuje wiele lat korzystania z tego obiektu.
              </p>{" "}
            </h3>
          </div>
        </div>
        <div className={styles.surface} style={{ alignItems: "center" }}>
          <Image
            src="https://media.graphassets.com/YLuc9UsGTpKnCOhr8IT1"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Charakterystyka kortów sztucznych</h2>
            <h3>
              <p>
                Gra na sztucznej trawie to szybka gra, wynikająca z niskiego odbicia piłki. Efektem są krótsze wymiany, niż na innych rodzajach nawierzchni tenisowych. Dużą zaletą kortów tenisowych ze sztucznej trawy jest możliwość regulowania poślizgu poprzez ilość piasku wczesanego w kort.
              </p>
            </h3>
          </div>
        </div>
        <div className={styles.surface} style={{ alignItems: "center" }}>
          <Image
            className="lg:order-1"
            src="https://media.graphassets.com/nw6S8kb8RQyZna9uVejR"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Wypełnienie kortów</h2>
            <h3>
              <p>
                Piasek na nawierzchni kortu pomaga w utrzymaniu równomiernej wysokości trawy, co oferuje idealne warunki gry. Kort z sztucznej trawy, zasypany prawidłowo piaskiem jest stabilny, co minimalizuje ryzyko poślizgnięcia się i doznania kontuzji.
              </p>
            </h3>
          </div>
        </div>
        <div className={styles.surface} style={{ alignItems: "center" }}>
          <Image
            src="https://media.graphassets.com/9DWn6SluRBOUqAjCFKWy"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Kort dla każdego</h2>
            <h3>
              <p>
                Nasze korty tenisowe zapewniają doskonałe warunki gry w tenisa, niezależnie od poziomu umiejętności. W swojej ofercie posiadamy nawierzchnie od najlepszych czeskich, włoskich oraz polskich producentów sztucznej trawy.
              </p>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
