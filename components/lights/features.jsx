import Image from "next/image";
import styles from "./features.module.scss";

export default function Features() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.surface}>
          <Image
            className="lg:order-1"
            src="https://media.graphassets.com/IrbwnQSJK1gomxblBNhQ"
            loading="lazy"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Jak ważne jest odpowiednie oświetlenie kortu?</h2>
            <h3>
              <strong>Jakość oświetlenia kortów tenisowych</strong> ma kluczowe
              znaczenie dla komfortu i{" "}
              <strong>bezpieczeństwa podczas rozgrywek i treningów</strong>. To
              <strong> innowacyjne oświetlenie</strong> generuje wystarczające
              światło, aby kort był odpowiednio doświetlony, jednocześnie
              eliminując efekt oślepiania zarówno zawodników, jak i
              obserwatorów, w tym sędziów i kibiców.
            </h3>
          </div>
        </div>
        <div className={styles.surface}>
          <Image
            src="https://media.graphassets.com/CfSXPGbDSnWPh9Nq0kQu"
            loading="lazy"
            width={440}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Proponowane oprawy</h2>
            <h3>
              Nasze lampy <strong>Ledcourt</strong> są dziełem niemieckiego
              producenta o wieloletnim doświadczeniu w branży oświetleniowej.
              Projektowane z myślą o kortach tenisowych, te{" "}
              <strong>profesjonalne lampy LED</strong> są znane ze swojej
              bezkonkurencyjnej jakości świetlnej, łącząc w sobie nie tylko
              funkcjonalność, ale także trwałość.
            </h3>
          </div>
        </div>
        <div className={styles.surface}>
          <Image
            className="lg:order-1"
            src="https://media.graphassets.com/BPf06FHxTe2BWmXSNDs6"
            loading="lazy"
            width={566}
            height={249}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Rozproszenie światła</h2>
            <h3>
              Przykładowy schemat rozproszenia światła na korcie w jednym z
              proponowanych systemów. W ramach tego projektu zastosowaliśmy
              cztery słupy o wysokości 5-6 metrów, rozmieszczone w czterech
              punktach wokół kortu. Na każdym słupie zawieszone są dwie lampy
              <strong>Ledcourt Standard+ o mocy 300W</strong>.
            </h3>
          </div>
        </div>
        <div className={styles.surface}>
          <Image
            src="https://media.graphassets.com/2BSSxokMTpuekfC1SRNx"
            loading="lazy"
            width={603}
            height={324}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Rozmieszczenie słupów</h2>
            <h3>
              <p>Przykładowy system rozmieszczenia słupów na korcie</p>
              <ul className="pl-[20px]">
                <li>
                  <strong>Minimalny poziom oświetlenia: 300 luksów</strong>
                </li>
                <li>
                  Typ lamp: <strong>Ledcourt Standard+ 300W</strong>
                </li>
                <li>
                  Rozmieszczenie: 4 słupy w czterech punktach wokół kortu, z
                  dwoma lampami na każdym
                </li>
              </ul>
            </h3>
          </div>
        </div>
        <div className={styles.surface}>
          <Image
            className="lg:order-1"
            src="https://media.graphassets.com/FR6JpcqdRdqJNNxP4cES"
            loading="lazy"
            width={566}
            height={249}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Zgłoś się do nas!</h2>
            <h3>
              Nasi doświadczeni technicy są gotowi dostosować projekt
              oświetlenia do Twoich indywidualnych potrzeb. Zapraszamy do
              kontaktu, abyśmy mogli przygotować dla Ciebie indywidualną
              propozycję, dostosowaną do specyfiki{" "}
              <strong>Twojego kortu tenisowego</strong>. Wierzymy, że nasza
              ekspertyza pomoże stworzyć optymalne warunki dla Twojej{" "}
              <strong>pasji tenisowej</strong>.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
