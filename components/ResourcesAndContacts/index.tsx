// import DiscordLogo from "@/public/assets/discord_logo.svg"
import Image from 'next/image';
import { stage1, stage2, stage3 } from '../../public/data/resourceCards';

const boxStyling =
  'border border-[#595F6D] rounded-lg hover:border-[#788093] hover:bg-[#070034] hover:bg-opacity-75 transition-all duration-300';
const socialsBoxStyling =
  'xl:col-span-1 col-span-3 flex justify-center pt-2 pb-2 border border-[#595F6D] hover:border-[#788093] rounded-lg hover:bg-[#070034] hover:bg-opacity-75 transition-all duration-300';

const ResourcesAndContacts = () => {
  return (
    <section className="bg-no-repeat bg-center py-8 px-15 min-h-screen flex justify-center items-center">
      <div className="2xl:w-[90rem] xl:w-[75rem] w-[90%]">
        <div className="relative">
          <Image src="assets/resources_bg.svg" alt="Background" className="-z-50 absolute" fill />

          <div className="text-center my-10">
            <p className="text-[#3977F8] font-game text-xl">03</p>
            <h2 className="font-bold text-6xl">RESOURCES & CONTACTS</h2>
          </div>

          <div className="py-8 bg-no-repeat bg-center">
            <div className="grid grid-cols-4 1 gap-x-9 gap-y-5">

              {stage1.map((item, index) => {
                return (
                  <a
                    href={item.href}
                    target="_blank"
                    className={`col-span-4 p-5 ${boxStyling} flex`}
                  >
                    <div className="flex justify-center align-middle items-center pl-2 pr-8">
                      <Image src={item.svg} alt={item.alt} draggable="false" width={item.width} height={item.height}/>
                    </div>
                    <div>
                      <h2 className="mt-5 text-3xl font-extrabold">{item.title}</h2>
                      <p className="mt-7 text-lg mb-5">{item.desc}</p>
                    </div>
                  </a>
                );
              })}

              {stage2.map((item, index) => {
                return (
                  <a
                    href={item.href}
                    target="_blank"
                    className={`xl:col-span-1 col-span-4 p-5 ${boxStyling}`}
                  >
                    <div className='flex align-middle items-center pt-2 pb-4'>
                      <Image src={item.svg} alt={item.alt} draggable="false" width={item.width} height={item.height}/>
                    </div>
                    <div>
                      <h2 className="mt-5 text-3xl font-extrabold">{item.title}</h2>
                      <p className="mt-7 text-lg mb-5">{item.desc}</p>
                    </div>
                  </a>
                );
              })}

              {stage3.map((item, index) => {
                return (
                  <a
                    href={item.href}
                    target="_blank"
                    className={`md:col-span-2 col-span-4 p-5 ${boxStyling} flex`}
                  >
                    <div className='flex align-middle items-center pt-2 pb-4 pr-8'>
                      <Image src={item.svg} alt={item.alt} draggable="false" width={item.width} height={item.height} className='rounded-md'/>
                    </div>
                    <div>
                      <h2 className="mt-5 text-3xl font-extrabold">{item.title}</h2>
                      <p className="mt-7 text-lg mb-5">{item.desc}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="md:mt-10 mt-5">
          <div className="grid grid-cols-3 1 gap-x-9 gap-y-5 mb-10">
            <a href="https://bit.ly/CSESocDiscord" target="_blank" className={socialsBoxStyling}>
              <Image
                src="assets/discord_logo.svg"
                alt="discord logo"
                width={25}
                height={25}
                className="mr-1"
              />
              <p className="text-xl font-bold m-2">DISCORD</p>
            </a>
            <a
              href="https://www.facebook.com/csesoc/"
              target="_blank"
              className={socialsBoxStyling}
            >
              <Image
                src="assets/fb_logo.svg"
                alt="facebook logo"
                width={25}
                height={25}
                className="mr-1"
              />
              <p className="text-xl font-bold m-2">FACEBOOK</p>
            </a>
            <a
              href="https://www.facebook.com/groups/csesoc"
              target="_blank"
              className={socialsBoxStyling}
            >
              <Image
                src="assets/group_icon.svg"
                alt="facebook group"
                width={25}
                height={25}
                className="mr-1"
              />
              <p className="text-xl font-bold m-2">FACEBOOK GROUP</p>
            </a>
          </div>

          <div className="flex 1 justify-around xl:mx-40">
            <a href="https://twitter.com/csesoc?lang=en" target="_blank">
              <Image
                src="assets/x_twitter_icon.svg"
                alt="X/Twitter"
                width={35}
                height={35}
                className="mr-1 fill-white hover:scale-105 transition-all"
              />
            </a>
            <a href="https://www.youtube.com/@CSESocUNSW" target="_blank">
              <Image
                src="assets/youtube_logo.svg"
                alt="Youtube"
                width={35}
                height={35}
                className="mr-1 fill-white hover:scale-105 transition-all"
              />
            </a>
            <a href="https://www.instagram.com/csesoc_unsw/?hl=en" target="_blank">
              <Image
                src="assets/instagram_logo.svg"
                alt="Instagram"
                width={35}
                height={35}
                className="mr-1 fill-white hover:scale-105 transition-all"
              />
            </a>
            <a href="https://www.tiktok.com/@csesoc?lang=en" target="_blank">
              <Image
                src="assets/tiktok_logo.svg"
                alt="TikTok"
                width={35}
                height={35}
                className="mr-1 fill-white hover:scale-105 transition-all"
              />
            </a>
            <a href="#" target="_blank">
              <Image
                src="assets/wechat_logo.svg"
                alt="weChat"
                width={40}
                height={40}
                className="mr-1 fill-white hover:scale-105 transition-all"
              />
            </a>
            <a href="https://www.linkedin.com/company/csesoc?originalSubdomain=au" target="_blank">
              <Image
                src="assets/linkedin_logo.svg"
                alt="LinkedIn"
                width={35}
                height={35}
                className="mr-1 fill-white hover:scale-105 transition-all"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesAndContacts;
