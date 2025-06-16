import React from 'react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Hamburger() {

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger>
        <button className="p-2 rounded-lg transition-all">
          <svg
            className="w-10 h-10 hover:scale-110 hover:rotate-2 transition-all"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align="end" 
        className="w-44 bg-[#3977F9] border-none shadow-lg rounded-2xl text-white"
      >
     
        <DropdownMenuItem className="text-white text-lg py-2 px-4 rounded-2xl focus:bg-white/10 hover:bg-white/10 cursor-pointer">
          <Link href="/about" className="w-full block">
            About Us
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="text-white text-lg py-2 px-4 rounded-2xl focus:bg-white/10 hover:bg-white/10 cursor-pointer">
          <Link href="/events" className="w-full block">
            Events
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="text-white text-lg py-2 px-4 rounded-2xl focus:bg-white/10 hover:bg-white/10 cursor-pointer">
          <Link href="/resources" className="w-full block">
            Resources
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="text-white text-lg py-2 px-4 rounded-2xl focus:bg-white/10 hover:bg-white/10 cursor-pointer">
          <Link href="/sponsors" className="w-full block">
            Sponsors
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="text-white text-lg py-2 px-4 rounded-2xl focus:bg-white/10 hover:bg-white/10 cursor-pointer">
          <Link href="/contact-us" className="w-full block">
            Contact Us
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="text-white text-lg py-2 px-4 rounded-2xl focus:bg-white/10 hover:bg-white/10 cursor-pointer">
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