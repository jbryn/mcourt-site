import styles from "./surfaces.module.scss";

export default function Surfaces() {
  return (
    <section>
      <div className={styles.container}>
        <h2>Types of tennis surfaces</h2>
        <div className={styles.cards}>
          <div>
            <img src="./img/court6.png" alt="Laykold" />
            <h3>Laykold</h3>
          </div>
          <div>
            <img src="./img/court5.png" alt="Antuka premium" />
            <h3>Antuka Premium</h3>
          </div>
          <div>
            <img src="./img/court4.png" alt="Fast Track 15" />
            <h3>Fast Track 15</h3>
          </div>
          <div>
            <img src="./img/court3.png" alt="Padel courts" />
            <h3>Padel courts</h3>
          </div>
          <div>
            <img src="./img/court2.png" alt="Tennis Halls" />
            <h3>Tennis Halls</h3>
          </div>
          <div>
            <img src="./img/court1.png" alt="All year" />
            <h3>All year tennis courts</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
