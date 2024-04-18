import React from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import Link from "next/link";

export default function Hamburger () {

  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <button onClick={() => {toggleOpen()}} className="focus:outline-none">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 right-0 bg-[#3977F9] p-4 shadow-lg w-40 rounded-2xl"
            style={{height: "85vh"}}
          >
            <ul>
              <li className="py-2"><Link href={"#about"}>About Us</Link></li>
              <li className="py-2"><Link href={"#events"}>Events</Link></li>
              <li className="py-2"><Link href={"/resources"}>Resources</Link></li>
              <li className="py-2"><Link href={"#sponsors"}>Sponsors</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
