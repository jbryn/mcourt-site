import Image from "next/image";
import { useState } from "react";
import styles from "./colors.module.scss";

const COLORS = [
  { name: "beach-beige", hex: "#d7a262", displayName: "Beach Beige" },
  { name: "pumpkin", hex: "#f6921e", displayName: "Pumpkin" },
  { name: "candy-red", hex: "#dd2227", displayName: "Candy Red" },
  { name: "burgundy", hex: "#661825", displayName: "Burgundy" },
  { name: "red", hex: "#7d2c25", displayName: "Red" },
  { name: "coral", hex: "#ea515f", displayName: "Coral" },
  { name: "purple", hex: "#8864a3", displayName: "Purple" },
  { name: "royal-purple", hex: "#4e1d59", displayName: "Royal Purple" },
  { name: "dark-blue", hex: "#073142", displayName: "Dark Blue" },
  { name: "light-blue", hex: "#0070b2", displayName: "Light Blue" },
  { name: "grass-green", hex: "#277936", displayName: "Grass Green" },
  { name: "spring-green", hex: "#4eb757", displayName: "Spring Green" },
  { name: "dark-green", hex: "#1e503e", displayName: "Dark Green" },
  { name: "dark-grey", hex: "#464d54", displayName: "Dark Grey" },
  { name: "light-grey", hex: "#c2c9c8", displayName: "Light Grey" },
  { name: "arctic-blue", hex: "#89badb", displayName: "Arctic Blue" },
  { name: "teal", hex: "#008d91", displayName: "Teal" },
];

export default function Colors() {
  const [image, setImage] = useState(
    "https://media.graphassets.com/RFma9uHSQFKsCs1VxOsW"
  );

  const [innerImage, setInnerImage] = useState({
    name: "light-blue",
    displayName: "Light Blue",
  });
  const [outerImage, setOuterImage] = useState({
    name: "grass-green",
    displayName: "Grass Green",
  });

  return (
    <section>
      <div className={styles.wrapper}>
        <h2 className="max-w-[700px]">
          Nasze nawierzchnie oferują szeroki wybór kolorów:
        </h2>

        <div className={styles.imagesContainer}>
          <Image
            src={image}
            width={678}
            height={264}
            loading="eager"
            alt="green"
          />
          <Image
            className={styles.inner}
            src={`/colors/inner/${innerImage.name}.png`}
            width={678}
            height={264}
            loading="eager"
            alt="green"
          />
          <Image
            className={styles.outer}
            src={`/colors/outer/${outerImage.name}.png`}
            width={678}
            height={264}
            loading="eager"
            alt="green"
          />
        </div>
        <div className="flex max-w-[728px] w-full justify-between max-[710px]:flex-col max-[710px]:items-center">
          <div className="pt-[20px] text-start">
            <p className="font-semibold text-[26px] pb-[20px]">
              Wybierz kolor pola gry:
            </p>
            <div className={styles.colors}>
              {COLORS.map((color, index) => (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() =>
                    setInnerImage({
                      name: color.name,
                      displayName: color.displayName,
                    })
                  }
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
            <p className="pt-[20px] text-[26px] font-semibold">
              {innerImage.displayName}
            </p>
          </div>
          <div className="pt-[20px] text-start">
            <p className="font-semibold text-[26px] pb-[20px]">
              Wybierz kolor wybiegu:
            </p>
            <div className={styles.colors}>
              {COLORS.map((color, index) => (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() =>
                    setOuterImage({
                      name: color.name,
                      displayName: color.displayName,
                    })
                  }
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
            <p className="pt-[20px] text-[26px] font-semibold">
              {outerImage.displayName}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
