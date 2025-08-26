import Image from 'next/image';
import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

const Stats = () => {
  const r = 80;
  const controls = useAnimationControls();

  const progress = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 0.7,
      opacity: 1,
      transition: {
        pathLength: { type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { duration: 0.05 }
      }
    }
  };

  useEffect(() => {
    controls.start('hidden');
    controls.start('visible');
    controls.stop();
  }, []);

  const revert = async () => {
    await controls.start('hidden');
    return await controls.start('visible');
  };

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center align-middle items-center relative grow w-full py-12">
        <Image
          className="z-10"
          src="/assets/csesoc_icon.svg"
          alt="CSESoc Icon"
          width={150}
          height={150}
        />
        <motion.svg
          className="absolute"
          width={200}
          height={200}
          style={{ transform: 'rotate(270deg)', top: '1.4rem' }}
          initial="hidden"
          animate={controls}
        >
          <motion.circle
            r={r}
            cx={100}
            cy={100}
            fill="transparent"
            stroke="#444F6F"
            strokeWidth={'0.75rem'}
            strokeLinecap="round"
          />
          <motion.circle
            r={r}
            cx={100}
            cy={100}
            fill="transparent"
            stroke="rgb(248 250 252)"
            strokeWidth={'0.75rem'}
            strokeLinecap="round"
            variants={progress}
          />
        </motion.svg>
        <h2 className="mt-10 text-3xl font-extrabold">CSESoc</h2>
        <p className="text-[#727B8C] font-medium">unsw-computer-science-engineering-society</p>
        <div className="mt-14 mb-2 flex gap-2 flex-1 grow w-full">
          <div
            className="flex flex-col flex-1 gap-0 bg-slate-50 px-3 py-1 rounded-md text-right hover:cursor-pointer"
            onClick={() => {
              revert();
            }}
          >
            <Image
              className="ml-auto pb-1"
              src="/assets/people_icon.svg"
              alt="People"
              width={20}
              height={20}
            />
            <span className="text-[#727B8C] text-6xl leading-3 py-4 pb-6">433</span>
            <span className="text-[#727B8C] text-sm py-1 ">total members</span>
          </div>
          <div
            className="group flex flex-col flex-1 gap-0 bg-[#444F6F] hover:bg-slate-50 px-3 py-1 rounded-md text-right hover:cursor-pointer transition-all hover:text-[#444F6F]"
            onClick={() => {
              revert();
            }}
          >
            <Image
              className="text-white group-hover:text-[#727B8C] ml-auto pb-1"
              src="/assets/people_icon.svg"
              alt="People"
              width={20}
              height={20}
            />
            <span className="text-[#ffffff] text-6xl leading-3 py-4 pb-6 group-hover:text-[#727B8C]">
              53
            </span>
            <span className="text-[#ffffff] text-sm py-1 group-hover:text-[#727B8C]">
              events held
            </span>
          </div>
          <div
            className="flex flex-col flex-1 gap-0 bg-[#444F6F] px-3 py-1 rounded-md text-right hover:cursor-pointer"
            onClick={() => {
              revert();
            }}
          >
            <Image
              className="text-white ml-auto pb-1"
              src="/assets/people_icon.svg"
              alt="People"
              width={20}
              height={20}
            />
            <span className="text-[#ffffff] text-6xl leading-3 py-4 pb-6">343</span>
            <span className="text-[#ffffff] text-sm py-1 ">subcom</span>
          </div>
          <div
            className="flex flex-col flex-1 gap-0 bg-[#444F6F] px-3 py-1 rounded-md text-right hover:cursor-pointer"
            onClick={() => {
              revert();
            }}
          >
            <Image
              className="text-white ml-auto pb-1"
              src="/assets/people_icon.svg"
              alt="People"
              width={20}
              height={20}
            />
            <span className="text-[#ffffff] text-6xl leading-3 py-4 pb-6">343</span>
            <span className="text-[#ffffff] text-sm py-1 ">subcom</span>
          </div>
          {/*                <div className="flex flex-1 gap-0 bg-[#444F6F] px-3 py-1 rounded-md text-right">
                    <span className="text-[#ffffff] text-6xl leading-3 py-4 pb-6">53</span>
                    <div className="flex flex-col text-left">
                        <Image className='text-white pb-1' src="/assets/people_icon.svg" alt="People" width={20} height={20} />
                        <span className="text-[#ffffff] text-sm py-1 ">held</span>
                    </div>
                </div>
                <div className="flex gap-2 bg-slate-50 px-3 py-1 rounded-md">
                    <Image src="/assets/people_icon.svg" alt="People" width={20} height={20} />
                    <span className="text-[#727B8C]">300 subcom</span>
                </div>
                <div className="flex gap-2 bg-slate-50 px-3 py-1 rounded-md">
                    <Image src="/assets/people_icon.svg" alt="People" width={20} height={20} />
                    <span className="text-[#727B8C]">52 events held</span>
                </div>*/}
        </div>
        {/*            <div className="flex flex-1 gap-0 bg-[#444F6F] px-3 py-1 rounded-md text-right">
                <div>
                    <Image className="z-10" src="/assets/csesoc_icon.svg" alt="CSESoc Icon" width={150} height={150} />
                </div>
                <div className="flex flex-col">
                    <Image className='text-white ml-auto pb-1' src="/assets/people_icon.svg" alt="People" width={20} height={20} />
                    <span className="text-[#ffffff] text-6xl leading-3 py-4 pb-6">53</span>
                    <span className="text-[#ffffff] text-sm py-1 ">events held</span>
                </div>

            </div>*/}
        {/*            <div className="my-4 flex gap-5">
              <Image src="/assets/location_icon.svg" alt="Location" width={20} height={20} />
              Sydney, Australia
            </div>
            <div className="flex gap-5">
              <Image src="/assets/mail_icon.svg" alt="Mail" width={20} height={20} />
              info@csesoc.org.au
            </div>

            <div className="w-72 font-semibold text-xl lg:block hidden">
                <p className="font-bold bg-[#3977F8] inline px-3 py-1">STATS</p>
                <hr className="mb-3 mt-5" />
                <div className="flex justify-between">
                    <p>323,000</p>
                    <p>Members</p>
                </div>
                <div className="flex justify-between">
                    <p>300</p>
                    <p>Team Members</p>
                </div>
                <div className="flex justify-between">
                    <p>52</p>
                    <p>Events held</p>
                </div>
            </div>*/}
      </div>
      <div className="flex flex-col pb-14">
        <div className="flex flex-col">
          <div className="flex text-left">
            <Image
              className="pb-1 ml-5"
              src="/assets/people_icon.svg"
              alt="People"
              width={20}
              height={20}
            />
            <span className="ml-3">
              CSESoc is the principal representative body for UNSW computing students.
            </span>
          </div>
          <div className="my-4 flex">
            <Image
              className="ml-5"
              src="/assets/location_icon.svg"
              alt="Location"
              width={17}
              height={17}
            />
            <span className="ml-4">Sydney, Australia</span>
          </div>
          <div className="flex">
            <Image className="ml-5" src="/assets/mail_icon.svg" alt="Mail" width={17} height={17} />
            <span className="ml-4">info@csesoc.org.au</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex px-6 pt-4 pb-6 bg-[#444f6f38] rounded-md w-full justify-between align-baseline">
          <div className="flex flex-col">
            <p className="text-3xl mt-6 justify-end" style={{ paddingLeft: '0px' }}>
              csesoc/README<span className="text-[#7A8192]">.md</span>
            </p>
            <p className="mt-10 mb-5 max-w-lg text-[#afb3bc]">
              1 &ensp;&ensp;
              <span style={{ paddingLeft: '2px' }}>
                CSESoc is one of the biggest and most active societies at
              </span>
              <br />
              2 &ensp;&ensp;UNSW, catering to over 3500 CSE students spanning across
              <br />
              3 &ensp;&ensp;degrees in Computer Science, Software Engineering,
              <br />
              4 &ensp;&ensp;Bioinformatics and Computer Engineering.
              <br />
              <br />
              5 &ensp;&ensp;We are here to fulfil the social, personal and professional
              <br />
              6 &ensp;&ensp;needs of CSE students, and promote computing through a<br />7
              &ensp;&ensp;variety of forms.
            </p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-markdown-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 1a.5.5 0 0 0-.5.5v3.793L9.854 8.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L12 9.293V5.5a.5.5 0 0 0-.5-.5M3.56 7.01h.056l1.428 3.239h.774l1.42-3.24h.056V11h1.073V5.001h-1.2l-1.71 3.894h-.039l-1.71-3.894H2.5V11h1.06z" />
            </svg>
          </div>
        </div>
        <div className="flex px-6 pt-4 pb-6 bg-[#444f6f38] rounded-md w-full justify-between align-baseline">
          <div className="flex flex-col">
            <p className="text-3xl mt-6 justify-end" style={{ paddingLeft: '0px' }}>
              execs-directors-subcoms<span className="text-[#7A8192]">.md</span>
            </p>
            <p className="mt-10 mb-5 max-w-lg text-[#afb3bc]">
              1 &ensp;&ensp;
              <span style={{ paddingLeft: '2px' }}>100+ events (35+ careers related revents)</span>
              <br />
              2 &ensp;&ensp;41 sponsors
              <br />
              3 &ensp;&ensp;480 000 discord messages
              <br />
              4 &ensp;&ensp;200+ volunteers.
              <br />
              5 &ensp;&ensp;Tiktok: 27.2k views, 2k+ likes
              <br />
              6 &ensp;&ensp;Podcast: 10k downloads, 600+ average viewers
              <br />7 &ensp;&ensp;500+ high school students reached.
            </p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-markdown-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 1a.5.5 0 0 0-.5.5v3.793L9.854 8.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L12 9.293V5.5a.5.5 0 0 0-.5-.5M3.56 7.01h.056l1.428 3.239h.774l1.42-3.24h.056V11h1.073V5.001h-1.2l-1.71 3.894h-.039l-1.71-3.894H2.5V11h1.06z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
