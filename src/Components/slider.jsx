import React, { useState, useEffect, useRef } from "react";
import img1 from "../Assets/1.jpg";
import img2 from "../Assets/2.jpg";
import img3 from "../Assets/3.webp";
import img4 from "../Assets/4.webp";
import img5 from "../Assets/5.jpg";
import img6 from "../Assets/6.jpg";
import styles from "../Styles/slider.module.css";

const images = [img1, img2, img3, img4, img5, img6];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={styles.sliderContainer}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="img-fluid rounded shadow"
      />
      <div className="mt-3">
        <button
          className="btn btn-primary mx-2"
          onClick={() => setIsPlaying(true)}>
          Play
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => setIsPlaying(false)}>
          Pause
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handlePrevious}
          disabled={currentIndex === 0}>
          Previous
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
