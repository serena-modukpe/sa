import React from "react";

import  { useState } from "react";

const Slider = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const nextSlide = () => {
      const next = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
      setCurrentSlide(next);
    };
  
    const prevSlide = () => {
      const prev = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
      setCurrentSlide(prev);
    };
  
    return (
      <div style={{
        display: 'flex',
        overflowX: 'auto',
        scrollBehavior: 'smooth',
      }} className="slider">
        <button onClick={prevSlide}>Précédent</button>
        <div style={{ display: 'flex' }} className="slides">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={index === currentSlide ? 'slide active' : 'slide'}
              style={{ flex: '0 0 auto', minWidth: '100%', overflow: 'hidden' }}
            >
              {slide}
            </div>
          ))}
        </div>
        <button onClick={nextSlide}>Suivant</button>
      </div>
    );
  };
  
  export default Slider;