import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheck, FaPalette, FaCode, FaMobile, FaBullhorn, FaSearchDollar, FaPenFancy } from "react-icons/fa";

const Services = () => {
  const [isVisible, setIsVisible] = useState({});
  const [hoveredService, setHoveredService] = useState(null);

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
      title: "Web Designing",
      description:
        "Transforming ideas into stunning designs with visually appealing and user-friendly interfaces.",
      link: "/services/web-design",
      features: [
        "UI/UX Design",
        "Figma Prototyping",
        "Wireframe Development",
        "Mobile & Website Design",
      ],
      icon: FaPalette,
      image: "/images/home/services/web-design-3411373_1920.jpg",
      color: "from-pink-50 to-purple-50",
      number: "01",
    },
    {
      title: "Web Development",
      description:
        "Building robust, scalable, and high-performing websites with modern frameworks and technologies.",
      link: "/services/web-development",
      features: [
        "Custom Development",
        "E-Commerce Solutions",
        "Full-Stack Development",
        "CMS Integration",
      ],
      icon: FaCode,
      image: "/images/home/services/web-3157323_1280.jpg",
      color: "from-blue-50 to-cyan-50",
      number: "02",
    },
    {
      title: "App Development",
      description:
        "Innovative cross-platform apps for Android and iOS with robust, user-friendly solutions.",
      link: "/services/app-development",
      features: [
        "Cross-Platform Apps",
        "Native Development",
        "Custom App Design",
        "API Integration",
      ],
      icon: FaMobile,
      image: "/images/home/services/mobile-app-development-company-8379091_1920.png",
      color: "from-green-50 to-teal-50",
      number: "03",
    },
    {
      title: "Branding",
      description:
        "Building brands that inspire and connect through compelling strategies and visual identity.",
      link: "/services/branding",
      features: [
        "Logo Design",
        "Brand Identity",
        "Brand Strategy",
        "Digital Branding",
      ],
      icon: FaBullhorn,
      image: "/images/home/services/branding.png",
      color: "from-orange-50 to-yellow-50",
      number: "04",
    },
    {
      title: "SEO Optimization",
      description:
        "Boost your online visibility and drive organic growth with proven SEO strategies and techniques.",
      link: "/services/seo",
      features: [
        "On-Page SEO",
        "Off-Page SEO",
        "Keyword Research",
        "Technical SEO",
      ],
      icon: FaSearchDollar,
      image: "/images/home/services/seo-7092114_1920.png",
      color: "from-red-50 to-pink-50",
      number: "05",
    },
    {
      title: "Content Writing",
      description:
        "Crafting words that inspire, engage, and convert with high-quality, SEO-friendly content.",
      link: "/services/content-writing",
      features: [
        "Blog Writing",
        "SEO Content",
        "Marketing Copy",
        "Technical Writing",
      ],
      icon: FaPenFancy,
      image: "/images/home/services/content.jpg",
      color: "from-indigo-50 to-purple-50",
      number: "06",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#F8BE28]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div className="flex items-center justify-between mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-12 bg-[#F8BE28]"></div>
                <div>
                  <span className="text-xs font-bold text-[#F8BE28] uppercase tracking-wider">What We Do</span>
                  <h1 className="text-3xl md:text-4xl font-black text-gray-900">Our Services</h1>
                </div>
              </div>
              <p className="text-sm text-gray-600 max-w-md">
                Comprehensive digital solutions tailored to your needs
              </p>
            </div>

            {/* Service Count */}
            <div className="hidden md:block text-right">
              <div className="text-5xl font-black text-[#F8BE28]">06</div>
              <div className="text-xs text-gray-600 font-medium uppercase">Services</div>
            </div>
          </div>
        </div>
      </section>

      {/* Zigzag Services Layout */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                id={`service-${index}`}
                data-animate
                className={`relative mb-16 ${
                  isVisible[`service-${index}`]
                    ? "animate-fade-in-up"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Visual Side */}
                  <div className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className={`relative aspect-square rounded-3xl overflow-hidden shadow-xl`}>
                      {/* Service Image */}
                      <img
                        src={service.image}
                        alt={service.title}
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          hoveredService === index ? 'scale-110' : 'scale-100'
                        }`}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/600x600/F8BE28/FFFFFF?text=' + encodeURIComponent(service.title)
                        }}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} mix-blend-multiply opacity-40`}></div>
                      
                      {/* Number Watermark */}
                      <div className="absolute bottom-6 right-6 text-8xl font-black text-white/40">
                        {service.number}
                      </div>

                      {/* Icon Circle - Top Left */}
                      <div className={`absolute top-6 left-6 w-16 h-16 bg-[#F8BE28] rounded-full flex items-center justify-center transition-all duration-500 shadow-xl ${
                        hoveredService === index ? 'scale-125 rotate-12' : ''
                      }`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-1' : ''}`}>
                    {/* Service Number */}
                    <div className="flex items-center gap-4">
                      <div className="text-6xl font-black text-[#F8BE28]">{service.number}</div>
                      <div className="w-16 h-1 bg-[#F8BE28]"></div>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                      {service.title}
                    </h2>

                    {/* Description */}
                    <p className="text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3 pt-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full bg-[#F8BE28] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <FaCheck className="w-2.5 h-2.5 text-white" />
                          </div>
                          <span className="text-sm text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#F8BE28] hover:bg-[#e6a821] text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                    >
                      <span>Explore {service.title}</span>
                      <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Divider Line (except last) */}
                {index < services.length - 1 && (
                  <div className="mt-16 border-t border-gray-200"></div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta-section"
        data-animate
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-12 md:p-16 text-center shadow-xl">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#F8BE28]"></div>
            
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Let's Build Something Great Together
            </h2>
            <p className="text-base text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to transform your digital presence? Get in touch with us today and let's discuss your project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F8BE28] hover:bg-[#e6a821] text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Get Started</span>
                <FaArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-[#F8BE28] text-[#F8BE28] hover:bg-[#F8BE28] hover:text-white font-bold rounded-xl transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-black text-[#F8BE28] mb-1">500+</div>
                <div className="text-xs text-gray-600 uppercase">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#F8BE28] mb-1">98%</div>
                <div className="text-xs text-gray-600 uppercase">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#F8BE28] mb-1">50+</div>
                <div className="text-xs text-gray-600 uppercase">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
