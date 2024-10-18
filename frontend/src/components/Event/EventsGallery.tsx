import React from 'react';
import { previousEvents } from '../../../public/data/events';
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

const EventGallery = () => {
  const formattedEvents = previousEvents.map((event) => {
    return {
      src: event.image,
      height: 80,
      width: 120,
    };
  });

  return (
    <RowsPhotoAlbum
      photos={formattedEvents}
      render={{
        extras: (_, { index }) => (
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white text-center p-4">
            <h2 className="font-extrabold text-xl mb-2">{previousEvents[index].title}</h2>
            <h3 className="font-bold text-lg">{previousEvents[index].location}</h3>
            <p className="mt-2">
              {formatEventDate(previousEvents[index].startTime, previousEvents[index].endTime)}
            </p>
          </div>
        </div>
        ),
      }}
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