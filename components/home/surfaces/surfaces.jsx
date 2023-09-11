import Image from "next/image";
import styles from "./surfaces.module.scss";

export default function Surfaces() {
  return (
    <section>
      <div className={styles.container}>
        <h2>
          Nasza oferta obejmuje wysokiej jakości{" "}
          <strong>
            nawierzchnie tenisowe renomowanych światowych producentów
          </strong>
        </h2>
        <div className={styles.cards}>
          <div>
            <Image
              src="/img/surfaces/court6.png"
              alt="laykold"
              width={350}
              height={406}
            />
            <h3>Nawierzchnie akrylowe</h3>
          </div>
          <div>
            <Image
              src="/img/surfaces/court5.png"
              alt="antuka"
              width={350}
              height={406}
            />
            <h3>Nawierzchnie ceglane</h3>
          </div>
          <div>
            <Image
              src="/img/surfaces/court4.png"
              alt="fast-track15"
              width={350}
              height={406}
            />
            <h3>Sztuczna trawa</h3>
          </div>
          <div>
            <Image
              src="/img/surfaces/court3.png"
              alt="padel"
              width={350}
              height={406}
            />
            <h3>Korty do padla</h3>
          </div>
          <div>
            <Image
              src="/img/surfaces/court2.png"
              alt="tennis-halls"
              width={350}
              height={406}
            />
            <h3>Hale tenisowe</h3>
          </div>
          <div>
            <Image
              src="/img/surfaces/court1.png"
              alt="all-year"
              width={350}
              height={406}
            />
            <h3>Korty całoroczne</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
