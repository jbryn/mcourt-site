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
                "url('https://media.graphassets.com/U6sgWGOKSmyVDeA1vKUq')",
              backgroundPositionX: "-18px",
            }}
          >
            <h3 className="max-[338px]:pl-[20px]">Nawierzchnie akrylowe</h3>
          </Link>
          <Link
            href="/nawierzchnie-ceglane"
            style={{
              backgroundImage:
                "url('https://media.graphassets.com/MLaj2NHBTsWS4edMwdVk')",
              backgroundPositionX: "-15px",
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
                "url('https://media.graphassets.com/TMqQo2uHT8LKCQfLcsWL')",
              backgroundPositionX: "-12px",
            }}
          >
            <h3>Nawierzchnie ze sztucznej trawy</h3>
          </Link>
          <Link
            href="/padel"
            style={{
              backgroundImage:
                "url('https://media.graphassets.com/mUa2GvOyQQCRrSu1X8Wf')",
            }}
          >
            <h3>Korty do padla</h3>
          </Link>
          <Link
            href="/pickelball"
            style={{
              backgroundImage:
                "url('https://media.graphassets.com/rglaWOeqTyKNR9mWNfDg')",
            }}
          >
            <h3>Korty do pickelballa</h3>
          </Link>
          <Link
            href="/hale-tenisowe"
            style={{
              backgroundImage:
                "url('https://media.graphassets.com/O25H68sFQpSh8xQDLspq')",
              backgroundPositionX: "-26px",
            }}
          >
            <h3>Hale tenisowe</h3>
          </Link>
        </div>
      </div>
    </section>
  );
}
