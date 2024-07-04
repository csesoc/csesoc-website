import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Hamburger from './Hamburger';

const Navbar = () => {
  const [path, setPath] = useState<string[]>([]);
  useEffect(() => {
    const pathSegments: string[] | undefined = window.location.pathname.split('/').filter(segment => segment);
    if (pathSegments === undefined) setPath([]);
    else setPath(pathSegments.map(segment => segment.toUpperCase()));
  }, []);

  return (
    <nav className="flex justify-between items-center relative z-10">
      <Link href="/">
        <Image
          src="/assets/csesoc_logo.svg"
          alt="CSESoc Logo"
          width={200}
          height={200}
          draggable={false}
        />
        <p className="font-mono mt-3 font-bold">
          <span className="text-green-500">csesoc@unsw</span>
          <span>:</span>
          <span className="text-blue-500">~{path.map(segment => '/' + segment.toLowerCase())}</span>
          <span>$ </span>
          <span id="cursor" className="text-gray-400 inline-block animate-blink">_</span>
        </p>
      </Link>
      <div>
        <div className="md:flex xl:gap-18 lg:gap-10 md:gap-5 text-right font-bold hidden">
          <Link href="/about">
            <div className="text-xl">{'//'} about us</div>
          </Link>
          <Link href="/events">
            <div className="text-xl">{'//'} events</div>
          </Link>
          <Link href="/resources">
            <div className="text-xl">{'//'} resources</div>
          </Link>
          <Link href="/sponsors">
            <div className="text-xl">{'//'} sponsors</div>
          </Link>
          <Link href="/contact-us">
            <div className="text-xl">{'//'} contact us</div>
          </Link>
        </div>
        <div className="md:hidden xl:hidden lg:hidden text-right font-bold block">
          <Hamburger />
        </div>
      </div>  
    </nav>
  );
};

export default Navbar;
