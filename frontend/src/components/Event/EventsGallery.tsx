import React from 'react';
import { previousEvents } from '../../../public/data/events';

const EventGallery = () => {

  return (
    <div className="flex flex-wrap px-14 py-10 mb-14 gap-16 justify-center my-10">
      {previousEvents.map((event, index) => {
        return (
          <div>
            <div key={index} className="w-full h-40 text-center">
              <a href={event.link} target="_blank" rel="noopener noreferrer" className="relative block w-full h-64 group transition-opacity duration-3000">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-40 object-contain"
                />
                <div className="w-full h-40 absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h2 className="font-extrabold text-xl mb-2">{event.title}</h2>
                    <h3 className="font-bold text-lg">{event.location}</h3>
                    <p className="mt-2">
                      {formatEventDate(event.startTime, event.endTime)}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        );
      })}
    </div>
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