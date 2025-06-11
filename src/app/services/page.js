// app/services/page.js
'use client';

import { useState } from 'react';
import Image from 'next/image';

const services = [
  {
    title: "Property ROI Calculator",
    shortDesc: "Instantly estimate your property’s return on investment with real-time data.",
    detailedDesc: "Our ROI Calculator helps you evaluate potential returns on any residential or commercial property in India. Input purchase price, rental income, and expenses to get a clear picture of your investment performance. Features include city-wise benchmarks, tax impact analysis, and historical appreciation trends.",
    image: "/Assets/ROI.jpeg"
  },
  {
    title: "Rental Yield Tracker",
    shortDesc: "Track your rental yields and compare with market averages across Indian cities.",
    detailedDesc: "Monitor your rental income, occupancy rates, and maintenance expenses in one place. Our tracker provides monthly and annual reports, alerts for lease renewals, and insights into maximizing your rental returns.",
    image: "/Assets/Rental_tracker.jpeg"
  },
  {
    title: "Portfolio Dashboard",
    shortDesc: "Manage multiple properties with a unified dashboard and actionable insights.",
    detailedDesc: "Get a 360-degree view of all your real estate assets. Analyze cash flows, capital appreciation, and risk exposure. The dashboard supports custom tagging, document storage, and integration with leading property portals.",
    image: "/Assets/portfolio_dashboard.avif"
  },
  {
    title: "Legal & Compliance Checker",
    shortDesc: "Ensure your property documents are compliant with the latest regulations.",
    detailedDesc: "Upload your property papers and let our AI-powered engine scan for legal gaps, missing documents, and compliance issues. Receive actionable recommendations and connect with verified legal experts if needed.",
    image: "/Assets/legal_checker.avif"
  },
];

const faqs = [
  {
    question: "How do I use the ROI Calculator?",
    answer: "Simply enter your property details, purchase price, rental income, and expenses. The calculator will instantly provide your ROI along with market comparisons."
  },
  {
    question: "Can I track multiple properties in the dashboard?",
    answer: "Yes, our Portfolio Dashboard allows you to add and manage multiple properties, view consolidated reports, and analyze each asset’s performance."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use bank-level encryption and do not share your information with third parties without your consent."
  },
  {
    question: "What is the duration of the Expert Advisory service?",
    answer: "Each advisory session lasts 30 minutes. You can book multiple sessions as needed."
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer: "Yes, if you’re not satisfied with any paid service, we offer a 7-day money-back guarantee. No questions asked."
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-96 w-full">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image 
          src="/Assets/heroimg.jpg"
          alt="Our Services"
          fill
          className="object-cover"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Smart Tools & Services for Every Indian Property Owner
            </h1>
            <p className="text-xl text-white mt-4 max-w-2xl">
              Everything you need to maximize returns, ensure compliance, and grow your real estate portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="py-16 bg-black-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">
            Our Services
          </h2>
          {/* Carousel */}
          <div className="relative">
            <div className="flex overflow-x-auto pb-6 space-x-6 scrollbar-hide">
              {services.map((service, idx) => (
                <button
                  key={idx}
                  className={`flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden border-2 transition-all duration-200 ${
                    selectedService === idx ? 'border-blue-600' : 'border-transparent'
                  }`}
                  onClick={() => setSelectedService(idx)}
                  aria-label={service.title}
                >
                  <div className="h-40 relative">
                    <Image 
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-left">
                    <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
                    <p className="text-gray-600 mt-2">{service.shortDesc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Detailed Description */}
          <div className="mt-12 grid md:grid-cols-2 gap-10 items-cente">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{services[selectedService].title}</h3>
              <p className="text-gray-700 text-lg">{services[selectedService].detailedDesc}</p>
            </div>
            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md">
              <Image 
                src={services[selectedService].image}
                alt={services[selectedService].title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border rounded-lg bg-white shadow-sm">
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  aria-expanded={openFAQ === idx}
                  aria-controls={`faq-content-${idx}`}
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-blue-600 transition-transform duration-200 ${openFAQ === idx ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  id={`faq-content-${idx}`}
                  className={`px-6 pb-4 text-gray-700 transition-all duration-200 ${openFAQ === idx ? 'block' : 'hidden'}`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
