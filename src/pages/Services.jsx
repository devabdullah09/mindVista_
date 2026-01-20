import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Services = () => {
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
      title: "Web Designing Services",
      description:
        "Transforming ideas into stunning designs with visually appealing and user-friendly interfaces.",
      link: "/services/web-design",
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
      features: [
        "UI/UX Design",
        "Figma Prototyping",
        "Wireframe Development",
        "Mobile & Website Design",
      ],
    },
    {
      title: "Web Development",
      description:
        "Building robust, scalable, and high-performing websites with modern frameworks and technologies.",
      link: "/services/web-development",
      icon: (
        <svg
          className="w-8 h-8"
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
      features: [
        "Custom Development",
        "E-Commerce",
        "Full-Stack",
        "CMS Solutions",
      ],
    },
    {
      title: "App Development",
      description:
        "Innovative cross-platform apps for Android and iOS with robust, user-friendly solutions.",
      link: "/services/app-development",
      icon: (
        <svg
          className="w-8 h-8"
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
      features: [
        "Cross-Platform",
        "Native Apps",
        "Custom Design",
        "API Integration",
      ],
    },
    {
      title: "Branding",
      description:
        "Building brands that inspire and connect through compelling strategies and visual identity.",
      link: "/services/branding",
      icon: (
        <svg
          className="w-8 h-8"
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
      features: [
        "Logo Design",
        "Brand Identity",
        "Brand Strategy",
        "Digital Branding",
      ],
    },
    {
      title: "SEO Optimization",
      description:
        "Boost your online visibility and drive organic growth with proven SEO strategies and techniques.",
      link: "/services/seo",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
      features: [
        "On-Page SEO",
        "Off-Page SEO",
        "Keyword Research",
        "Technical SEO",
      ],
    },
    {
      title: "Content Writing",
      description:
        "Crafting words that inspire, engage, and convert with high-quality, SEO-friendly content.",
      link: "/services/content-writing",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
      features: [
        "Blog Writing",
        "SEO Content",
        "Marketing Copy",
        "Technical Writing",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-yellow-50/30">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#F8BE28]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1">
              <img
                src="/images/other/service-3274892_1920.jpg"
                alt="Services"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                style={{ maxHeight: '500px' }}
              />
            </div>
            
            {/* Right Side - Text */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-block">
                <span className="bg-[#F8BE28] text-black px-6 py-2 rounded-full text-sm font-bold tracking-wide uppercase shadow-lg">
                  Our Services
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Comprehensive{" "}
                <span className="text-[#F8BE28]">Digital Solutions</span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Discover our range of services designed to transform your business
                and elevate your digital presence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        id="services-grid"
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className={`service-card-interactive group ${
                  isVisible["services-grid"]
                    ? "animate-slide-in-up"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-xl border-2 border-gray-200 h-full transition-all duration-500 hover:border-[#F8BE28] hover:shadow-2xl hover:scale-105 hover:-translate-y-2 overflow-hidden flex flex-col">
                  {/* Service Image Background */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <img
                      src={`/images/other/${index === 0 ? 'hero-image-1.jpg' : index === 1 ? 'hero-image-2.jpg' : index === 2 ? 'hero-image-3.jpg' : index === 3 ? 'sketchbook-4637459_1920.jpg' : index === 4 ? 'ai-generated-8896730_1920.jpg' : 'keyboard-254582_1920.jpg'}`}
                      alt={service.title}
                      className="w-full h-full object-cover rounded-bl-3xl"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  </div>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-[#F8BE28] to-yellow-400 rounded-xl flex items-center justify-center text-black mb-4 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg relative z-10">
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#F8BE28] transition-colors duration-300 relative z-10">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow relative z-10">
                    {service.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-[#F8BE28]/10 text-[#F8BE28] rounded-full text-xs font-semibold border border-[#F8BE28]/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* Learn More - Pushed to bottom */}
                  <div className="flex items-center text-[#F8BE28] font-bold group-hover:translate-x-2 transition-transform duration-300 mt-auto relative z-10">
                    Learn More
                    <svg
                      className="ml-2 w-4 h-4"
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
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F8BE28]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta-section"
        data-animate
        className="py-32 bg-gradient-to-br from-[#F8BE28] via-yellow-400 to-[#F8BE28] relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div
            className={`${
              isVisible["cta-section"] ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-2xl lg:text-4xl font-black text-black mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-900 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can help transform your business with our
              innovative digital solutions.
            </p>

            <Link
              to="/contact"
              className="inline-block group relative px-12 py-6 bg-black text-white font-bold text-xl rounded-full overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center">
                Contact Us
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
              <div className="absolute inset-0 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
