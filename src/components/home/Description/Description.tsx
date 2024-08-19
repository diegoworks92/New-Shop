"use client";
import classNames from "classnames/bind";
import { useState, useRef, useEffect } from "react";
import styles from "./Description.module.sass";

export const Description = () => {
  const [hasBorder, setBorder] = useState(false);

  const handleClick = () => setBorder(!hasBorder);

  const cx = classNames.bind(styles);

  const buttonStyles = cx("Description__button", {
    "Description__button--border": hasBorder,
  });

  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const handleEnded = () => {
      setCurrentVideoIndex(
        (prevIndex) => (prevIndex + 1) % videoRefs.current.length
      );
    };

    const currentVideo = videoRefs.current[currentVideoIndex];
    currentVideo.addEventListener("ended", handleEnded);
    currentVideo.play();

    return () => {
      currentVideo.removeEventListener("ended", handleEnded);
    };
  }, [currentVideoIndex]);

  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>
          <div className={styles.videoWrapper}>
            {[
              "https://videos.pexels.com/video-files/6498514/6498514-uhd_2560_1440_25fps.mp4",
              "https://videos.pexels.com/video-files/6153734/6153734-uhd_2732_1440_25fps.mp4",
              "https://videos.pexels.com/video-files/6498238/6498238-uhd_2560_1440_25fps.mp4",
              "https://videos.pexels.com/video-files/8464662/8464662-uhd_2560_1440_25fps.mp4",
            ].map((src, index) => (
              <video
                key={index}
                ref={(el) => {
                  videoRefs.current[index] = el!;
                }}
                width="600"
                height="400"
                muted
                autoPlay
                style={{
                  display: currentVideoIndex === index ? "block" : "none",
                  borderRadius: "20px", // Aplicar directamente aquí
                }}
              >
                <source src={src} type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
              </video>
            ))}
          </div>
        </div>
      </button>
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>
          Future World: Your Gateway to Tomorrow&apos;s Tech! Dive into a world
          of cutting-edge gadgets and gear. Stay ahead of the curve and redefine
          your digital lifestyle with us.
        </p>
      </div>
    </section>
  );
};
