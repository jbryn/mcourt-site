import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import styles from "./testimonials.module.scss";

export default function Testimonials() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.decor} />
        <div className={styles.header}>
          <h2>Testimonials</h2>
          <h3>Hear What Our Customers Have to Say</h3>
          <div className={styles.navigation}>
            <div id="swiper1-prev" className="swiper-button-prev" />
            <div id="swiper1-next" className="swiper-button-next" />
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
          spaceBetween={30}
          modules={[Navigation]}
          navigation={{
            nextEl: "#swiper1-next",
            prevEl: "#swiper1-prev",
          }}
          className="mySwiper1"
        >
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.name}>
                <cite>Ralph Edwards</cite>
                <span>CEO</span>
                <img src="./icons/five-stars.svg" alt="rating" />
              </div>
              <blockquote>
                Working with MCOURT was an absolute pleasure. Their expertise in
                building and maintaining tennis courts is unmatched. From the
                initial consultation to the final touches, they were
                professional, reliable, and attentive to every detail.
              </blockquote>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.name}>
                <cite>Darrell Steward</cite>
                <span>CEO</span>
                <img src="./icons/five-stars.svg" alt="rating" />
              </div>
              <blockquote>
                We&apos;ve been relying on MCOURT for over a decade to take care
                of our tennis courts, and they have never disappointed. Their
                team is incredibly knowledgeable and skilled in all aspects of
                tennis court maintenance.
              </blockquote>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.name}>
                <cite>Ralph Edwards</cite>
                <span>CEO</span>
                <img src="./icons/five-stars.svg" alt="rating" />
              </div>
              <blockquote>
                We&apos;ve been relying on MCOURT for over a decade to take care
                of our tennis courts, and they have never disappointed. Their
                team is incredibly knowledgeable and skilled in all aspects of
                tennis court maintenance.
              </blockquote>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.name}>
                <cite>Ralph Edwards</cite>
                <span>CEO</span>
                <img src="./icons/five-stars.svg" alt="rating" />
              </div>
              <blockquote>
                Working with MCOURT was an absolute pleasure. Their expertise in
                building and maintaining tennis courts is unmatched. From the
                initial consultation to the final touches, they were
                professional, reliable, and attentive to every detail.
              </blockquote>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.name}>
                <cite>Darrell Steward</cite>
                <span>CEO</span>
                <img src="./icons/five-stars.svg" alt="rating" />
              </div>
              <blockquote>
                We&apos;ve been relying on MCOURT for over a decade to take care
                of our tennis courts, and they have never disappointed. Their
                team is incredibly knowledgeable and skilled in all aspects of
                tennis court maintenance.
              </blockquote>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.name}>
                <cite>Ralph Edwards</cite>
                <span>CEO</span>
                <img src="./icons/five-stars.svg" alt="rating" />
              </div>
              <blockquote>
                We&apos;ve been relying on MCOURT for over a decade to take care
                of our tennis courts, and they have never disappointed. Their
                team is incredibly knowledgeable and skilled in all aspects of
                tennis court maintenance.
              </blockquote>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
