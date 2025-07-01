import React from 'react';
import { events } from '../../../public/data/events';
import EventsCarousel from './EventsCarousel';
import { ChevronRight } from 'lucide-react';

const EventBrief = () => {
  return (
    <section className="py-8 xl:px-24 sm:px-10 px-5" id="events">
      <div className="text-center my-10">
        <h1 className="font-bold text-6xl mb-16">UPCOMING EVENTS</h1>
      </div>
      {events.length !== 0 ?
        <EventsCarousel/> :
        <div className="flex items-center justify-center h-96">
          <p className="text-4xl">No upcoming events... check back here later!</p>
        </div>
      }
      <div className="flex justify-center items-center">
        <a href="events">
            <button className="group flex justify-center items-center gap-2 pl-2 bg-white border text-blue-900 font-semibold border-[#A7A6E5] text-lg rounded-3xl w-[14rem] hover:opacity-60 xl:h-12 h-10 duration-300">
              See all events
              <ChevronRight className="group-hover:animate-bounce-right" />
            </button>
        </a>
      </div>
    </section>
  );
};

export default EventBrief;
