// app/about-us/page.js
import Image from 'next/image';

export default function AboutUs() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-96 w-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image 
          src="/Assets/heroimg.jpg"
          alt="Investate Team"
          fill
          className="object-cover"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Building Wealth Through Smart Real Estate
            </h1>
            <p className="text-xl text-white mt-4 max-w-2xl">
              Empowering Indian investors to maximize their property returns since 2018
            </p>
          </div>
        </div>
      </section>

      {/* Company History Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Our Journey
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2018 in Bengaluru, Investate began with a simple mission: to simplify real estate investment tracking for Indian investors. 
              What started as a small team of three has now grown to serve over 50,000 customers across 15 Indian cities.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">2018 - The Beginning</h3>
                  <p className="text-gray-600">Launched our first property ROI calculator for Mumbai properties</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">2020 - Expansion</h3>
                  <p className="text-gray-600">Expanded to 5 major cities including Delhi, Hyderabad, and Pune</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">2023 - Mobile App</h3>
                  <p className="text-gray-600">Launched our award-winning mobile app with AI-powered investment insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Our Mission
              </h2>
              <p className="text-gray-700">
                To democratize real estate investment knowledge in India by providing transparent, data-driven tools that help property owners track their investments, maximize rental yields, and make informed decisions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Our Vision
              </h2>
              <p className="text-gray-700">
                To become India's most trusted real estate investment platform, helping 1 million property owners optimize their returns by 2030 through technology and financial education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Meet Our Leaders
          </h2>
          
          <div className="relative">
            <div className="flex overflow-x-auto pb-6 space-x-6 scrollbar-hide">
              {[
                {
                  name: "Trishit Swarnakar",
                  role: "Founder & CEO",
                  bio: "Ex-McKinsey with 15+ years in real estate. Passionate about financial literacy.",
                  image: "/Assets/Trishit.jpg"
                },
                {
                  name: "Bhavesh Bansal",
                  role: "CTO",
                  bio: "Tech leader from IIT Bombay. Built India's first property analytics engine.",
                  image: "/Assets/Bhavesh_Bansal.jpeg"
                },
                {
                  name: "Vishal Sharma",
                  role: "Head of Growth",
                  bio: "Formerly with NoBroker. Scaling Investate across India.",
                  image: "/Assets/Vishal.jpeg"
                },
                {
                  name: "Rahul Kumar",
                  role: "Product Lead",
                  bio: "User-centric designer making complex data simple.",
                  image: "/Assets/Rahul.jpeg"
                },
                {
                  name: "Kartik Katiyar",
                  role: "Head of Data",
                  bio: "Real estate data expert with 12 years at PropTiger.",
                  image: "/Assets/Kartik Katiyar.jpeg"
                },
                {
                  name: "Swati Priya",
                  role: "Customer Success Lead",
                  bio: "Ensuring our users get the most value from Investate.",
                  image: "/Assets/Swati.jpeg"
                }
              ].map((member, index) => (
                <div key={index} className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 relative">
                    <Image 
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 h-full w-full bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                    <p className="text-blue-600 font-medium">{member.role}</p>
                    <p className="text-gray-600 mt-2">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}