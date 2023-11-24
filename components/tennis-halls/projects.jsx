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
              src="https://media.graphassets.com/NqE8aa8kTn2Hc5oPqTg9"
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
              src="https://media.graphassets.com/bZASIQhuRuhmzDjiP8jO"
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
              src="https://media.graphassets.com/1XUaTUQSoiNUmsM6tZMs"
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
              src="https://media.graphassets.com/bmrPQqETxP19Y4QhRTZA"
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
              src="https://media.graphassets.com/srzOtiBkQrOm6qzldfuv"
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
              src="https://media.graphassets.com/yx9MBd5xTU648pLVI7i3"
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
