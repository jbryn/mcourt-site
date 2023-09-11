import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./projects.module.scss";
import "swiper/css";
import "swiper/css/navigation";

export default function Projects() {
  return (
    <section className="pb-[300px]">
      <div className={styles.decor} />
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
            <Image
              className={styles.thumbnail}
              src="/img/projects/project1.png"
              width={700}
              height={406}
              alt="project1"
            />
            <h3 id="projects">
              2023 Budowa komplesku czterech kortów tenisowych w Łaźniewku
            </h3>
            <Link href="/">
              <span>Dowiedz się więcej</span>
              <img src="./icons/little-arrow.svg" alt="arrow" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <Image
              className={styles.thumbnail}
              src="/img/projects/project2.png"
              width={700}
              height={406}
              alt="project2"
            />
            <h3>2023 Korty ze sztucznej trawy w Dębnie</h3>
            <Link href="/">
              <span>Dowiedz się więcej</span>
              <img src="./icons/little-arrow.svg" alt="arrow" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <Image
              className={styles.thumbnail}
              src="/img/projects/project3.png"
              width={700}
              height={406}
              alt="project3"
            />
            <h3>2022 Budowa 11 kortów w Akademii Tenisa Kozerkii</h3>
            <Link href="/">
              <span>Dowiedz się więcej</span>
              <img src="./icons/little-arrow.svg" alt="arrow" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <Image
              className={styles.thumbnail}
              src="/img/projects/project4.png"
              width={700}
              height={406}
              alt="project4"
            />
            <h3>2022 Renowacja nawierzchni na Warszawiance</h3>
            <Link href="/">
              <span>Dowiedz się więcej</span>
              <img src="./icons/little-arrow.svg" alt="arrow" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <Image
              className={styles.thumbnail}
              src="/img/projects/project1.png"
              width={700}
              height={406}
              alt="project5"
            />
            <h3>Project Number Five</h3>
            <Link href="/">
              <span>Dowiedz się więcej</span>
              <img src="./icons/little-arrow.svg" alt="arrow" />
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
