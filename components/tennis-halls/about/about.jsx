import styles from "./about.module.scss";

export default function About() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.cardsWrapper}>
          <div className={styles.card}>
            <h2 id="about">Tennis Halls</h2>
            <p>
              Witamy w mCourt.eu, liderze w budowie i wyposażeniu kortów w
              Polsce. Z dumą dostarczamy najwyższej jakości korty tenisowe, do
              padla i pickleballa od ponad 10 lat. Nasze doświadczenie i
              zrozumienie potrzeb klienta czynią nas niezrównanym wyborem dla
              Twojego projektu.
            </p>
            <p>
              Skontaktuj się z nami już dziś i przekonaj się, jak możemy pomóc w
              realizacji Twojego wymarzonego kortu.
            </p>
            <div className={styles.bottom}>
              <img
                className={styles.logo}
                src="./img/logos/mcourt-logo-color.png"
                alt="logo"
              />
            </div>
          </div>

          <img
            className={styles.image}
            src="./img/tennis-halls/hall.png"
            alt="tennis-hall"
          />
        </div>
        <div className={styles.surface}>
          <img
            src="./img/tennis-halls/player.png"
            width={540}
            height={406}
            alt="player"
          />
          <div className={styles.description}>
            <h2>Fast Track 15</h2>
            <h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nibh suspendisse aliquam
                sed libero eu faucibus commodo sagittis. Sit accumsan et mauris
                fringilla elementum elit interdum scelerisque consectetur.
              </p>
              <p>
                {" "}
                Quis vitae pharetra aenean nibh pellentesque ac tristique metus
                enim. Viverra mauris risus nunc nibh cras.
              </p>{" "}
              <p>Et tortor massa sit cras faucibus arcu commodo.</p>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
