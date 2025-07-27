// app/page.js (or index.js if in /app directory)
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Assets/heroimg.jpg" // Replace with your image
            alt="Modern Cityscape"
            fill
            className="object-cover"
            priority // Load this image first
          />
          <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
              Unlock Your Real Estate Investment Potential
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Data-driven insights and tools to help you make smarter property decisions.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/login" // Link to your services page
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
              >
                Log in 
              </a>
              <a
                href="https://calendly.com/trishitofficial/30min" // Link to your about us page
                className="bg-transparent border border-gray-300 hover:border-gray-100 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
