import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Hamburger from './Hamburger';

const Navbar = () => {
  const [path, setPath] = useState<string>('');
  useEffect(() => {
    const item: string | undefined = window.location.href.split('/').pop();
    if (item == '' || item == undefined) setPath('HOME');
    else setPath(item.toUpperCase());
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
        <p className="mt-3 text-xs">C:\INTERNAL STRUCTURE\{path}</p>
      </Link>
      <div>
        <div className="md:flex xl:gap-36 lg:gap-20 md:gap-10 text-right font-bold hidden">
          <Link href="about">
            <div>{'//'} about us</div>
          </Link>
          <Link href="events">
            <div>{'//'} events</div>
          </Link>
          <Link href="resources">
            <div>{'//'} resources</div>
          </Link>
          <Link href="sponsors">
            <div>{'//'} sponsors</div>
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
