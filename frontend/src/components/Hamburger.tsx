import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=''>
      <button 
        className="p-2 z-50 relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <div 
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="fixed right-0 top-0 w-80 h-screen bg-[#3977F9] z-50">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-[45px] right-[20px] text-white p-2"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="p-6 pt-20">
              <div className="space-y-4">
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  <div className="text-white text-lg p-3">
                    About Us
                  </div>
                </Link>
                
                <Link href="/events" onClick={() => setIsOpen(false)}>
                  <div className="text-white text-lg p-3">
                    Events
                  </div>
                </Link>
                
                <Link href="/resources" onClick={() => setIsOpen(false)}>
                  <div className="text-white text-lg p-3">
                    Resources
                  </div>
                </Link>
                
                <Link href="/sponsors" onClick={() => setIsOpen(false)}>
                  <div className="text-white text-lg p-3">
                    Sponsors
                  </div>
                </Link>
                
                <Link href="/contact-us" onClick={() => setIsOpen(false)}>
                  <div className="text-white text-lg p-3">
                    Contact Us
                  </div>
                </Link>
                
                <a href="https://csesoc-merch.square.site/" target="_blank" onClick={() => setIsOpen(false)}>
                  <div className="text-white text-lg p-3">
                    Merch
                  </div>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}