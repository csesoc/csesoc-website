import Image from 'next/image';
import Link from 'next/link';
import { socialLinks } from '../public/data/data';

const Footer = () => {
  return (
    <section>
      <div className="sm:flex justify-between pb-10">
        <div className="flex flex-col gap-10">
          <div className="flex items-center">
            <Link href="/" className="flex">
              <Image src="assets/csesoc_logo_white.svg" width={231} height={53} alt="CSESoc Logo" />
              <Image
                src="/flag/ollie_is_hiding.png"
                alt="Ollie"
                draggable="false"
                width={60}
                height={60}
                className="ml-10"
              />
            </Link>
          </div>
          <div className="grid grid-cols-8 gap-4">
            {socialLinks.map((item, index) => {
              return (
                <a key={index} className="" href={item.href}>
                  <Image
                    className="h-4 fill-white min-w-full hover:scale-125 transition-all"
                    src={item.src}
                    alt={item.alt}
                    height={0}
                    width={0}
                  />
                </a>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col max-w-[14rem] sm:mt-0 mt-10 font-light">
          <p className="mb-6">B03 CSE Building K17, UNSW csesoc@csesoc.org.au</p>
          <p>© 2021 — CSESoc UNSW</p>
        </div>
      </div>
      <Image
        src="assets/sponsors_backdrop.svg"
        alt="Sponsors backdrop"
        height={0}
        width={0}
        className="absolute bottom-0 left-0 w-screen -z-10"
      />
    </section>
  );
};

export default Footer;
