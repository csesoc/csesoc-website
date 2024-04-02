import { diamondLinks, goldLinks, silverLinks } from '/public/data/data.ts';
//import '/styles/sponsorLinks.module.css';
const logostyle = "h-14";
const logodiv = "block gap-y-8 h-14";
const background = "radial-gradient(50% 50% at 50% 50%, rgba(235, 1, 255, 0.6) 0%, rgba(121, 73, 255, 0.6) 48.96%, rgba(57, 119, 248, 0.6) 100%)";
const outer = "rounded-[4rem] w-[90rem] flex flex-col pl-14 py-14 gap-16";

function SponsorLinks() {
  return (
    <div className="flex justify-center items-center my-20">
        <div className="w-100 flex flex-col gap-16">
            <div style={{ backgroundImage: `${background}` }} className='flex rounded-[1rem] pl-14 py-14 gap-16 items-center'>
                <h2 className="text-4xl font-black">Diamond Sponsors</h2>
                {diamondLinks.map((item) => {
                    return (
                        <a className={`${logodiv}`} href={item.href}>
                            <img className={`${logostyle}`} src={item.svg} alt={item.alt} />
                        </a>
                    );
                })}
            </div>
            <div style={{ backgroundImage: `${background}` }} className='flex rounded-[1rem] px-14 py-14'>
                <h2 className="text-4xl font-black pr-16">Gold Sponsors</h2>
                <div className='grid grid-cols-5 gap-16 items-center'>
                    {goldLinks.map((item) => {
                        return (
                            <a className="" href={item.href}>
                                <img className="h-6" src={item.svg} alt={item.alt} />
                            </a>
                        );
                    })}
                </div>
            </div>
            <div style={{ backgroundImage: `${background}` }} className='grid grid-cols-5 rounded-[1rem] pl-14 py-14 gap-16 items-center'>
                <h2 className="text-4xl font-black">Silver Sponsors</h2>
                {silverLinks.map((item) => {
                    return (
                        <a className="h-14" href={item.href}>
                            <img className="h-8" src={item.svg} alt={item.alt} />
                        </a>
                    );
                })}
            </div>
        </div>
    </div>
  );
};

export default SponsorLinks;