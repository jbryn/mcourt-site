import Image from "next/image";
import styles from "./surfaces.module.scss";

export default function Surfaces() {
  return (
    <section>
      <div className={styles.container}>
        <h2>Types of tennis surfaces</h2>
        <div className={styles.cards}>
          <div>
            <Image
              src="/img/surfaces/court6.png"
              alt="laykold"
              width={350}
              height={406}
            />
            <h3>Laykold</h3>
          </div>
          <div>
            <Image
              src="/img/surfaces/court5.png"
              alt="antuka"
              width={350}
              height={406}
            />
            <h3>Antuka Premium</h3>
          </div>
          <div>
            <Image
              src="/img/surfaces/court4.png"
              alt="fast-track15"
              width={350}
              height={406}
            />
            <h3>Fast Track 15</h3>
          </div>
          <div>
            <Image
              src="/img/surfaces/court3.png"
              alt="padel"
              width={350}
              height={406}
            />
            <h3>Padel courts</h3>
          </div>
          <div>
            <Image
              src="/img/surfaces/court2.png"
              alt="tennis-halls"
              width={350}
              height={406}
            />
            <h3>Tennis Halls</h3>
          </div>
          <div>
            <Image
              src="/img/surfaces/court1.png"
              alt="all-year"
              width={350}
              height={406}
            />
            <h3>All year tennis courts</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
