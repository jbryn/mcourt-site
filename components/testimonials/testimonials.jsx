import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import styles from "./testimonials.module.scss";

export default function Testimonials() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>Testimonials</h2>
          <h3>Hear What Our Customers Have to Say</h3>
          <div className={styles.navigation}>
            <div className="swiper-button-prev1" />
            <div className="swiper-button-next1" />
            <img src="./vectors/nav-arrows.svg" alt="navigation arrows" />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.name}>
            <cite>Ralph Edwards</cite>
            <span>CEO</span>
            <img src="./icons/five-stars.svg" alt="rating" />
          </div>
          <blockquote>
            Working with MCOURT was an absolute pleasure. Their expertise in
            building and maintaining tennis courts is unmatched. From the
            initial consultation to the final touches, they were professional,
            reliable, and attentive to every detail.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
