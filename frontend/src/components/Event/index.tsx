import React from 'react';
import { events } from '../../../public/data/events';
import EventsCarousel from './EventsCarousel';
import EventGallery from './EventsGallery';

const Event = () => {
  return (
    <section className="py-8 xl:px-24 sm:px-10 px-5" id="events">
      <div className="text-center my-10">
        <h1 className="font-bold text-6xl">EVENTS</h1>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col text-center">
        <p className="text-center text-3xl">
          We run a wide-variety of events for fun, learning new skills and careers. For full
          listings, check out the CSESoc Discord or our Facebook page!
        </p>
        <a href="events">
          <button className="mt-10 bg-white border text-[#3977F8] border-[#A7A6E5] text-lg rounded-xl w-[60%] xl:h-12 h-10 hover-animate">
            See all events
          </button>
        </a>
        </div>
        <div className="bg-blue-500 w-4/5 h-96 ml-80">Placeholder</div>
      </div>
      <div className="flex items-center justify-start mt-10">
        <p className="text-2xl font-bold pl-20">
          Explore upcoming events
        </p>
      </div>
      {events.length !== 0 ?
        <EventsCarousel/> :
        <div className="flex items-center justify-center h-96">
          <p className="text-2xl">No upcoming events... check back here later!</p>
        </div>
      }
      <div className="flex items-center justify-start mt-10">
        <p className="text-2xl font-bold pl-20 pb-10">
          Previous events
        </p>
      </div>
      <EventGallery />
    </section>
  );
};

export default Event;
