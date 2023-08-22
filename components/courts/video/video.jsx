import PlayVideo from "./fragments/play-video/play-video";
import usePlayVideo from "./usePlayVideo";
import styles from "./video.module.scss";

export default function Video() {
  const { active, toggle } = usePlayVideo();

  return (
    <section>
      <div className={styles.wrapper}>
        <h2>Video</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur. Nibh suspendisse aliquam sed
          libero eu faucibus commodo sagittis. Sit accumsan et mauris fringilla
          elementum elit interdum scelerisque consectetur.
        </h3>
        <div className={styles.imageContainer}>
          <img
            src="./img/tennis-girl.png"
            width={973}
            height={673}
            alt="tennis girl"
          />
          <div className={styles.video}>
            <PlayVideo
              videoSrc="https://www.youtube.com/embed/mksAglZgRbw"
              active={active}
              toggle={toggle}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
