import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const WebDevelopment = () => {
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
      title: "Custom Website Development",
      description:
        "Tailored solutions built from scratch to match your unique requirements and goals.",
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
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: "E-Commerce Development",
      description:
        "Scalable and feature-rich online stores with secure payment gateways, inventory management, and more.",
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
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Full-Stack Development",
      description:
        "Expertise in both front-end and back-end development to deliver seamless and complete web solutions.",
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
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
    },
    {
      title: "Framework Expertise",
      description:
        "Front-End: ReactJS, Angular, Vue.js, HTML5, CSS3, Bootstrap, Material-UI\nBack-End: Node.js, Express.js, Django, Ruby on Rails, PHP, Laravel\nDatabase: MongoDB, MySQL, PostgreSQL, Firebase Realtime Database.",
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
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
    {
      title: "CMS Development",
      description:
        "WordPress, Shopify, and custom CMS solutions to provide flexibility and control over your website content.",
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
      title: "Responsive Design",
      description:
        "Websites optimized for all devices, offering a seamless experience across mobile, tablet, and desktop.",
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
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  const benefits = [
    "Cutting-edge technology stack",
    "Clean, maintainable, and scalable code",
    "End-to-end project management",
    "Timely delivery and post-launch support",
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                Building Robust, Scalable, and{" "}
                <span className="text-[#F8BE28]">High-Performing</span> Websites
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                We specialize in creating dynamic, fully functional websites
                tailored to meet your business needs. Whether you require a
                simple business website or a complex web application, we
                leverage modern frameworks and technologies to deliver top-notch
                results.
              </p>
            </div>

            <div className="relative">
              <div className="w-full h-96 flex items-center justify-center">
                <Player
                  autoplay
                  loop
                  src="https://lottie.host/08dbc9d3-009d-475d-b673-90cdef7912e3/8XZ49hOjrM.json"
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
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
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
              Let us help you create a powerful online presence that drives
              growth and delivers value
            </p>
            <p className="text-lg text-gray-900 font-bold">
              Contact us today to get started!
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

export default WebDevelopment;
