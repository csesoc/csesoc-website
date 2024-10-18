import React from 'react';
import Carousel from './carousel';
import { events, previousEvents } from '../../../public/data/data';

const Event = () => {
  return (
    <section className="py-8 xl:px-24 sm:px-10 px-5" id="events">
      <div className="text-center my-10">
        <p className="text-[#3977F8] font-game text-xl">02</p>
        <h1 className="font-bold text-6xl">EVENTS</h1>
      </div>
      <div className="flex items-center justify-start">
        <p className="text-center text-2xl font-bold pl-20 pb-10">
          Explore upcoming events
        </p>
        {/* <div className="bg-blue-500 w-4/5 h-96 ml-80">Placeholder</div> */}
      </div>
      {events.length !== 0 ?
        <Carousel events={events}/> :
        <div className="flex items-center justify-center h-96">
          <p className="text-2xl">No upcoming events... check back here later!</p>
        </div>
      }
      <div className="flex items-center justify-start mt-10">
        <p className="text-2xl font-bold pl-20 pb-10">
          Previous events
        </p>
      </div>
      <Carousel events={previousEvents} />
    </section>
  );
};

export default Event;
