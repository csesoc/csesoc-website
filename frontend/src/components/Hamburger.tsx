import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Hamburger = () => {
  // Needs dom element to be same bfore and after
  // setIsOpen(true) occurs first while dom portal doesnt exist
  // Then creates dom portal
  // So it tries to go from isOpen=true to isOpen=true
  // So no animation occurs as it starts from its finishing val
  // So we need to create dom portal first, then menu
  // animation should only start after dom portal is created
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(true);
    setTimeout(() => setIsOpen(true), 10);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setTimeout(() => setShowMenu(false), 300);
  };

  useEffect(() => {
    if (showMenu) {
      // Add padding when scrollbar vanishes
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = 'scroll';
      document.body.style.paddingRight = '0px';
    };
  }, [showMenu]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };

    if (showMenu) document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showMenu]);

  // Portal renders the backdrop at document.body level
  // Hence, instead of showing just at nav, shows over all components
  const backdrop =
    showMenu && typeof document !== 'undefined'
      ? ReactDOM.createPortal(
          // Backdrop
          <div
            className={`fixed inset-0 z-50 ease-out transition-all duration-300 ${
              isOpen
                ? 'bg-black/50 backdrop-blur-sm'
                : 'bg-black/0 backdrop-blur-none'
            }`}
            onClick={closeMenu}
          >
            {/* Sidebar */}
            <div
              className={`absolute top-0 right-0 bg-[#3977F9] h-screen w-80 z-50 ease-in-out transition-transform duration-300 ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeMenu}
                className="text-white top-[45px] right-[35px] absolute p-2"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="p-6 pt-20 items-start flex flex-col gap-4">
                <Link
                  href="/about"
                  className="text-white text-lg p-3 hover:underline"
                  onClick={closeMenu}
                >
                  About Us
                </Link>

                <Link
                  href="/events"
                  className="text-white text-lg p-3 hover:underline"
                  onClick={closeMenu}
                >
                  Events
                </Link>

                <Link
                  href="/resources"
                  className="text-white text-lg p-3 hover:underline"
                  onClick={closeMenu}
                >
                  Resources
                </Link>

                <Link
                  href="/sponsors"
                  className="text-white text-lg p-3 hover:underline"
                  onClick={closeMenu}
                >
                  Sponsors
                </Link>

                <Link
                  href="/contact-us"
                  className="text-white text-lg p-3 hover:underline"
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>

                <a
                  href="https://csesoc-merch.square.site/"
                  target="_blank"
                  className="text-white text-lg p-3 hover:underline"
                  onClick={closeMenu}
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
      <button className="p-2 relative z-50" onClick={openMenu}>
        <Menu className="text-white w-6 h-6" />
      </button>
      {backdrop}
    </>
  );
};

export default Hamburger;