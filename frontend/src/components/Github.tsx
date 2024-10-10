import Image from 'next/image';
import { motion, useAnimationControls } from "framer-motion"
import { useEffect } from 'react';

const Github = () => {
    const r = 80;
    const controls = useAnimationControls()

    const progress = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 0.7,
            opacity: 1,
            transition: {
                pathLength: { type: "spring", duration: 1.5, bounce: 0 },
                opacity: { duration: 0.05 }
            }
        }
    }

    useEffect(() => {
        controls.start("hidden")
        controls.start("visible")
        controls.stop();
    }, []);

    const revert = async() => {
        await controls.start("hidden")
        return await controls.start("visible")
    }

  return (
    <div className="w-full">
        <div className="flex justify-center align-middle items-center relative grow w-full py-12 gap-24">
            <div className="flex flex-col gap-2 pl-14 justify-center">
                <h2 className="text-3xl font-extrabold">CSESoc Stats</h2>
                <span className="text-[#727B8C] font-medium pb-4">unsw-computer-science-engineering-society</span>
                <div className="flex gap-0 w-48 justify-between bg-slate-50 px-3 py-1 rounded-md hover:cursor-pointeritems-center"
                    onClick={() => {revert()}}>
                    <Image className='mb-1' src="/assets/people_icon.svg" alt="People" width={20} height={20} />
                    <span className="text-[#727B8C] text-sm py-1 px-2">Total members:</span>
                    <span className="text-[#727B8C] text-lg relative bottom-1">433</span>
                </div>
                <div className="group inline-flex justify-between gap-0 w-48 hover:bg-slate-50 px-3 py-1 rounded-md text-right hover:cursor-pointer transition-all hover:text-[#444F6F]"
                    onClick={() => {revert()}}>
                    <div className='flex gap-1'>
                        <Image className='text-white group-hover:text-[#727B8C] pb-1' src="/assets/people_icon.svg" alt="People" width={20} height={20} />
                        <span className="text-[#ffffff] text-sm py-1 px-2 group-hover:text-[#727B8C]">Events held:</span>
                    </div>
                    <span className="text-[#ffffff] text-lg leading-3 relative top-1 group-hover:text-[#727B8C] ">53</span>
                </div>
                <div className="flex justify-between gap-0 w-48 px-3 py-1 rounded-md text-right hover:cursor-pointer"
                    onClick={() => {revert()}}>
                    <div className='flex gap-1'>
                        <Image className='text-white pb-1' src="/assets/people_icon.svg" alt="People" width={20} height={20} />
                        <span className="text-[#ffffff] text-sm py-1 px-2">Subcom:</span>
                    </div>
                    <span className="text-[#ffffff] text-lg leading-3 relative top-1">343</span>
                </div>
                <div className="flex justify-between gap-0 w-48 px-3 py-1 rounded-md text-right hover:cursor-pointer"
                    onClick={() => {revert()}}>
                    <div className='flex gap-1'>
                        <Image className='text-white pb-1' src="/assets/people_icon.svg" alt="People" width={20} height={20} />
                        <span className="text-[#ffffff] text-sm py-1 px-2">Contributions:</span>
                    </div>
                    <span className="text-[#ffffff] text-lg leading-3 relative top-1">343</span>
                </div>
            </div>
            <div className="before:flex before:content-[url('/assets/csesoc_icon.svg')] before:h-0 before:top-14 before:relative before:left-4">
                <motion.svg 
                    className="relative top-9" width={200} height={200}
    /*                style={{transform: "rotate(270deg)", top: "5.65rem", left: "-1.55rem"}}*/
                    style={{transform: "rotate(270deg)"}}
                    initial="hidden"
                    animate={controls}
                >
                    <motion.circle
                        r={r}
                        cx={100}
                        cy={100}
                        fill="transparent"
                        stroke="#444F6F"
                        strokeWidth={"0.75rem"}
                        strokeLinecap="round"
                    />
                    <motion.circle
                        r={r}
                        cx={100}
                        cy={100}
                        fill="transparent"
                        stroke="rgb(248 250 252)"
                        strokeWidth={"0.75rem"}
                        strokeLinecap="round"
                        variants={progress}
                    />
                </motion.svg>
{/*}                <Image className="z-10 absolute top-11" src="/assets/csesoc_icon.svg" alt="CSESoc Icon" width={150} height={150} />*/}
            </div>
        </div>
        <div className="flex flex-col pb-14">
            <div className="flex flex-col">
                <div className="flex text-left">
                    <Image className='pb-1 ml-5' src="/assets/people_icon.svg" alt="People" width={20} height={20} />
                    <span className="ml-3">CSESoc is the principal representative body for UNSW computing students.</span>
                </div>
                <div className="my-4 flex">
                    <Image className="ml-5" src="/assets/location_icon.svg" alt="Location" width={17} height={17} />
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
                    <p className="text-3xl mt-6 justify-end" style={{paddingLeft: "0px"}}> 
                        csesoc/README<span className="text-[#7A8192]">.md</span>
                    </p>
                    <p className="mt-10 mb-5 max-w-lg text-[#afb3bc]">
                        1 &ensp;&ensp;<span style={{paddingLeft: "2px"}}>CSESoc is one of the biggest and most active societies at</span><br/>
                        2 &ensp;&ensp;UNSW, catering to over 3500 CSE students spanning across<br/>
                        3 &ensp;&ensp;degrees in Computer Science, Software Engineering,<br/>
                        4 &ensp;&ensp;Bioinformatics and Computer Engineering.
                        <br/><br/>
                        5 &ensp;&ensp;We are here to fulfil the social, personal and professional<br/>
                        6 &ensp;&ensp;needs of CSE students, and promote computing through a<br/>
                        7 &ensp;&ensp;variety of forms.
                    </p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-markdown-fill" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 1a.5.5 0 0 0-.5.5v3.793L9.854 8.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L12 9.293V5.5a.5.5 0 0 0-.5-.5M3.56 7.01h.056l1.428 3.239h.774l1.42-3.24h.056V11h1.073V5.001h-1.2l-1.71 3.894h-.039l-1.71-3.894H2.5V11h1.06z"/>
                    </svg>
                </div>
            </div>
            <div className="flex px-6 pt-4 pb-6 bg-[#444f6f38] rounded-md w-full justify-between align-baseline">
                <div className="flex flex-col">
                    <p className="text-3xl mt-6 justify-end" style={{paddingLeft: "0px"}}> 
                        execs-directors-subcoms<span className="text-[#7A8192]">.md</span>
                    </p>
                    <p className="mt-10 mb-5 max-w-lg text-[#afb3bc]">
                        1 &ensp;&ensp;<span style={{paddingLeft: "2px"}}>100+ events (35+ careers related revents)</span><br/>
                        2 &ensp;&ensp;41 sponsors<br/>
                        3 &ensp;&ensp;480 000 discord messages<br/>
                        4 &ensp;&ensp;200+ volunteers.<br/>
                        5 &ensp;&ensp;Tiktok: 27.2k views, 2k+ likes<br/>
                        6 &ensp;&ensp;Podcast: 10k downloads, 600+ average viewers<br/>
                        7 &ensp;&ensp;500+ high school students reached.
                    </p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-markdown-fill" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 1a.5.5 0 0 0-.5.5v3.793L9.854 8.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L12 9.293V5.5a.5.5 0 0 0-.5-.5M3.56 7.01h.056l1.428 3.239h.774l1.42-3.24h.056V11h1.073V5.001h-1.2l-1.71 3.894h-.039l-1.71-3.894H2.5V11h1.06z"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Github;
