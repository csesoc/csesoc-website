import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Hamburger() {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsOpenDropdown(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <DropdownMenu modal={false} open={isOpenDropdown} onOpenChange={setIsOpenDropdown}>
      <DropdownMenuTrigger asChild>
        <button className="p-2 rounded-lg">
          <div className="w-10 h-10 flex flex-col justify-center items-center">
            <motion.div
              className="h-0.5 w-6 bg-white"
              animate={{
                rotate: isOpenDropdown ? 45 : 0,
                y: isOpenDropdown ? 2 : -4,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <motion.div
              className="h-0.5 w-6 bg-white"
              animate={{
                opacity: isOpenDropdown ? 0 : 1,
                x: isOpenDropdown ? -10 : 0,
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />
            <motion.div
              className="h-0.5 w-6 bg-white"
              animate={{
                rotate: isOpenDropdown ? -45 : 0,
                y: isOpenDropdown ? -2 : 4,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </div>
        </button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align="end" 
        className="w-44 bg-[#3977F9] border-none shadow-lg rounded-2xl text-white dropdown-content overflow-hidden"
      >
     
        <DropdownMenuItem asChild className="text-white text-lg py-2 px-4 rounded-2xl focus:bg-white/10 hover:bg-white/10 cursor-pointer dropdown-item">
          <Link href="/about" className="w-full block">
            About Us
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild className="text-white text-lg py-2 px-4 rounded-2xl focus:bg-white/10 hover:bg-white/10 cursor-pointer dropdown-item">
          <Link href="/events" className="w-full block">
            Events
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild className="text-white text-lg py-2 px-4 rounded-2xl focus:bg-white/10 hover:bg-white/10 cursor-pointer dropdown-item">
          <Link href="/resources" className="w-full block">
            Resources
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild className="text-white text-lg py-2 px-4 rounded-2xl focus:bg-white/10 hover:bg-white/10 cursor-pointer dropdown-item">
          <Link href="/sponsors" className="w-full block">
            Sponsors
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild className="text-white text-lg py-2 px-4 rounded-2xl focus:bg-white/10 hover:bg-white/10 cursor-pointer dropdown-item">
          <Link href="/contact-us" className="w-full block">
            Contact Us
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild className="text-white text-lg py-2 px-4 rounded-2xl focus:bg-white/10 hover:bg-white/10 cursor-pointer dropdown-item">
          <a 
            target="_blank" 
            href="https://csesoc-merch.square.site/"
            className="w-full block"
          >
            Merch
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}