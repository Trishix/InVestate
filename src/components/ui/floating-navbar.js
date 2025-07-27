"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { FaHome, FaInfoCircle, FaServicestack, FaBlog } from "react-icons/fa";

const navItems = [
  { name: "Home", link: "/", icon: <FaHome /> },
  { name: "About", link: "/about", icon: <FaInfoCircle /> },
  { name: "Services", link: "/services", icon: <FaServicestack /> },
  { name: "Blog", link: "/blog", icon: <FaBlog /> },
];

export const FloatingNav = ({ className }) => {
  const [visible, setVisible] = useState(false); // hidden initially
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        // At top of page, always hide
        setVisible(false);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down -> hide navbar
        setVisible(false);
      } else {
        // Scrolling up -> show navbar
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "fixed top-10 inset-x-0 mx-auto max-w-fit rounded-full bg-white dark:bg-black border border-transparent dark:border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 flex items-center space-x-4",
            className
          )}
        >
          {/* Left brand text */}
          <span className="font-bold text-black dark:text-white mr-6 select-none text-lg">
            InVestate
          </span>

          {/* Nav Links */}
          {navItems.map((navItem, idx) => (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "flex items-center space-x-1 text-neutral-600 dark:text-neutral-50 dark:hover:text-neutral-300 hover:text-neutral-500",
                "relative",
                "text-sm"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block">{navItem.name}</span>
            </a>
          ))}

          {/* Login Button */}
          <button
            className="relative border border-neutral-200 dark:border-white/[0.2] px-4 py-2 rounded-full text-black dark:text-white font-medium text-sm"
            type="button"
          >
            Login
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent to-transparent h-px" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingNav;
