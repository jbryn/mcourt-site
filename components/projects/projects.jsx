import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import styles from "./projects.module.scss";

export default function Projects() {
  return (
    <section className="pb-[300px]">
      {/* <div className={styles.decor} /> */}
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
          1600: {
            slidesPerView: 4,
          },
        }}
        modules={[Navigation]}
        navigation={{
          nextEl: "#swiper2-next",
          prevEl: "#swiper2-prev",
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.card}>
            <img
              className={styles.thumbnail}
              src="./img/project1.png"
              alt="project1"
            />
            <h3>Project Number One</h3>
            <Link href="/">
              <span>View More</span>
              <img src="./icons/little-arrow.svg" alt="arrow" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <img
              className={styles.thumbnail}
              src="./img/project2.png"
              alt="project2"
            />
            <h3>Project Number Two</h3>
            <Link href="/">
              <span>View More</span>
              <img src="./icons/little-arrow.svg" alt="arrow" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <img
              className={styles.thumbnail}
              src="./img/project3.png"
              alt="project3"
            />
            <h3>Project Number Three</h3>
            <Link href="/">
              <span>View More</span>
              <img src="./icons/little-arrow.svg" alt="arrow" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <img
              className={styles.thumbnail}
              src="./img/project4.png"
              alt="project4"
            />
            <h3>Project Number Four</h3>
            <Link href="/">
              <span>View More</span>
              <img src="./icons/little-arrow.svg" alt="arrow" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <img
              className={styles.thumbnail}
              src="./img/project1.png"
              alt="project5"
            />
            <h3>Project Number Five</h3>
            <Link href="/">
              <span>View More</span>
              <img src="./icons/little-arrow.svg" alt="arrow" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <img
              className={styles.thumbnail}
              src="./img/project2.png"
              alt="project6"
            />
            <h3>Project Number Six</h3>
            <Link href="/">
              <span>View More</span>
              <img src="./icons/little-arrow.svg" alt="arrow" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <img
              className={styles.thumbnail}
              src="./img/project3.png"
              alt="project7"
            />
            <h3>Project Number Seven</h3>
            <Link href="/">
              <span>View More</span>
              <img src="./icons/little-arrow.svg" alt="arrow" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <img
              className={styles.thumbnail}
              src="./img/project4.png"
              alt="project8"
            />
            <h3>Project Number Eight</h3>
            <Link href="/">
              <span>View More</span>
              <img src="./icons/little-arrow.svg" alt="arrow" />
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
