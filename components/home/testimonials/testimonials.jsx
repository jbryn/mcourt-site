import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./testimonials.module.scss";
import "swiper/css";
import "swiper/css/navigation";

export default function Testimonials({ title, data }) {
  return (
    <section className="grid place-items-center">
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <span>
            <h2>{title}</h2>
          </span>
          <div className={styles.navigation}>
            <div id="swiper1-prev" className="swiper-button-prev" />
            <div id="swiper1-next" className="swiper-button-next" />
            <img src="./vectors/nav-arrows.svg" alt="navigation arrows" />
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          // breakpoints={{
          //   0: {
          //     slidesPerView: 1,
          //   },
          //   512: {
          //     slidesPerView: 1,
          //   },
          //   812: {
          //     slidesPerView: 1,
          //   },
          //   1024: {
          //     slidesPerView: 1,
          //   },

          //   1334: {
          //     slidesPerView: 1,
          //   },
          //   1600: {
          //     slidesPerView: 1,
          //   },
          // }}
          spaceBetween={30}
          modules={[Navigation]}
          navigation={{
            nextEl: "#swiper1-next",
            prevEl: "#swiper1-prev",
          }}
          className="mySwiper1"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                className="rounded-[10px]"
                src={item}
                width={540}
                height={406}
                loading="eager"
                alt="hall"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
