import styles from "./surfaces.module.scss";
import Link from "next/link";

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
          <Link
            href="/nawierzchnie-akrylowe"
            style={{
              backgroundImage:
                "url('https://media.graphassets.com/DzqO16JWQaiwbfgCNB2q')",
            }}
          >
            <h3 className="max-[338px]:pl-[20px]">Nawierzchnie akrylowe</h3>
          </Link>
          <Link
            href="/nawierzchnie-ceglane"
            style={{
              backgroundImage:
                "url('https://media.graphassets.com/uPNLWO2ScKhthwc3Ujlw')",
            }}
          >
            <h3 className="max-[338px]:pl-[20px]">
              Nawierzchnie z mączki ceglanej
            </h3>
          </Link>
          <Link
            href="/sztuczna-trawa"
            style={{
              backgroundImage:
                "url('https://media.graphassets.com/J57YydIsSw6hUiJZOdVd')",
            }}
          >
            <h3>Nawierzchnie ze sztucznej trawy</h3>
          </Link>
          <Link
            href="/padel"
            style={{
              backgroundImage:
                "url('https://media.graphassets.com/nbrXBWYATtWqWmAwHTJX')",
            }}
          >
            <h3>Korty do padla</h3>
          </Link>
          <Link
            href="/pickelball"
            style={{
              backgroundImage:
                "url('https://media.graphassets.com/oZYjmEmEQS2RwnbEqtQd')",
            }}
          >
            <h3>Korty do pickelballa</h3>
          </Link>
          <Link
            href="/hale-tenisowe"
            style={{
              backgroundImage:
                "url('https://media.graphassets.com/3e2xp7oLSNOJfFQcgnsi')",
            }}
          >
            <h3>Hale tenisowe</h3>
          </Link>
        </div>
      </div>
    </section>
  );
}
