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
        <h2>Zrealizowane projekty</h2>
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
            <Link
              href="/korty-lazniewek"
              className='aspect-video rounded-2xl block h-full mb-[20px]'
              style={{
                backgroundImage: `url(https://media.graphassets.com/bPjA4uPtQxurLqETiVQZ)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            />
            <h3>Budowa kompleksu czterech kortów tenisowych w Łaźniewku</h3>
            <Link href="/korty-lazniewek">
              <span>Dowiedz się więcej</span>
              <img src="./icons/little-arrow.svg" alt="arrow" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <Link
              href='/hale-tenisowe-grodzisk'
              className='aspect-video rounded-2xl block h-full mb-[20px]'
              style={{
                backgroundImage: `url(https://media.graphassets.com/awYLvtSNmg72UZ4Do0wA)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            />
            <h3>Hale tenisowe w Grodzisku Mazowieckim</h3>
            <Link href="/hale-tenisowe-grodzisk">
              <span>Dowiedz się więcej</span>
              <img src="./icons/little-arrow.svg" alt="arrow" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <Link
              href='/akademia-tenisa-kozerki'
              className='aspect-video rounded-2xl block h-full mb-[20px]'
              style={{
                backgroundImage: `url(https://media.graphassets.com/7wafg69TWKhh99kz1lUv)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            />
            <h3>Budowa 11 kortów w Akademii Tenisa Kozerkii</h3>
            <Link href="/akademia-tenisa-kozerki">
              <span>Dowiedz się więcej</span>
              <img src="./icons/little-arrow.svg" alt="arrow" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <Link
              href='/rewitalizacja-falenica'
              className='aspect-video rounded-2xl block h-full mb-[20px]'
              style={{
                backgroundImage: `url(https://media.graphassets.com/sjk72IyQxC8zD8U682BL)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            />
            <h3>Rewitalizacja 3 kortów w Falenicy</h3>
            <Link href="/rewitalizacja-falenica">
              <span>Dowiedz się więcej</span>
              <img src="./icons/little-arrow.svg" alt="arrow" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <Link
              href='/realizacje'
              className='aspect-video rounded-2xl block h-full pt-[140px] mb-[20px]'
              style={{
                backgroundImage: `url(./icons/plus.svg)`,
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
              }}
            />
            <h3 className="pt-[60px]">Zobacz wszystkie</h3>
            <Link href="/realizacje">
              <span>Dowiedz się więcej</span>
              <img src="./icons/little-arrow.svg" alt="arrow" />
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
