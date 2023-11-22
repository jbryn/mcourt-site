import styles from "./video.module.scss";

export default function Video() {
  return (
    <section>
      <div className={styles.wrapper}>
        <h2>Zobacz film</h2>
        <div className={styles.videoWrapper}>
          <video controls>
            <source src="/video/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
