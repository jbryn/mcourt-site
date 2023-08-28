import styles from "./description.module.scss";

export default function Description() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.description}>
          <h2>Court Description</h2>
          <ul>
            <li>
              <img src="./icons/tick.svg" alt="tick" />
              <span>Lorem ipsum dolor sit amet consectetur</span>
            </li>
            <li>
              <img src="./icons/tick.svg" alt="tick" />
              <span>Nibh suspendisse aliquam sed</span>
            </li>
            <li>
              <img src="./icons/tick.svg" alt="tick" />
              <span>Libero eu faucibus commodo sagittis</span>
            </li>
            <li>
              <img src="./icons/tick.svg" alt="tick" />
              <span>Sit accumsan et mauris fringilla</span>
            </li>
            <li>
              <img src="./icons/tick.svg" alt="tick" />
              <span>Elementum elit interdum scelerisque consectetur</span>
            </li>
            <li>
              <img src="./icons/tick.svg" alt="tick" />
              <span>Quis vitae pharetra aenean nibh</span>
            </li>
          </ul>
        </div>
        <img src="./vectors/court.svg" alt="court" />
      </div>
    </section>
  );
}
