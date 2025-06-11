// app/blog/page.js
'use client';

import { useState } from 'react';
import Image from 'next/image';

// Hero Section
function BlogHero() {
  return (
    <section className="relative h-96 w-full">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <Image 
        src="/Assets/heroimg.jpg" 
        alt="Blog Hero"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-20 h-full flex items-center justify-center flex-col text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Our Blog
        </h1>
        <p className="text-xl text-white mt-4 max-w-2xl">
          Explore the latest trends, insights, and stories from our experts.
        </p>
      </div>
    </section>
  );
}

export default function BlogPage() {
  const blogs = [
    {
      title: "How to Invest in Real Estate: The Ultimate Beginner’s Guide",
      description: "A comprehensive guide for first-time property investors, covering strategies, risks, and market analysis.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      author: "Brandon Turner",
      url: "https://www.biggerpockets.com/blog/real-estate-investing-guide"
    },
    {
      title: "Rental Yield: What Is It and How Is It Calculated?",
      description: "Understand the concept of rental yield, how to calculate it, and why it matters for property investors.",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
      author: "The Economic Times",
      url: "https://economictimes.indiatimes.com/wealth/invest/rental-yield-what-is-it-and-how-is-it-calculated/articleshow/64968747.cms"
    },
    {
      title: "Legal Checklist for Buying Property in India",
      description: "A step-by-step legal checklist to ensure your property purchase in India is safe and compliant.",
      image: "https://images.unsplash.com/photo-1503389152951-9c3d8bcaab73?auto=format&fit=crop&w=600&q=80",
      author: "MagicBricks",
      url: "https://www.magicbricks.com/blog/legal-checklist-for-buying-property-in-india/121346.html"
    },
    {
      title: "How AI Is Changing Real Estate: 5 Trends to Watch",
      description: "Explore how artificial intelligence is transforming property search, valuation, and investment decisions.",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
      author: "Forbes Real Estate Council",
      url: "https://www.forbes.com/sites/forbesrealestatecouncil/2023/01/18/how-ai-is-changing-real-estate-5-trends-to-watch/"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevBlog = () => {
    setCurrentIndex((prev) => (prev === 0 ? blogs.length - 1 : prev - 1));
  };

  const nextBlog = () => {
    setCurrentIndex((prev) => (prev === blogs.length - 1 ? 0 : prev + 1));
  };

  const currentBlog = blogs[currentIndex];

  return (
    <main>
      <BlogHero />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Latest Insights</h2>
          <div className="relative flex items-center justify-center" style={{ height: '340px' }}>
            {/* Blog Card */}
            <a
              href={currentBlog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-6 mx-2 transition-all duration-300 w-full border-2 border-transparent hover:border-blue-600 focus:border-blue-600 outline-none"
              style={{
                minHeight: '320px',
                maxWidth: '100%',
                boxSizing: 'border-box',
              }}
              tabIndex={0}
              aria-label={`Read blog: ${currentBlog.title}`}
            >
              <div className="relative w-full md:w-48 h-40 rounded-lg overflow-hidden flex-shrink-0">
                <Image src={currentBlog.image} alt={currentBlog.title} fill className="object-cover" />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-800">{currentBlog.title}</h3>
                <p className="text-gray-600 mt-2">{currentBlog.description}</p>
                <p className="text-blue-600 font-medium mt-2">By {currentBlog.author}</p>
                <span className="text-blue-600 hover:text-blue-800 mt-2 inline-block underline">Read More</span>
              </div>
            </a>

            {/* Navigation Arrows */}
            <button
              onClick={prevBlog}
              aria-label="Previous Blog"
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100"
              style={{ zIndex: 2 }}
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextBlog}
              aria-label="Next Blog"
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100"
              style={{ zIndex: 2 }}
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          {/* Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {blogs.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full ${idx === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`Go to blog ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
