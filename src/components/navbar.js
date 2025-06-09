"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">Investate</div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-base">
          <a href="./" className="hover:text-gray-300">Home</a>
          <a href="./about" className="hover:text-gray-300">About</a>
          <a href="./services" className="hover:text-gray-300">Services</a>
          <a href="./blog" className="hover:text-gray-300">Blog</a>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-base">
          <a href="./" className="hover:text-gray-300">Home</a>
          <a href="./about" className="hover:text-gray-300">About</a>
          <a href="./services" className="hover:text-gray-300">Services</a>
          <a href="./blog" className="hover:text-gray-300">Blog</a>
        </div>
      )}
    </nav>
  );
}
