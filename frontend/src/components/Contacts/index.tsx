import Image from 'next/image';

const boxStyling =
  'border border-[#595F6D] rounded-lg hover:border-[#788093] hover:bg-[#070034] hover:bg-opacity-75 transition-all duration-300';
const socialsBoxStyling =
  'xl:col-span-1 col-span-3 flex justify-center pt-2 pb-2 border border-[#595F6D] hover:border-[#788093] rounded-lg hover:bg-[#070034] hover:bg-opacity-75 transition-all duration-300';

const Contacts = () => {
  return (
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
      <a href="https://x.com/csesoc?lang=en" target="_blank">
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
          src="assets/tiktok_logo_no_text.svg"
          alt="TikTok"
          width={35}
          height={35}
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
  );
};

export default Contacts;
