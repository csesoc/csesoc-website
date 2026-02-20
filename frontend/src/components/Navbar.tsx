import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Hamburger from './Hamburger';
import Terminal from './Terminal';

const Navbar = () => {
  const [path, setPath] = useState<string[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const pathSegments: string[] | undefined = window.location.pathname.split('/').filter(segment => segment);
    if (pathSegments === undefined) setPath([]);
    else setPath(pathSegments.map(segment => segment.toUpperCase()));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () =>window.removeEventListener('scroll', handleScroll);
  }, []); 

  return (
    <nav className={`sticky top-0 flex justify-between items-center relative z-10 rounded-md bg-black/15 backdrop-blur-md xl:px-24 md:px-10 px-5 py-6 duration-500 ${isScrolled ? 'shadow-xl' : 'shadow-none'}`}>
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
          {/* The interactive terminal that allows changing pages using 'cd' */}
          <Terminal/>
        </p>
      </Link>
      <div>
        <div className="md:flex xl:gap-18 lg:gap-10 md:gap-5 text-right font-bold hidden">
          <Link href="https://docs.google.com/forms/d/1EkNgm9HQc1b3C8Pvk7AqHvXF6N65txmOxmKjdMpfwBs">
            <div className="text-xl">{'//'} subcommittee</div>
          </Link>
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
        <div className="sm:hidden xl:hidden lg:hidden text-right font-bold block">
          <Hamburger />
        </div>
      </div>  
    </nav>
  );
};

export default Navbar;
