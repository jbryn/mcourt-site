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
              src="https://media.graphassets.com/mZy0ynBSD6RUj33fDnum"
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
              src="https://media.graphassets.com/0DLZTnN9T7WHVj9l9PM4"
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
              src="https://media.graphassets.com/8M0sy7f5SniDaCsADDfe"
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
              src="https://media.graphassets.com/CmpprxbTTgSuH5KzBgzc"
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
              src="https://media.graphassets.com/8eeBzOquQJGfdhyTD6XB"
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
              src="https://media.graphassets.com/93oYNjYxSZq0mafoy0P7"
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
