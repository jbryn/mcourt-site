import styles from "./surfaces.module.scss";

export default function Surfaces() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.surface}>
          <img
            className="order-1"
            src="./img/surfaces/antuka.png"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Antuka Premium</h2>
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
        <div className={styles.surface}>
          <img
            src="./img/surfaces/fast-track.png"
            width={540}
            height={406}
            alt="antuka"
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
        <div className={styles.surface}>
          <img
            className="order-1"
            src="./img/surfaces/padel.png"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Padel courts</h2>
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
        <div className={styles.surface}>
          <img
            src="./img/surfaces/tennis-halls.png"
            width={540}
            height={406}
            alt="antuka"
          />
          <div className={styles.description}>
            <h2>Tennis halls</h2>
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
