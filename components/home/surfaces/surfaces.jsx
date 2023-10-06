import Image from "next/image";
import styles from "./surfaces.module.scss";
import Link from "next/link";

export default function Surfaces() {
  return (
    <section className="pt-[200px]">
      <div className={styles.container}>
        <h2>
          Nasza oferta obejmuje wysokiej jakości{" "}
          <strong>
            nawierzchnie tenisowe renomowanych światowych producentów
          </strong>
        </h2>
        <div className={styles.cards}>
          <Link href="/nawierzchnie-akrylowe">
            <Image
              src="https://media.graphassets.com/DzqO16JWQaiwbfgCNB2q"
              alt="laykold"
              width={350}
              height={406}
            />
            <h3 className="max-[338px]:pl-[20px]">Nawierzchnie akrylowe</h3>
          </Link>
          <Link href="/nawierzchnie-ceglane">
            <Image
              src="https://media.graphassets.com/uPNLWO2ScKhthwc3Ujlw"
              alt="antuka"
              width={350}
              height={406}
            />
            <h3 className="max-[338px]:pl-[20px]">Nawierzchnie ceglane</h3>
          </Link>
          <Link href="/sztuczna-trawa">
            <Image
              src="https://media.graphassets.com/J57YydIsSw6hUiJZOdVd"
              alt="fast-track15"
              width={350}
              height={406}
            />
            <h3>Sztuczna trawa</h3>
          </Link>
          <Link href="/padel">
            <Image
              src="https://media.graphassets.com/nbrXBWYATtWqWmAwHTJX"
              alt="padel"
              width={350}
              height={406}
            />
            <h3>Korty do padla</h3>
          </Link>
          <Link href="/hale-tenisowe">
            <Image
              src="https://media.graphassets.com/oZYjmEmEQS2RwnbEqtQd"
              alt="tennis-halls"
              width={350}
              height={406}
            />
            <h3>Hale tenisowe</h3>
          </Link>
          <Link href="/nawierzchnie-hybrydowe">
            <Image
              src="https://media.graphassets.com/3e2xp7oLSNOJfFQcgnsi"
              alt="all-year"
              width={350}
              height={406}
            />
            <h3>Korty całoroczne</h3>
          </Link>
        </div>
      </div>
    </section>
  );
}
