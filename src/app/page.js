import Image from "next/image";
import React from "react";
import "./globals.css";

export default function Home() {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="relative w-full h-auto">
        <Image
          src="/Assets/heroimg.jpg"
          alt="Hero Image"
          className="w-full h-auto block object-cover"
          width={1200}
          height={500}
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center px-6 md:justify-start md:px-[10%]">
          <h1 className="text-white font-bold text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-tight text-center md:text-left drop-shadow-md">
            <span className="block">Track. ROI.</span>
            <span className="block">Manage. Assets.</span>
          </h1>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {[...Array(30)].map((_, i) => (
          <p key={i} className="mb-6 text-gray-700 text-base sm:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        ))}
      </section>
    </div>
  );
}