import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./projects.module.scss";
import "swiper/css";
import "swiper/css/navigation";

export default function Projects({ title, data }) {
  return (
    <section className="flex flex-col justify-center items-center overflow-hidden">
      <div className={styles.header}>
        <h2>{title}</h2>
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
        {data.map((item, index) => (
          <SwiperSlide className="max-w-[400px]" key={index}>
            <div className={styles.card}>
              {item.link ? (
                <Link
                  href={item.link}
                  className={styles.thumbnail}
                  style={{
                    backgroundImage: `url('https://media.graphassets.com/${item.url}')`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                />
              ) : (
                <Image
                  className={styles.thumbnail}
                  src={item.url}
                  width={349}
                  height={233}
                  alt={item.url}
                />
              )}

              {item.title ? <h3>{item.title}</h3> : null}
              {item.link ? (
                <Link href={item.link}>
                  <span>Dowiedz się więcej</span>
                  <img src="./icons/little-arrow.svg" alt="arrow" />
                </Link>
              ) : null}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
