import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const Branding = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Logo Design",
      description:
        "Unique, memorable logos that reflect your brand's identity and values.",
      icon: (
        <svg
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      title: "Brand Identity Creation",
      description:
        "Complete branding packages, including typography, color palettes, and visual guidelines for a cohesive brand presence.",
      icon: (
        <svg
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      title: "Brand Strategy",
      description:
        "Developing positioning, messaging, and strategies that align with your business goals and target audience.",
      icon: (
        <svg
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: "Marketing Collateral Design",
      description:
        "Designing branded materials such as business cards, brochures, social media templates, and more.",
      icon: (
        <svg
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "Rebranding",
      description:
        "Refreshing your existing brand to modernize its look and align it with evolving business objectives.",
      icon: (
        <svg
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
    {
      title: "Digital Branding",
      description:
        "Establishing a strong online presence with consistent branding across websites, social media, and digital campaigns.",
      icon: (
        <svg
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
  ];

  const benefits = [
    "Creative and tailored branding solutions",
    "Expertise in crafting visually striking designs",
    "Focus on storytelling and brand authenticity",
    "On-time delivery and collaborative approach",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-yellow-50/30">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#F8BE28]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Building Brands That{" "}
                <span className="text-[#F8BE28]">Inspire</span> and{" "}
                <span className="text-[#F8BE28]">Connect</span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Your brand is more than just a logo; it's the story, values, and
                identity that set your business apart. We specialize in creating
                compelling branding strategies that leave a lasting impression
                and resonate with your audience. From visual identity to brand
                positioning, we'll help you establish a brand that speaks for
                itself.
              </p>
            </div>

            <div className="relative">
              <div className="w-full h-96 flex items-center justify-center">
                <Player
                  autoplay
                  loop
                  src="https://lottie.host/71ef6588-2aff-419c-80b6-5f71865195b7/6uP7IDum2T.json"
                  style={{ height: "100%", width: "100%" }}
                  className="lottie-animation"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section
        id="what-we-offer"
        data-animate
        className="py-32 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #F8BE28 2px, transparent 2px),
                               radial-gradient(circle at 75% 75%, #000 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center mb-20 ${
              isVisible["what-we-offer"] ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-2xl lg:text-4xl font-black text-gray-900 mb-6">
              What We <span className="text-[#F8BE28]">Offer?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card-interactive group ${
                  isVisible["what-we-offer"]
                    ? "animate-slide-in-up"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border-2 border-gray-200 h-full transition-all duration-500 hover:border-[#F8BE28] hover:shadow-2xl hover:scale-105 hover:-translate-y-2">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#F8BE28] to-yellow-400 rounded-2xl flex items-center justify-center text-black mb-6 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-[#F8BE28] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F8BE28]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="why-choose-us"
        data-animate
        className="py-32 bg-gradient-to-br from-[#F8BE28] via-yellow-400 to-[#F8BE28] relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center mb-20 ${
              isVisible["why-choose-us"] ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-2xl lg:text-4xl font-black text-black mb-6">
              Why Choose <span className="text-white">Us?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-1 ${
                  isVisible["why-choose-us"]
                    ? "animate-slide-in-up"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#F8BE28] rounded-full flex items-center justify-center flex-shrink-0 mr-4 transform hover:rotate-180 transition-transform duration-300">
                    <svg
                      className="w-5 h-5 text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-900 font-semibold text-lg leading-relaxed">
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`text-center mt-16 ${
              isVisible["why-choose-us"]
                ? "animate-fade-in-up animation-delay-600"
                : "opacity-0"
            }`}
          >
            <p className="text-xl md:text-2xl text-black font-semibold mb-4 leading-relaxed">
              Your brand deserves to stand out and make a meaningful impact. Let
              us help you build a brand that truly represents who you are.
            </p>
            <p className="text-lg text-gray-900 font-bold">
              Contact us today to start your branding journey!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta-section"
        data-animate
        className="py-32 bg-gradient-to-br from-gray-50 via-white to-yellow-50/30 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div
            className={`${
              isVisible["cta-section"] ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <Link
              to="/contact"
              className="inline-block group relative px-12 py-6 bg-gradient-to-r from-[#F8BE28] to-yellow-400 text-black font-bold text-xl rounded-full overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-[#F8BE28]/50"
            >
              <span className="relative z-10 flex items-center">
                Get Started
                <svg
                  className="ml-2 w-6 h-6 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-[#F8BE28] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Branding;
