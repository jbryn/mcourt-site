import VideoPopup from "../video-popup/video-popup";
import styles from "./play-video.module.scss";

export default function PlayVideo({ videoSrc, active, toggle }) {
  return (
    <>
      <button
        type="button"
        aria-label="Play a video"
        className={styles.wrapper}
        onClick={toggle}
      >
        {active ? null : (
          <div className={styles.play}>
            <img
              className={styles.ellipse1}
              src="./vectors/ellipse1.svg"
              alt="ellipse1"
            />
            <img
              className={styles.ellipse2}
              src="./vectors/ellipse2.svg"
              alt="ellipse2"
            />
            <img className={styles.playBtn} src="./icons/play.svg" alt="play" />
          </div>
        )}
      </button>

      {active && <VideoPopup videoSrc={videoSrc} toggle={toggle} />}
    </>
  );
}
