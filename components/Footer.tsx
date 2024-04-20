import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <section>
      <div className="sm:flex justify-between">
        <div className="flex items-center">
          <img src="assets/csesoc_logo_white.svg" alt="CSESoc Logo" />
          <Link href="/flag/ollie_is_hiding.png" target="_blank" className="sm:hidden block">
            <Image
              src="/flag/ollie_is_hiding.png"
              alt="Ollie"
              draggable="false"
              width={60}
              height={60}
              className="ml-10"
            />
          </Link>
          <Image
            src="/flag/ollie_is_hiding.png"
            alt="Ollie"
            draggable="false"
            width={60}
            height={60}
            className="ml-10 sm:block hidden"
          />
        </div>
        <div className="flex flex-col max-w-[14rem] sm:mt-0 mt-10 font-light">
          <p className="mb-6">B03 CSE Building K17, UNSW csesoc@csesoc.org.au</p>
          <p>© 2021 — CSESoc UNSW</p>
        </div>
      </div>
      <img
        src="assets/sponsors_backdrop.svg"
        alt="Sponsors backdrop"
        className="absolute bottom-0 left-0 w-screen -z-10"
      />
    </section>
  );
};

export default Footer;
