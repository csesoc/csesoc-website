import React from 'react';
import { events } from '../../../public/data/events';
import EventsCarousel from './EventsCarousel';

const EventBrief = () => {
  return (
    <section className="py-8 xl:px-24 sm:px-10 px-5" id="events">
      <div className="text-center my-10">
        <h1 className="font-bold text-6xl">UPCOMING EVENTS</h1>
      </div>
      {events.length !== 0 ?
        <EventsCarousel/> :
        <div className="flex items-center justify-center h-96">
          <p className="text-4xl">No upcoming events... check back here later!</p>
        </div>
      }
      <div className="flex justify-center items-center">
        <a href="events">
          <button className="mt-10 bg-white border text-[#3977F8] border-[#A7A6E5] text-lg rounded-xl w-[20rem] xl:h-12 h-10 hover-animate">
            See all events
          </button>
        </a>
      </div>
    </section>
  );
};

export default EventBrief;
