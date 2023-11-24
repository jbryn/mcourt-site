import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./projects.module.scss";
import "swiper/css";
import "swiper/css/navigation";

export default function Projects() {
  return (
    <section>
      <div className={styles.header}>
        <h2>Nasze projekty</h2>
        <div className={styles.navigation}>
          <div id="swiper2-prev" className="swiper-button-prev" />
          <div id="swiper2-next" className="swiper-button-next" />
          <img src="./vectors/nav-arrows.svg" alt="navigation arrows" />
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          880: {
            slidesPerView: 2,
          },
          1275: {
            slidesPerView: 3,
          },
        }}
        modules={[Navigation]}
        navigation={{
          nextEl: "#swiper2-next",
          prevEl: "#swiper2-prev",
        }}
        className="mySwiper max-w-[1400px]"
      >
        <SwiperSlide>
          <div className={styles.card}>
            <Image
              className={styles.thumbnail}
              src="https://media.graphassets.com/AptwnlAkRqO9iHHqOFBW"
              width={700}
              height={406}
              loading="eager"
              alt="project1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <Image
              className={styles.thumbnail}
              src="https://media.graphassets.com/ouMA4vsOQ1KZwbzFbmXw"
              width={700}
              height={406}
              loading="eager"
              alt="project2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <Image
              className={styles.thumbnail}
              src="https://media.graphassets.com/ReP14Xq4RiC23gz84c7S"
              width={700}
              height={406}
              loading="eager"
              alt="project3"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <Image
              className={styles.thumbnail}
              src="https://media.graphassets.com/5t6tOxmQRYGge3Q31wcE"
              width={700}
              height={406}
              loading="eager"
              alt="project4"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <Image
              className={styles.thumbnail}
              src="https://media.graphassets.com/k6aTAz8RuyAw3zPucL3A"
              width={700}
              height={406}
              loading="eager"
              alt="project4"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
