import { createPortal } from "react-dom";
import styles from "./video-popup.module.scss";

export default function VideoPopup({ videoSrc, toggle }) {
  return createPortal(
    <div className={styles.wrapper} onClick={toggle}>
      <div className={styles.wrapperInner}>
        <iframe
          src={videoSrc + "?autoplay=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className={styles.close}>
        <img src="./icons/close.svg" alt="close" />
      </div>
    </div>,
    window.document.querySelector("div#__next") ?? window.document.body
  );
}
