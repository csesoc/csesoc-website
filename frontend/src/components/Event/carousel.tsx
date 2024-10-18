import React, { useState, useEffect } from 'react';
import { eventInfo } from '../../../public/data/events';

interface CarouselProps {
  events: eventInfo[];
}

const Carousel: React.FC<CarouselProps> = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fadeToNextSlide();
    }, 6000);

    return () => clearInterval(intervalId);
  }, [events.length]);

  const fadeToNextSlide = () => {
    setIsFading(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === events.length - 1 ? 0 : prevIndex + 1));
      setIsFading(false);
    }, 300);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? events.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    fadeToNextSlide();
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="w-full text-center">
      <a href={events[currentIndex].link} target="_blank" rel="noopener noreferrer" className={`relative block w-full h-64 group transition-opacity duration-3000 ${
            isFading ? 'opacity-0' : 'opacity-100'
          }`}>
        <img
          src={events[currentIndex].image}
          alt={events[currentIndex].title}
          className="w-full h-64 object-contain rounded-md"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-md">
          <div className="text-white text-center p-4">
            <h2 className="font-extrabold text-xl mb-2">{events[currentIndex].title}</h2>
            <h3 className="font-bold text-lg">{events[currentIndex].location}</h3>
            <p className="mt-2">
              {formatEventDate(events[currentIndex].startTime, events[currentIndex].endTime)}
            </p>
          </div>
        </div>
      </a>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#10095;
      </button>

      <div className="flex justify-center mt-4">
        {events.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full mx-1 cursor-pointer ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

const formatEventDate = (startTime: string, endTime: string): string => {
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);

  const sameDay = startDate.toDateString() === endDate.toDateString();

  if (sameDay) {
    return startDate.toLocaleDateString();
  } else {
    return `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
  }
};


export default Carousel;