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
      </div>
    </section>
  );
}
