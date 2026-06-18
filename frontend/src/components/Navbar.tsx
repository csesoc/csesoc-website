import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Hamburger from './Hamburger';
import Terminal from './Terminal';

const Navbar = () => {
  const [path, setPath] = useState<string[]>([]);
  useEffect(() => {
    const pathSegments: string[] | undefined = window.location.pathname.split('/').filter(segment => segment);
    if (pathSegments === undefined) setPath([]);
    else setPath(pathSegments.map(segment => segment.toUpperCase()));
  }, []);

  return (
    <nav className="sticky top-0 flex flex-col relative z-10 shadow-lg rounded-md bg-black/15 backdrop-blur-md xl:px-24 md:px-10 px-5 py-6">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/assets/csesoc_logo.svg"
            alt="CSESoc Logo"
            width={200}
            height={200}
            draggable={false}
            className="w-28 h-auto md:w-36 lg:w-48"
          />
        </Link>
        <div className="text-[1.7vw] xl:text-xl md:flex xl:gap-18 lg:gap-10 md:gap-5 text-right font-bold hidden">
          <Link href="/about">
            <div>{'//'} about us</div>
          </Link>
          <Link href="/events">
            <div>{'//'} events</div>
          </Link>
          <Link href="/resources">
            <div>{'//'} resources</div>
          </Link>
          <Link href="/sponsors">
            <div>{'//'} sponsors</div>
          </Link>
          <Link href="/contact-us">
            <div>{'//'} contact us</div>
          </Link>
          <a target="_blank" href="https://csesoc-merch.square.site/" className='flex'>
            <Image
              src="/assets/merch-store-icon.svg"
              alt="Merchandise Store Icon"
              width={29}
              height={29}
              draggable={false}
            />
          </a>
        </div>
        <div className="md:hidden xl:hidden lg:hidden text-right font-bold block">
          <Hamburger />
        </div>
      </div>
      <div>
        <p className="font-mono mt-3 font-bold">
          <span className="text-green-500">csesoc@unsw</span>
          <span>:</span>
          <span className="text-blue-500">~{path.map(segment => '/' + segment.toLowerCase())}</span>
          <span>$ </span>
          {/* The interactive terminal that allows changing pages using 'cd' */}
          <Terminal/>
        </p>
      </div>  
    </nav>
  );
};

export default Navbar;
