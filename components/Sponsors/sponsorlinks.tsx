import { diamondLinks, goldLinks, silverLinks } from '../../public/data/data';
//import '/styles/sponsorLinks.module.css';
const logostyle = 'h-14';
const logodiv = 'block gap-y-8 h-14';
const background = 'rgba(57, 119, 248, 0.6)';
// const outer = 'rounded-[4rem] w-[90rem] flex flex-col pl-14 py-14 gap-16';

function SponsorLinks() {
  return (
    <div className="flex justify-center items-center my-20">
      <div className="w-100 flex flex-col gap-16">
        <div
          style={{ backgroundColor: `${background}` }}
          className="flex flex-wrap rounded-[1rem] pl-14 py-14 gap-16 items-center"
        >
          <h2 className="text-4xl font-black">Diamond Sponsors</h2>
          {diamondLinks.map((item, index) => {
            return (
              <a key={index} className={`${logodiv}`} href={item.href}>
                <img className={`${logostyle}`} src={item.svg} alt={item.alt} />
              </a>
            );
          })}
        </div>
        <div
          style={{ backgroundColor: `${background}` }}
          className="flex flex-wrap rounded-[1rem] px-14 py-14 gap-16 items-center"
        >
          <h2 className="text-4xl font-black">Gold Sponsors</h2>
          {goldLinks.map((item, index) => {
            return (
              <a key={index} className="" href={item.href}>
                <img className="h-6" src={item.svg} alt={item.alt} />
              </a>
            );
          })}
        </div>
        <div
          style={{ backgroundColor: `${background}` }}
          className="flex flex-wrap rounded-[1rem] px-14 py-14 gap-16 items-center"
        >
          <h2 className="text-4xl font-black">Silver Sponsors</h2>
          {silverLinks.map((item, index) => {
            return (
              <a key={index} className="h-14" href={item.href}>
                <img className="h-8" src={item.svg} alt={item.alt} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SponsorLinks;
