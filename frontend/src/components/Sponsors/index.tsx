import React from 'react';
import Footer from '@/components/Footer';
import SponsorCarousel from './SponsorCarousel';

const Sponsors = () => {
  return (
    <section
      className="flex flex-col min-h-screen py-8 xl:px-24 sm:px-10 px-8 relative mt-20"
      id="sponsors"
    >
      <div className="text-center">
        <h2 className="font-bold text-6xl">OUR SPONSORS</h2>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div
          className="rounded h-auto overflow-hidden w-[90rem] flex flex-col gap-8"
        >
          <SponsorCarousel />
          <div className="flex justify-center items-center">
            <a href="sponsors">
              <button className="bg-white border text-[#3977F8] border-[#A7A6E5] text-lg rounded-xl w-[20rem] xl:h-12 h-10 hover-animate">
                See all sponsors
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
      <img
        src="assets/sponsors_backdrop.svg"
        alt="Sponsors backdrop"
        className="absolute bottom-0 left-0 w-screen -z-10"
      />
    </section>
  );
};

export default Sponsors;
