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
            listings, check out our {' '}
            <a
              href="https://www.facebook.com/csesoc"
              className="text-[#3977F9] relative after:bg-current after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:duration-200"
            >Facebook page</a>!
          </p>
        </div>
      </div>
      <div className="flex items-center justify-start mt-20">
        <p className="text-4xl font-bold">
          Explore upcoming events
        </p>
      </div>
      {events.length !== 0 ?
        <EventsCarousel/> :
        <div className="flex items-center justify-center h-96">
          <p className="text-4xl">No upcoming events... check back here later!</p>
        </div>
      }
      <div className="flex items-center justify-start mt-20">
        <p className="text-4xl font-bold">
          Previous events
        </p>
      </div>
      <EventGallery />
    </section>
  );
};

export default Event;
