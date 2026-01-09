import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Counter Component with Animation
const Counter = ({ target, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

  const animateCount = () => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);

      setCount(Math.floor(target * easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    animate();
  };

  return (
    <span
      ref={countRef}
      className="font-black text-5xl lg:text-6xl text-white drop-shadow-lg"
    >
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const [isVisible, setIsVisible] = useState({});
  const videoRef = useRef(null);

  const values = [
    {
      title: "Ship & Iterate",
      description: "We move swiftly, refining our approach with every step to maintain a leading edge.",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Trusted Pair of Hands",
      description: "Dependable and steadfast, we are always there when it matters most.",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Overdeliver on the Promise",
      description: "Exceeding expectations is our standard, going beyond what's assured.",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Clear is Kind",
      description: "Transparent, honest communication keeps everyone on the same page.",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    }
  ];

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

  // Video autoplay
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.log);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/about/5120996_Woman_Man_3840x2160.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8BE28]/10 via-transparent to-transparent"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#F8BE28] rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#F8BE28]/70 rounded-full animate-bounce animation-delay-2000"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="hero-content">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight animate-fade-in-up tracking-tight">
              ABOUT <span className="text-[#F8BE28]">US</span>
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold mb-4 max-w-4xl mx-auto leading-tight animate-fade-in-up animation-delay-200">
              Empowering Businesses, Inspiring Innovation
            </p>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              At MindVista, we specialize in transforming businesses with enterprise-grade software solutions tailored to their needs. With a legacy of technical excellence and a passion for innovation, we help organizations thrive in an ever-evolving digital landscape.
            </p>
          </div>
        </div>

      </section>

      {/* Our Philosophy Section */}
      <section
        id="philosophy-section"
        data-animate
        className="py-32 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden"
      >
        {/* Background Pattern */}
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div
              className={`space-y-8 ${
                isVisible["philosophy-section"]
                  ? "animate-slide-in-left"
                  : "opacity-0"
              }`}
            >
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-1 bg-[#F8BE28] mr-4"></div>
                  <h2 className="text-[#F8BE28] text-xl font-bold uppercase tracking-wider">
                    Our Philosophy
                  </h2>
                </div>
                <h3 className="text-2xl lg:text-4xl font-black text-gray-900 leading-tight mb-8">
                  Empowering People and Businesses Through Innovation
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At MindVista, our philosophy is simple—empowering people and businesses through innovation. We believe in fostering a collaborative environment, investing in talent, and delivering meaningful solutions that drive progress for our clients and communities worldwide.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div
              className={`${
                isVisible["philosophy-section"]
                  ? "animate-slide-in-right"
                  : "opacity-0"
              }`}
            >
              <div className="image-card-revolutionary group relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/images/about/startup-594090_1920.jpg"
                  alt="Team Collaboration"
                  className="w-full h-96 object-cover transform group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section
        id="mission-vision-section"
        data-animate
        className="py-32 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div
              className={`mission-vision-card group ${
                isVisible["mission-vision-section"]
                  ? "animate-slide-in-left"
                  : "opacity-0"
              }`}
            >
              <div className="relative bg-gradient-to-br from-[#F8BE28]/10 via-white to-white rounded-3xl p-10 shadow-xl border-2 border-[#F8BE28]/20 h-full transition-all duration-500 hover:shadow-2xl hover:border-[#F8BE28]/40 hover:scale-105">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F8BE28]/5 rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#F8BE28] to-yellow-400 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-500">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-6">Our Mission</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To empower businesses with cutting-edge technology solutions, unlocking their growth potential by connecting them with passionate and skilled engineers.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div
              className={`mission-vision-card group ${
                isVisible["mission-vision-section"]
                  ? "animate-slide-in-right"
                  : "opacity-0"
              }`}
            >
              <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-10 shadow-xl border-2 border-[#F8BE28]/30 h-full transition-all duration-500 hover:shadow-2xl hover:border-[#F8BE28]/50 hover:scale-105">
                <div className="absolute top-0 left-0 w-32 h-32 bg-[#F8BE28]/10 rounded-br-full"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#F8BE28] to-yellow-400 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-500">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black text-white mb-6">Our Vision</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    At MindVista, we envision transforming IT systems into smart, agile, and AI-driven digital assets. With years of expertise, we empower global clients through innovative, adaptive solutions, shaping a future where technology meets the dynamic demands of a connected world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section
        id="values-section"
        data-animate
        className="py-32 bg-gradient-to-br from-gray-50 via-white to-yellow-50/30 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#F8BE28]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div
            className={`text-center mb-20 ${
              isVisible["values-section"]
                ? "animate-fade-in-up"
                : "opacity-0"
            }`}
          >
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-[#F8BE28] to-yellow-400 text-black px-8 py-3 rounded-full text-sm font-bold tracking-wide uppercase shadow-lg">
                We Believe in Providing Values
              </span>
            </div>
            <h2 className="text-2xl lg:text-4xl font-black text-gray-900 mb-8 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8BE28] via-yellow-400 to-[#F8BE28]">Values</span>
            </h2>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`value-card group ${
                  isVisible["values-section"]
                    ? "animate-slide-in-up"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 h-full transition-all duration-500 hover:shadow-2xl hover:border-[#F8BE28] hover:scale-105">
                  {/* Icon */}
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#F8BE28]/10 to-yellow-50 flex items-center justify-center text-[#F8BE28] transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {value.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-center mb-4 text-gray-900 group-hover:text-[#F8BE28] transition-colors duration-300">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    {value.description}
                  </p>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F8BE28]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        id="about-stats-section"
        data-animate
        className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#F8BE28]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center mb-20 ${
              isVisible["about-stats-section"]
                ? "animate-fade-in-up"
                : "opacity-0"
            }`}
          >
            <h2 className="text-2xl lg:text-4xl font-black text-white mb-6">
              Our <span className="text-[#F8BE28]">Achievements</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that speak for our commitment to excellence
            </p>
          </div>

          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-8 ${
              isVisible["about-stats-section"]
                ? "animate-fade-in-up animation-delay-200"
                : "opacity-0"
            }`}
          >
            <div className="premium-stat-card group">
              <div className="premium-stat-card-inner">
                <Counter target={5} suffix="+" />
                <p className="text-[#F8BE28] font-bold mt-4 text-lg">Years</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  of leading Innovation in IT Services
                </p>
              </div>
            </div>

            <div className="premium-stat-card group">
              <div className="premium-stat-card-inner">
                <Counter target={100} suffix="+" />
                <p className="text-[#F8BE28] font-bold mt-4 text-lg">
                  Projects
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Successfully delivered with excellence
                </p>
              </div>
            </div>

            <div className="premium-stat-card group">
              <div className="premium-stat-card-inner">
                <Counter target={20} suffix="+" />
                <p className="text-[#F8BE28] font-bold mt-4 text-lg">Awards</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Recognizing Excellence in Innovation and Service
                </p>
              </div>
            </div>

            <div className="premium-stat-card group">
              <div className="premium-stat-card-inner">
                <Counter target={99} suffix="%" />
                <p className="text-[#F8BE28] font-bold mt-4 text-lg">Success</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Driving Excellence and Achievement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section
        id="story-section"
        data-animate
        className="py-32 bg-white relative overflow-hidden"
      >
        {/* Background Pattern */}
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div
              className={`space-y-8 ${
                isVisible["story-section"]
                  ? "animate-slide-in-left"
                  : "opacity-0"
              }`}
            >
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-1 bg-[#F8BE28] mr-4"></div>
                  <h2 className="text-[#F8BE28] text-xl font-bold uppercase tracking-wider">
                    Our Story
                  </h2>
                </div>
                <h3 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                  Driving{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8BE28] to-yellow-600">
                    Business Success
                  </span>{" "}
                  Through Innovation
                </h3>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p className="transform transition-all duration-700 hover:translate-x-2">
                  MindVista is a dynamic IT services company dedicated to
                  transforming businesses through innovative digital solutions.
                  We specialize in enhancing business operations by leveraging
                  cutting-edge technologies and creative strategies.
                </p>
                <p className="transform transition-all duration-700 hover:translate-x-2">
                  Our team of experts is committed to delivering high-quality
                  services that drive efficiency and success for our clients.
                  With more than 100 satisfied clients, we take pride in our
                  ability to consistently meet and exceed expectations.
                </p>
                <p className="transform transition-all duration-700 hover:translate-x-2">
                  Our holistic approach ensures that each solution is tailored
                  to meet the unique needs of our clients, helping them navigate
                  the ever-evolving digital landscape with confidence and
                  agility.
                </p>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#F8BE28]/20 to-transparent rounded-2xl transform rotate-1"></div>
                <div className="relative bg-gradient-to-r from-[#F8BE28]/10 to-transparent p-8 rounded-2xl border-l-4 border-[#F8BE28] backdrop-blur-sm">
                  <p className="text-gray-800 font-semibold text-lg leading-relaxed">
                    Partner with MindVista to unlock your business's full
                    potential and achieve unparalleled success in today's
                    competitive market.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Images Grid */}
            <div
              className={`grid grid-cols-2 gap-6 ${
                isVisible["story-section"]
                  ? "animate-slide-in-right"
                  : "opacity-0"
              }`}
            >
              <div className="space-y-6">
                <div className="image-card-revolutionary group">
                  <img
                    src="/images/about/computer-2565478_1920.jpg"
                    alt="Technology Solutions"
                    className="w-full h-64 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="image-card-revolutionary group">
                  <img
                    src="/images/about/phone-2386192_1920.jpg"
                    alt="Mobile Solutions"
                    className="w-full h-48 object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="image-card-revolutionary group">
                  <img
                    src="/images/about/startup-594090_1920.jpg"
                    alt="Innovation Hub"
                    className="w-full h-48 object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="image-card-revolutionary group">
                  <img
                    src="/images/home/bannerimage.png"
                    alt="Business Growth"
                    className="w-full h-64 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code of Conduct Section */}
      <section
        id="code-section"
        data-animate
        className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#F8BE28]/5"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`max-w-4xl mx-auto text-center ${
              isVisible["code-section"] ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="inline-block mb-8">
              <span className="bg-[#F8BE28] text-black px-8 py-3 rounded-full text-sm font-bold tracking-wide uppercase shadow-lg">
                Code of Conduct
              </span>
            </div>
            <h2 className="text-2xl lg:text-4xl font-black text-white mb-8">
              Our Code of <span className="text-[#F8BE28]">Business Principles</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              MindVista prioritizes legal and ethical conduct, ensuring honesty, fairness, and accountability for all. We are committed to maintaining the highest standards of integrity in all our business relationships and operations.
            </p>
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border-2 border-[#F8BE28]/20 hover:border-[#F8BE28]/40 transition-all duration-500">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F8BE28] to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Honesty</h3>
                  <p className="text-gray-400 text-sm">Transparent communication</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F8BE28] to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Fairness</h3>
                  <p className="text-gray-400 text-sm">Equal treatment for all</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F8BE28] to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Accountability</h3>
                  <p className="text-gray-400 text-sm">Taking responsibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="about-cta"
        data-animate
        className="py-32 bg-gradient-to-br from-gray-50 via-white to-yellow-50/30 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#F8BE28]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div
            className={`${
              isVisible["about-cta"] ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
              <h2 className="text-2xl lg:text-4xl font-black text-gray-900 mb-8">
              Ready to <span className="text-[#F8BE28]">Transform</span> Your
              Business?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Connect with us to explore how we can deliver exceptional IT solutions tailored to your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative px-12 py-6 bg-gradient-to-r from-[#F8BE28] to-yellow-400 text-black font-bold text-xl rounded-full overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-[#F8BE28]/50"
              >
                <span className="relative z-10 flex items-center">
                  Get in Touch
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

              <Link
                to="/services"
                className="group relative px-12 py-6 border-2 border-[#F8BE28] text-[#F8BE28] font-bold text-xl rounded-full overflow-hidden transition-all duration-500 hover:scale-110 backdrop-blur-sm bg-white/5"
              >
                <span className="relative z-10 group-hover:text-gray-900 transition-colors duration-300 flex items-center">
                  Our Services
                  <svg
                    className="ml-2 w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-[#F8BE28] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
