import { useState } from "react";
import styles from "./colors.module.scss";

export default function Colors() {
  const [image, setImage] = useState("./img/colors/green.png");

  function handleMouseEnter(imagePath) {
    return () => {
      setImage(imagePath);
    };
  }

  return (
    <section>
      <div
        className={styles.wrapper}
        onMouseEnter={handleMouseEnter("./img/colors/green.png")}
      >
        <div className={styles.laykold}>
          <img
            src="./img/blue-court.png"
            width={540}
            height={406}
            loading="lazy"
            alt="laykold"
          />
          <div className={styles.description}>
            <h2>Laykold</h2>
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
        <h2>Laykold surface colors:</h2>
        <h3>
          Check how your tennis court with Laykold surface will look like.
          Choose your colors.
        </h3>
        <img src={image} width={1028} height={400} loading="lazy" alt="green" />
        <div
          className={styles.colors}
          onMouseLeave={handleMouseEnter("./img/colors/green.png")}
        >
          <img
            src="./vectors/hexagons/2.svg"
            onMouseEnter={handleMouseEnter("./img/colors/blue.png")}
            loading="lazy"
            alt="2"
          />
          <img
            src="./vectors/hexagons/3.svg"
            onMouseEnter={handleMouseEnter("./img/colors/brown.png")}
            loading="lazy"
            alt="3"
          />
          <img
            src="./vectors/hexagons/4.svg"
            onMouseEnter={handleMouseEnter("./img/colors/red.png")}
            loading="lazy"
            alt="4"
          />
          <img
            src="./vectors/hexagons/5.svg"
            onMouseEnter={handleMouseEnter("./img/colors/crimson.png")}
            loading="lazy"
            alt="5"
          />
          <img
            src="./vectors/hexagons/6.svg"
            onMouseEnter={handleMouseEnter("./img/colors/bloody.png")}
            loading="lazy"
            alt="6"
          />
          <img src="./vectors/hexagons/7.svg" alt="7" />
          <img
            src="./vectors/hexagons/8.svg"
            onMouseEnter={handleMouseEnter("./img/colors/darkblue.png")}
            loading="lazy"
            alt="8"
          />
          <img src="./vectors/hexagons/9.svg" loading="lazy" alt="9" />
          <img src="./vectors/hexagons/10.svg" loading="lazy" alt="10" />
          <img src="./vectors/hexagons/11.svg" loading="lazy" alt="11" />
          <img src="./vectors/hexagons/12.svg" loading="lazy" alt="12" />
          <img src="./vectors/hexagons/13.svg" loading="lazy" alt="13" />
          <img src="./vectors/hexagons/14.svg" loading="lazy" alt="14" />
          <img src="./vectors/hexagons/15.svg" loading="lazy" alt="15" />
          <img src="./vectors/hexagons/16.svg" loading="lazy" alt="16" />
          <img src="./vectors/hexagons/17.svg" loading="lazy" alt="17" />
          <img src="./vectors/hexagons/18.svg" loading="lazy" alt="18" />
          <img src="./vectors/hexagons/19.svg" loading="lazy" alt="19" />
          <img src="./vectors/hexagons/20.svg" loading="lazy" alt="20" />
          <img src="./vectors/hexagons/21.svg" loading="lazy" alt="21" />
          <img src="./vectors/hexagons/22.svg" loading="lazy" alt="22" />
          <img src="./vectors/hexagons/23.svg" loading="lazy" alt="23" />
        </div>
      </div>
    </section>
  );
}
