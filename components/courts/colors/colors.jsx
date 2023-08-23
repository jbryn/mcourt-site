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
        <img src={image} width={1028} height={400} alt="green" />
        <div
          className={styles.colors}
          onMouseLeave={handleMouseEnter("./img/colors/green.png")}
        >
          <img
            src="./vectors/hexagons/2.svg"
            onMouseEnter={handleMouseEnter("./img/colors/blue.png")}
            alt="2"
          />
          <img
            src="./vectors/hexagons/3.svg"
            onMouseEnter={handleMouseEnter("./img/colors/brown.png")}
            alt="3"
          />
          <img
            src="./vectors/hexagons/4.svg"
            onMouseEnter={handleMouseEnter("./img/colors/red.png")}
            alt="4"
          />
          <img
            src="./vectors/hexagons/5.svg"
            onMouseEnter={handleMouseEnter("./img/colors/crimson.png")}
            alt="5"
          />
          <img
            src="./vectors/hexagons/6.svg"
            onMouseEnter={handleMouseEnter("./img/colors/bloody.png")}
            alt="6"
          />
          <img src="./vectors/hexagons/7.svg" alt="7" />
          <img
            src="./vectors/hexagons/8.svg"
            onMouseEnter={handleMouseEnter("./img/colors/darkblue.png")}
            alt="8"
          />
          <img src="./vectors/hexagons/9.svg" alt="9" />
          <img src="./vectors/hexagons/10.svg" alt="10" />
          <img src="./vectors/hexagons/11.svg" alt="11" />
          <img src="./vectors/hexagons/12.svg" alt="12" />
          <img src="./vectors/hexagons/13.svg" alt="13" />
          <img src="./vectors/hexagons/14.svg" alt="14" />
          <img src="./vectors/hexagons/15.svg" alt="15" />
          <img src="./vectors/hexagons/16.svg" alt="16" />
          <img src="./vectors/hexagons/17.svg" alt="17" />
          <img src="./vectors/hexagons/18.svg" alt="18" />
          <img src="./vectors/hexagons/19.svg" alt="19" />
          <img src="./vectors/hexagons/20.svg" alt="20" />
          <img src="./vectors/hexagons/21.svg" alt="21" />
          <img src="./vectors/hexagons/22.svg" alt="22" />
          <img src="./vectors/hexagons/23.svg" alt="23" />
        </div>
      </div>
    </section>
  );
}
