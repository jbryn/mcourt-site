import Image from "next/image";
import { useState } from "react";
import styles from "./colors.module.scss";

const COLORS = [
  { name: "beach-beige", hex: "#d7a262" },
  { name: "pumpkin", hex: "#f6921e" },
  { name: "candy-red", hex: "#dd2227" },
  { name: "burgundy", hex: "#661825" },
  { name: "red", hex: "#7d2c25" },
  { name: "coral", hex: "#ea515f" },
  { name: "purple", hex: "#8864a3" },
  { name: "royal-purple", hex: "#4e1d59" },
  { name: "dark-blue", hex: "#073142" },
  { name: "light-blue", hex: "#0070b2" },
  { name: "grass-green", hex: "#277936" },
  { name: "spring-green", hex: "#4eb757" },
  { name: "dark-green", hex: "#1e503e" },
  { name: "dark-grey", hex: "#464d54" },
  { name: "light-grey", hex: "#c2c9c8" },
  { name: "arctic-blue", hex: "#89badb" },
  { name: "teal", hex: "#008d91" },
];

export default function Colors() {
  const [image, setImage] = useState(
    "https://media.graphassets.com/RFma9uHSQFKsCs1VxOsW"
  );

  const [innerImage, setInnerImage] = useState("/colors/inner/light-blue.png");
  const [outerImage, setOuterImage] = useState("/colors/outer/grass-green.png");

  function handleMouseEnter(imagePath) {
    return () => {
      setImage(imagePath);
    };
  }

  return (
    <section>
      <div
        className={styles.wrapper}
        onMouseEnter={handleMouseEnter(
          "https://media.graphassets.com/RFma9uHSQFKsCs1VxOsW"
        )}
      >
        <h2>Nasze nawierzchnie oferują szeroki wybór kolorów:</h2>

        <div className={styles.imagesContainer}>
          <Image
            src={image}
            width={1028}
            height={400}
            loading="eager"
            alt="green"
          />
          <Image
            className={styles.inner}
            src={innerImage}
            width={1028}
            height={400}
            loading="eager"
            alt="green"
          />
          <Image
            className={styles.outer}
            src={outerImage}
            width={1028}
            height={400}
            loading="eager"
            alt="green"
          />
        </div>

        <div className="pt-[80px]">
          <p className="font-semibold text-[26px] pb-[20px]">
            Wybierz kolor pola gry:
          </p>
          <div className={styles.colors}>
            {COLORS.map((color, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => setInnerImage(`/colors/inner/${color.name}.png`)}
              >
                <svg
                  width="52"
                  height="61"
                  viewBox="0 0 52 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 16.5L26 0L52 16.5V46L26 61L0 46V16.5Z"
                    fill={color.hex}
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-[80px]">
          <p className="font-semibold text-[26px] pb-[20px]">
            Wybierz kolor wybiegu:
          </p>
          <div className={styles.colors}>
            {COLORS.map((color, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => setOuterImage(`/colors/outer/${color.name}.png`)}
              >
                <svg
                  width="52"
                  height="61"
                  viewBox="0 0 52 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 16.5L26 0L52 16.5V46L26 61L0 46V16.5Z"
                    fill={color.hex}
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
