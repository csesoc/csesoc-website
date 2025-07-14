import React from 'react';
import Footer from '@/components/Footer';
import SponsorCarousel from './SponsorCarousel';
import { ChevronRight } from 'lucide-react';
import FadeEnterAnimation from '../Animations/FadeEnterAnimation';

const Sponsors = () => {
  return (
    <section
      className="flex flex-col min-h-screen py-8 xl:px-24 sm:px-10 px-8 relative mt-20"
      id="sponsors"
    >
      <FadeEnterAnimation>
        <div className="text-center">
          <h2 className="font-bold text-6xl">OUR SPONSORS</h2>
        </div>
      </FadeEnterAnimation>
      <FadeEnterAnimation>
        <div className="flex-1 flex justify-center items-center">
          <div
            className="rounded h-auto overflow-hidden w-[90rem] flex flex-col gap-8"
          >
            <SponsorCarousel />
            <div className="flex justify-center items-center">
              <a href="sponsors">
                <button className="group flex justify-center items-center gap-2 pl-2 bg-white border text-blue-900 font-semibold border-[#A7A6E5] text-lg rounded-3xl w-[14rem] hover:opacity-60 xl:h-12 h-10 duration-300">
                  See all sponsors
                  <ChevronRight className="group-hover:animate-bounce-right" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </FadeEnterAnimation>
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
