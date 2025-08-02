"use client";
import Lenis from "lenis";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
    });
    let raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const testimonials = [
    {
      text: "Hattan took time to understand my vision. Three successful publications later, I couldn't work with anyone else!",
      name: "Margaret T.",
      role: "Memoir Author",
    },
    {
      text: "From skeptical to sold! My novel hit 5,000+ copies thanks to Hattan's exceptional quality.",
      name: "Robert J.",
      role: "Fiction Writer",
    },
    {
      text: "At 60, I thought publishing was beyond me. Hattan made it feel easy and kept me valued every step!",
      name: "William S.",
      role: "Non-Fiction Author",
    },
  ];

  const faqData = [
    {
      question: "What genres of books do Hattan Publishers typically accept?",
      answer:
        "Hattan Publishers accepts various genres, including fiction (literary, romance, mystery, science fiction, etc.), non-fiction (memoirs, biographies, self-help, history, etc.), young adult, children's books, and more.",
    },
    {
      question: "How do I submit my manuscript to Hattan Publishers?",
      answer:
        "You can send us your manuscript, preferably via email, as it is readily accessible, and the team can start working on your project. If you don't have a strict timeline, you can send us via fax, mail, or scanned images.",
    },
    {
      question:
        "Will the Hattan Publishers handle the marketing and promotion of my book?",
      answer:
        "Yes, if you have signed up for a Marketing Plan for your book, Hattan Publishers has a dedicated marketing and publicity department that will help promote your book. They may assist with creating a marketing plan, arranging author events, securing media coverage, and leveraging digital platforms. However, it's also important for authors to actively participate in promoting their own books and building their author brand.",
    },
    {
      question: "Can I choose my own cover design for my book?",
      answer:
        "Hattan Publishers values author input, and the final decision regarding cover design is often a collaborative effort between the publisher, the author, and the design team. Designers have experience in creating covers that appeal to their target audience and fit within market trends. However, authors can share their ideas and preferences, and the designer will strive to create a cover that represents the essence of the book while meeting market standards.",
    },
    {
      question: "How do royalties work with Hattan Publishers?",
      answer:
        "Royalties are a percentage of the book's sales that authors receive as compensation. All royalties go directly to the author; Hattan Publishers would never ask its authors for a percentage of their royalties.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white/80 backdrop-blur-lg border-b border-gray-100 relative z-50 shadow-lg">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Hattan Publishers Logo"
                width={80}
                height={80}
                className="rounded-lg"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-base text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium py-2"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-base text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium py-2"
              >
                About Us
              </a>
              <a
                href="#services"
                className="text-base text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium py-2"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-base text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium py-2"
              >
                Portfolio
              </a>
              <a
                href="#testimonials"
                className="text-base text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium py-2"
              >
                Blogs
              </a>
              <a
                href="#contact"
                className="text-base text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium py-2"
              >
                Contact Us
              </a>
            </div>
            <button
              className="md:hidden cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 py-4">
              <div className="flex flex-col space-y-4 px-4">
                <a
                  href="#home"
                  className="text-base text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium py-2"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-base text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium py-2"
                >
                  About Us
                </a>
                <a
                  href="#services"
                  className="text-base text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium py-2"
                >
                  Services
                </a>
                <a
                  href="#portfolio"
                  className="text-base text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium py-2"
                >
                  Portfolio
                </a>
                <a
                  href="#testimonials"
                  className="text-base text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium py-2"
                >
                  Blogs
                </a>
                <a
                  href="#contact"
                  className="text-base text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium py-2"
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main>
        {/* Hero Section with Video Background */}
        <section
          id="home"
          className="relative py-32 lg:py-40 flex items-center justify-center overflow-hidden bg-gray-900"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{
              filter: "brightness(0.8)",
              minWidth: "100%",
              minHeight: "100%",
            }}
            onLoadStart={() => console.log("Video loading started")}
            onCanPlay={() => console.log("Video can play")}
            onError={(e) => console.log("Video error:", e)}
          >
            <source src="/main.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Slight black overlay for text readability */}
          <div
            className="absolute inset-0 bg-black bg-opacity-30 z-10"
            style={{ opacity: 0.5 }}
          ></div>

          {/* Content */}
          <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-5">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 leading-tight text-white">
              Your Story Deserves to be Told
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Transform your ideas into bestsellers with our expert team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 text-base font-medium rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-6 py-3 text-base font-medium rounded-lg hover:bg-white hover:text-gray-900 transition-colors cursor-pointer">
                Explore Services
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">
                Your Publishing Partner
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We turn dreams into published reality
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div
                      style={{ marginTop: "-1px" }}
                      className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
                    >
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Every Story Matters
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        From first-time authors to seasoned writers, we guide
                        you from manuscript to bestseller.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div
                      style={{ marginTop: "-1px" }}
                      className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
                    >
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Author-First Approach
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Founded by writers, for writers. We keep the process
                        transparent and rewarding.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div
                      style={{ marginTop: "-1px" }}
                      className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
                    >
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Expert Team
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Decades of experience in writing, editing, design, and
                        marketing under one roof.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose Us?
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Real Partnership
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Genuine partnerships, not cookie-cutter results. Your
                      success is our success.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Crystal Clear Pricing
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Complete transparency. No hidden fees, no surprises.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      You Own Everything
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Full creative control and copyright ownership stays with
                      you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600">
                Books that found their readers through our partnership
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className=" p-0 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="aspect-[3/4] bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20"></div>
                    <svg
                      className="w-12 h-12 text-blue-600 relative z-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to transform your manuscript into a
                bestseller
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Writing & Editing
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Transform ideas into compelling stories with expert editing
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Cover Design
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Eye-catching designs that make readers stop and buy
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Illustrations
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Magical artwork that brings children's stories to life
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Publishing
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Complete publishing services from manuscript to market
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9V3m0 9l3-3m-3 3l3 3m-3-3l-3-3m3 3l-3 3"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Distribution
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Global reach across Amazon, Apple Books & more
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Marketing
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Strategic campaigns to get your book discovered
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Launch Support
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We're with you from launch day to bestseller status.
                  Coordinated releases, promotional events, and ongoing
                  partnership for your publishing success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">
                Author Success Stories
              </h2>
              <p className="text-xl text-gray-600">
                Real testimonials from published authors
              </p>
            </div>

            {/* Testimonial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Become a Published Author?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
              Join thousands of successful authors who chose Hattan as their
              publishing partner
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 text-base font-medium rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
              Start Your Journey Today
            </button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                We've got answers to help you get started
              </p>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
                >
                  <button
                    className="w-full text-left font-semibold text-gray-900 text-sm p-4 flex justify-between items-center cursor-pointer"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    {faq.question}
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        openFAQ === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openFAQ === index && (
                    <div className="px-4 pb-4">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-20 bg-blue-600">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="text-white">
                <h2 className="text-4xl font-bold mb-4">
                  Ready To Begin Your Publishing Journey
                </h2>
                <p className="text-lg opacity-90 mb-6 leading-relaxed">
                  Your publishing journey starts with one conversation
                </p>
                <p className="text-lg opacity-90 mb-6">
                  Call (646) 443-6234 or fill out our form below
                </p>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-white mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-sm">(646) 443-6234</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-white mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm">Info@hattanpublishers.com</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  Contact Us
                </h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className="w-full px-3 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="w-full px-3 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="+123 456 7890"
                      className="w-full px-3 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Type Your Messages . . . ."
                      rows="3"
                      className="w-full px-3 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none placeholder-gray-500"
                    ></textarea>
                  </div>
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      className="mt-1 mr-2 cursor-pointer"
                    />
                    <p className="text-xs text-gray-600">
                      I consent to receive SMS communications from Hattan
                      Publishers regarding my orders, updates, and promotional
                      offers. Message and data rates may apply. Message
                      frequency may vary. Reply STOP to opt-out. View our
                      Privacy Policy for more details.
                    </p>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 text-base font-medium rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                    Contact Us
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-bold mb-3">Hattan Publishers</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Professional publishing services with an author-first approach.
                Transform your manuscript into a bestseller with our
                comprehensive support.
              </p>
              <div className="space-y-1 text-gray-300 text-sm">
                <div>1178 Broadway, 3rd Floor #387</div>
                <div>10001, New York City, United States</div>
                <div className="pt-2">
                  <div>Info@hattanpublishers.com</div>
                  <div>Toll Free (877) 428-2002</div>
                  <div>(646) 443-6234</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm">Quick Links</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Books
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm">Services</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Ghostwriting
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Book Editing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Cover Designing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Publishing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Book Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Illustration Design
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Beta Reader Testing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Book Coaching
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm">Help</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Terms And conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-300">
            <p className="text-sm">
              &copy; 2025 Hattanpublishers LLC All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer group"
          onClick={() => {}}
        >
          <svg
            className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </button>
      </div>
    </div>
  );
}
