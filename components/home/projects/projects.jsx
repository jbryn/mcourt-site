import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./projects.module.scss";
import "swiper/css";
import "swiper/css/navigation";

export default function Projects({ data }) {
  return (
    <section className="grid place-items-center">
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
        {data.map((item, index) => (
          <div key={index}>
            <SwiperSlide>
              <div className={styles.card}>
                <Image
                  className={styles.thumbnail}
                  src={`https://media.graphassets.com/${item.url}`}
                  width={700}
                  height={406}
                  loading="eager"
                  alt="project1"
                />
                {item.link ? (
                  <>
                    <Link
                      className="font-bold hover:underline"
                      href={item.link}
                    >
                      2023 Budowa kompleksu czterech kortów tenisowych w
                      Łaźniewku
                    </Link>
                    <Link className={styles.more} href={item.link}>
                      <span>Dowiedz się więcej</span>
                      <img src="./icons/little-arrow.svg" alt="arrow" />
                    </Link>
                  </>
                ) : null}
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </section>
  );
}
