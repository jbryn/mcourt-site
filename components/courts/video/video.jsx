import PlayVideo from "./fragments/play-video/play-video";
import usePlayVideo from "./usePlayVideo";
import styles from "./video.module.scss";

export default function Video() {
  const { active, toggle } = usePlayVideo();

  return (
    <section>
      <div className={styles.wrapper}>
        <h2>Zobacz film</h2>
        <div className={styles.imageContainer}>
          <img
            src="https://media.graphassets.com/5wPJgkdSTuEYCp90yHkz"
            width={583}
            height={403}
            alt="video"
          />
          <div className={styles.video}>
            <PlayVideo
              videoSrc="https://www.youtube.com/embed/Ra-rDKcs1Yg?si=WvgSPAq6PU71te_9"
              active={active}
              toggle={toggle}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
