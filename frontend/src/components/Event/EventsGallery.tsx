import React from 'react';
import { previousEvents } from '../../../public/data/events';
import { Gallery } from "react-grid-gallery";

const EventGallery = () => {
  const formattedEvents = previousEvents.map((event) => {
    return {
      src: event.image,
      height: 256,
      width: 400,
      customOverlay: (
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white text-center p-4">
            <h2 className="font-extrabold text-xl mb-2">{event.title}</h2>
            <h3 className="font-bold text-lg">{event.location}</h3>
            <p className="mt-2">
              {formatEventDate(event.startTime, event.endTime)}
            </p>
          </div>
        </div>
      ),
    };
  });

  return (
    <Gallery
      images={formattedEvents}
      enableImageSelection={false}
    />
  );
};

export default EventGallery;

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