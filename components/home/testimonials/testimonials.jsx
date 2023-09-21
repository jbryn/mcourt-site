import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./testimonials.module.scss";
import "swiper/css";
import "swiper/css/navigation";

export default function Testimonials() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <span>
            <h2>Wybrane wizualizacje</h2>
          </span>
          <div className={styles.navigation}>
            <div id="swiper1-prev" className="swiper-button-prev" />
            <div id="swiper1-next" className="swiper-button-next" />
            <img src="./vectors/nav-arrows.svg" alt="navigation arrows" />
          </div>
        </div>

        <Swiper
          slidesPerView={2}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            512: {
              slidesPerView: 1,
            },
            812: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },

            1334: {
              slidesPerView: 1,
            },
            1600: {
              slidesPerView: 1,
            },
          }}
          spaceBetween={30}
          modules={[Navigation]}
          navigation={{
            nextEl: "#swiper1-next",
            prevEl: "#swiper1-prev",
          }}
          className="mySwiper1"
        >
          <SwiperSlide>
            <Image
              className="rounded-[10px]"
              src="/img/tennis-halls/carousel/image8.png"
              width={640}
              height={406}
              alt="hall"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="rounded-[10px]"
              src="/img/tennis-halls/carousel/image9.png"
              width={640}
              height={406}
              alt="hall"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="rounded-[10px]"
              src="/img/tennis-halls/carousel/image10.png"
              width={640}
              height={406}
              alt="hall"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="rounded-[10px]"
              src="/img/tennis-halls/carousel/image11.png"
              width={640}
              height={406}
              alt="hall"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="rounded-[10px]"
              src="/img/tennis-halls/carousel/image12.png"
              width={640}
              height={406}
              alt="hall"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="rounded-[10px]"
              src="/img/tennis-halls/carousel/image13.png"
              width={640}
              height={406}
              alt="hall"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
