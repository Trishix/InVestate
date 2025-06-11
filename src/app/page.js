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
                href="/services" // Link to your services page
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
              >
                Explore Our Services
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

      {/* Featured Areas (Example Section - Adapt to Your Needs) 
     <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Featured Investment Areas
          </h2>
          {/* Grid of featured areas - replace with your actual data 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/Assets/mumbai_property.jpg" // Replace with actual image
                alt="Mumbai"
                width={600}
                height={400}
                className="object-cover h-48 w-full"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Mumbai</h3>
                <p className="text-gray-600">Explore high-yield opportunities in India's financial capital.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  View Properties
                </a>
              </div>
            </div>
            {/* Repeat for other featured areas */}
             {/* <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/Assets/banglore_property.jpg" // Replace with actual image
                alt="Banglore"
                width={600}
                height={400}
                className="object-cover h-48 w-full"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Banglore</h3>
                <p className="text-gray-600">Explore high-yield opportunities in India's financial capital.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  View Properties
                </a>
              </div>
            </div>
             <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/Assets/delhi_property.jpg" // Replace with actual image
                alt="Delhi"
                width={600}
                height={400}
                className="object-cover h-48 w-full"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Delhi</h3>
                <p className="text-gray-600">Explore high-yield opportunities in India's financial capital.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  View Properties
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */} 

      {/* Add more sections as needed */}
    </main>
  );
}
