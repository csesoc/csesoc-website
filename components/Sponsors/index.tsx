import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sponsors = () => {
  const firstRowBoxesStyling = "xl:p-16 p-10 flex justify-center items-center xl:col-span-3 sm:col-span-5 col-span-10 xl:row-start-1 xl:row-end-2 sm:row-start-3 sm:row-end-4 sm:h-auto h-36";
  const secondRowBoxesStyling = "xl:p-16 p-10 flex justify-center items-center xl:col-span-3 sm:col-span-5 col-span-10 xl:row-start-2 xl:row-end-3 sm:row-start-4 sm:row-end-5 sm:h-auto h-36";

  return (
    <section className="flex flex-col min-h-screen py-8 xl:px-24 sm:px-10 px-8 relative mt-20">
      <div className="text-center">
        <p className="text-[#3977F8] font-game text-xl">04</p>
        <h2 className="font-bold text-6xl">SUPPORT CSESOC</h2>
      </div>
      <div className="flex-1 flex justify-center items-center my-20">
        <div style={{ backgroundImage: "radial-gradient(50% 50% at 50% 50%, rgba(235, 1, 255, 0.6) 0%, rgba(121, 73, 255, 0.6) 48.96%, rgba(57, 119, 248, 0.6) 100%)" }} className="overflow-hidden rounded-[4rem] w-[90rem] grid grid-cols-10 xl:grid-row-2 sm:grid-row-5">
          <div className="flex flex-col justify-center items-center xl:col-span-4 col-span-10 row-start-1 row-end-3 xl:my-0 my-12">
            <div className="max-w-[15rem]">
              <h2 className="text-4xl font-black">Our sponsors</h2>
              <p className="xl:my-10 my-3 text-lg">Check out our very cool sponsors.</p>
              <a href="sponsors"><button className="bg-white border text-[#3977F8] border-[#A7A6E5] text-lg rounded-xl w-[100%] xl:h-12 h-10">View our sponsors</button></a>
            </div>
          </div>
          <div className={`${firstRowBoxesStyling} bg-[rgba(0, 71, 255, 0.33)]`}>
            <img src="assets/atlassian_logo.svg" alt="Atlassian logo" />
          </div>
          <div className={`${firstRowBoxesStyling} bg-[rgba(82, 130, 255, 0.47)]`}>
            <img src="assets/google_logo.svg" alt="Google logo" />
          </div>
          <div className={`${secondRowBoxesStyling} bg-[rgba(48, 93, 255, 0.2)]`}>
            <img src="assets/freelancer_logo.svg" alt="Freelancer logo" />
          </div>
          <div className={`${secondRowBoxesStyling} bg-[rgba(122, 137, 236, 0.27)]`}>
            <img src="assets/microsoft_logo.svg" alt="Microsoft logo" />
          </div>
        </div>
      </div>
      <div className="sm:flex justify-between">
        <div className="flex items-center">
          <img src="assets/csesoc_logo_white.svg" alt="CSESoc Logo" />
          <Link href="/flag/ollie_is_hiding.png" target="_blank" className="sm:hidden block">
            <img src="/flag/ollie_is_hiding.png" alt="Ollie" draggable="false" width={60} height={60} className="ml-10" />
          </Link>
          <img src="/flag/ollie_is_hiding.png" alt="Ollie" draggable="false" width={60} height={60} className="ml-10 sm:block hidden" />
        </div>
        <div className="flex flex-col max-w-[14rem] sm:mt-0 mt-10 font-light">
          <p className="mb-6">B03 CSE Building K17, UNSW csesoc@csesoc.org.au</p>
          <p>© 2021 — CSESoc UNSW</p>
        </div>
      </div>
      <img src="assets/sponsors_backdrop.svg" alt="Sponsors backdrop" className="absolute bottom-0 left-0 w-screen -z-10" />
    </section>
  );
};

export default Sponsors;
