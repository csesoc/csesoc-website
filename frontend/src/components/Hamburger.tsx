import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }

    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }

    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, [isOpen]);

  // Portal renders the backdrop at document.body level
  // Hence, instead of showing just at nav, it shows over all components
  const backdrop =
    isOpen && typeof document !== 'undefined'
      ? ReactDOM.createPortal(
          <div className="inset-0 fixed bg-black/50 z-50 backdrop-blur-sm">
            {/* Backdrop */}
            <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

            {/* Sidebar */}
            <div className="absolute right-0 top-0 bg-[#3977F9] h-screen w-80 z-50">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white absolute top-[45px] right-[30px] p-2"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="p-6 pt-20 flex flex-col gap-4 items-start">
                <Link
                  href="/about"
                  className="text-white text-lg p-3 hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>

                <Link
                  href="/events"
                  className="text-white text-lg p-3 hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  Events
                </Link>

                <Link
                  href="/resources"
                  className="text-white text-lg p-3 hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  Resources
                </Link>

                <Link
                  href="/sponsors"
                  className="text-white text-lg p-3 hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  Sponsors
                </Link>

                <Link
                  href="/contact-us"
                  className="text-white text-lg p-3 hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>

                <a
                  href="https://csesoc-merch.square.site/"
                  target="_blank"
                  className="text-white text-lg p-3 hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  Merch
                </a>
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <button className="p-2 z-50 relative" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="text-white w-6 h-6" />
      </button>
      {backdrop}
    </>
  );
};

export default Hamburger;
