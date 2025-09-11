import { useState, useEffect } from "react";

export const useSlider = (totalSlider, autoPlayTimer = 5000) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (autoPlayTimer > 0) {
      const time = setInterval(() => {
        setCurrentSlide((prevIndex) => (prevIndex + 1) % totalSlider);
      }, autoPlayTimer);

      return () => clearInterval(time);
    }
  }, [totalSlider, autoPlayTimer]);

  const goToSlide = (index) => {
    if (index >= 0 && index < totalSlider) {
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % totalSlider);
  };

  const prevSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex - 1 + totalSlider) % totalSlider);
  };

  return {
    currentSlide,
    goToSlide,
    nextSlide,
    prevSlide,
  };
};
