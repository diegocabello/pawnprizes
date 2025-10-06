'use client';

import { useState } from 'react';
import { FaBars, FaPlus } from 'react-icons/fa';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

type NavbarProps = {
  coins: number;
  setCoins: (coins: number) => void;
};

export default function Navbar({ coins, setCoins }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-white dark:bg-custom-dark text-black dark:text-white shadow-md relative z-20">
        {/* Left: Hamburger and Coins */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-md"
            aria-label="Open menu"
          >
            <FaBars />
          </button>

          {/* Coins display */}
          <div className="flex items-center gap-2 text-sm font-medium">
            <span>💰</span>
            <span>{coins}</span>
          </div>
        </div>

        {/* Right: Plus icon linking to create challenge */}
        <Link
          href="/create-challenge"
          className="text-md transition-transform hover:rotate-[4deg]"
          aria-label="Create challenge"
        >
          <FaPlus />
        </Link>
      </nav>

      {/* AnimatePresence handles mounting/unmounting animations */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 bg-white dark:bg-cusom-sidebar bg-opacity-50 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-in menu drawer */}
            <motion.aside
              key="menu"
              className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-cusom-sidebar shadow-lg z-20 p-6 flex flex-col gap-4 text-lg text-black dark:text-white"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              role="dialog"
              aria-modal="true"
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="self-end text-xl"
                aria-label="Close menu"
              >
                x
              </button>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Watch
              </Link>
              <Link href="/host-event" onClick={() => setMenuOpen(false)}>
                Make Challenge
              </Link>
              <Link href="/profile" onClick={() => setMenuOpen(false)}>
                View Challenges
              </Link>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
