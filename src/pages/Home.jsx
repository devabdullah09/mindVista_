import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Advanced Counter with easing animation
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
      className="font-bold text-4xl lg:text-6xl text-white drop-shadow-lg"
    >
      {count}
      {suffix}
    </span>
  );
};

// Floating Animation Component
const FloatingElement = ({ children, delay = 0, amplitude = 20 }) => {
  return (
    <div
      className="floating-element"
      style={{
        animationDelay: `${delay}s`,
        "--amplitude": `${amplitude}px`,
      }}
    >
      {children}
    </div>
  );
};

// Revolutionary 3D Testimonial Card with Morphing Effects
const TestimonialCard = ({ testimonial, isActive, onClick, index }) => (
  <div
    className={`testimonial-morph-card cursor-pointer transition-all duration-1000 transform-gpu perspective-1000 ${
      isActive
        ? "scale-110 z-20 rotate-y-5"
        : "scale-90 opacity-60 hover:opacity-80 hover:scale-95"
    }`}
    onClick={onClick}
    style={{
      animationDelay: `${index * 0.2}s`,
      transform: `rotateY(${isActive ? "5deg" : "0deg"}) rotateX(${
        isActive ? "2deg" : "0deg"
      })`,
    }}
  >
    <div className="testimonial-card-3d bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-8 shadow-2xl border border-gray-200 h-full relative overflow-hidden group">
      {/* Animated Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8BE28]/10 via-yellow-200/5 to-[#F8BE28]/10 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F8BE28]/20 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-1000"></div>

      {/* Floating Quote Icon */}
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#F8BE28] to-yellow-400 rounded-2xl flex items-center justify-center shadow-xl transform rotate-12 group-hover:rotate-0 transition-all duration-500">
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
        </svg>
      </div>

      <div className="relative z-10">
        {/* Animated Star Rating */}
        <div className="flex items-center mb-6 justify-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-6 h-6 mx-1 transition-all duration-500 transform hover:scale-125 ${
                i < testimonial.rating
                  ? "text-[#F8BE28] fill-current"
                  : "text-gray-300"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Enhanced Quote with Typography */}
        <blockquote className="text-gray-800 text-lg leading-relaxed mb-8 text-center relative">
          <span className="text-6xl text-[#F8BE28]/20 absolute -top-6 -left-4 font-serif">
            "
          </span>
          <span className="relative z-10 italic font-light">
            {testimonial.text}
          </span>
          <span className="text-6xl text-[#F8BE28]/20 absolute -bottom-8 -right-4 font-serif transform rotate-180">
            "
          </span>
        </blockquote>

        {/* Enhanced Author Section */}
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-[#F8BE28] to-yellow-400 rounded-full p-1 shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {/* Verified Badge */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white"
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
          </div>
          <div className="ml-4 text-center">
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-[#F8BE28] transition-colors duration-300">
              {testimonial.name}
            </h4>
            <p className="text-gray-600 text-sm font-medium">
              {testimonial.position}
            </p>
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#F8BE28]/0 via-[#F8BE28]/5 to-[#F8BE28]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </div>
  </div>
);

// Particle System Component
const ParticleSystem = () => {
  const particles = Array.from({ length: 50 }, (_, i) => (
    <div
      key={i}
      className="particle"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 20}s`,
        animationDuration: `${20 + Math.random() * 20}s`,
      }}
    />
  ));

  return <div className="particle-container">{particles}</div>;
};

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isContactInView, setIsContactInView] = useState(false);
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const contactSectionRef = useRef(null);

  const testimonials = [
    {
      text: "MindVista transformed our outdated systems into a cutting-edge digital platform. Their expertise and dedication have significantly boosted our efficiency and client satisfaction. We couldn't be happier with the results!",
      name: "Jane Smith",
      position: "CEO of Tech Innovators",
      image: "/images/home/testimonial-1.png",
      rating: 5,
    },
    {
      text: "Working with MindVista has been a game-changer for our company. Their ability to understand our needs and provide tailored solutions has helped us navigate the digital landscape with confidence. Outstanding service!",
      name: "Tom Williams",
      position: "Founder of Creative Solutions",
      image: "/images/home/testimonial-2.png",
      rating: 5,
    },
    {
      text: "From the initial consultation to the final implementation, MindVista has been a pleasure to work with. Their innovative approach and professional execution have greatly improved our business efficiency. We highly recommend their services!",
      name: "Michael Brown",
      position: "Marketing Director of PrimeTech",
      image: "/images/home/testimonial-3.png",
      rating: 4,
    },
    {
      text: "MindVista exceeded our expectations at every turn. Their creative strategies and advanced technological solutions have significantly enhanced our operational efficiency. We're thrilled with the partnership and results!",
      name: "Sarah Johnson",
      position: "CEO of NextGen Solutions",
      image: "/images/home/testimonial-4.png",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

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

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Video autoplay on load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.log);
    }
  }, []);

  // Contact section scroll detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsContactInView(entry.isIntersecting);
        });
      },
      { threshold: 0.2, rootMargin: "0px" }
    );

    if (contactSectionRef.current) {
      observer.observe(contactSectionRef.current);
    }

    return () => {
      if (contactSectionRef.current) {
        observer.unobserve(contactSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Hero Section with Video Background */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
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
            <source
              src="/images/home/landingpage_herosection.mov"
              type="video/mp4"
            />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
          {/* Animated overlay patterns */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8BE28]/10 via-transparent to-blue-500/10"></div>
        </div>

        {/* Particle System */}
        <ParticleSystem />

        {/* Floating geometric shapes - simplified */}
        <div className="absolute inset-0 overflow-hidden">
          <FloatingElement delay={0} amplitude={20}>
            <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-[#F8BE28]/10 rounded-full blur-xl"></div>
          </FloatingElement>
          <FloatingElement delay={2} amplitude={15}>
            <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/5 rounded-lg rotate-45 blur-lg"></div>
          </FloatingElement>
          <FloatingElement delay={4} amplitude={25}>
            <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>
          </FloatingElement>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="hero-content">
            {/* Animated logo/brand */}
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-[#F8BE28] mb-4 tracking-wider animate-slide-down">
                MindVista
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#F8BE28] to-transparent mx-auto animate-expand"></div>
            </div>

            {/* Main headline with clean typography */}
            <div className="space-y-6 mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Your <span className="text-[#F8BE28]">Comprehensive</span>
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Solution for{" "}
                <span className="text-[#F8BE28]">Online Business</span>
              </h3>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-600">
              Creating innovative solutions to make business operations more
              efficient through cutting-edge technology and creative strategies
            </p>

            {/* CTA Buttons with advanced hover effects */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in animation-delay-800">
              <Link
                to="/contact"
                className="group relative px-10 py-3 bg-gradient-to-r from-[#F8BE28] to-yellow-400 text-gray-900 font-bold text-lg rounded-full overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-[#F8BE28]/50"
              >
                <span className="relative z-10">Book a Free Call</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-[#F8BE28] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Link>
              <Link
                to="/about"
                className="group relative px-10 py-3 border-2 border-[#F8BE28] text-[#F8BE28] font-bold text-lg rounded-full overflow-hidden transition-all duration-500 hover:scale-110 backdrop-blur-sm bg-white/10"
              >
                <span className="relative z-10 group-hover:text-gray-900 transition-colors duration-300">
                  Learn More
                </span>
                <div className="absolute inset-0 bg-[#F8BE28] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
              </Link>
            </div>

            {/* Stats Cards with clean design */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in animation-delay-1000">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  2000+
                </div>
                <div className="text-[#F8BE28] font-semibold text-sm">
                  Businesses Trust Us
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  99%
                </div>
                <div className="text-[#F8BE28] font-semibold text-sm">
                  Satisfaction Rate
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  99%
                </div>
                <div className="text-[#F8BE28] font-semibold text-sm">
                  Success Rate
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  58k+
                </div>
                <div className="text-[#F8BE28] font-semibold text-sm">
                  Clients Served
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator with pulse animation */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="scroll-indicator">
            <div className="scroll-indicator-dot"></div>
          </div>
          <p className="text-white/70 text-sm mt-2 animate-pulse">
            Scroll to explore
          </p>
        </div> */}

        {/* Parallax mouse effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            transform: `translate(${(mousePosition.x - 50) * 0.02}px, ${
              (mousePosition.y - 50) * 0.02
            }px)`,
          }}
        >
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#F8BE28] rounded-full opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-40"></div>
          <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-blue-400 rounded-full opacity-30"></div>
        </div>
      </section>

      {/* About Section with Advanced Animations */}
      <section
        id="about-section"
        data-animate
        className="py-32 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div
              className={`space-y-8 ${
                isVisible["about-section"]
                  ? "animate-slide-in-left"
                  : "opacity-0"
              }`}
            >
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-1 bg-[#F8BE28] mr-4"></div>
                  <h2 className="text-[#F8BE28] text-xl font-bold uppercase tracking-wider">
                    About Us
                  </h2>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Driving{" "}
                  <span className="text-[#F8BE28]">Business Success</span>{" "}
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

              {/* Additional CTA */}
              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 group"
                >
                  Discover Our Story
                  <svg
                    className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
                </Link>
              </div>
            </div>

            <div
              className={`grid grid-cols-2 gap-6 ${
                isVisible["about-section"]
                  ? "animate-slide-in-right"
                  : "opacity-0"
              }`}
            >
              <div className="space-y-6">
                <div className="image-card group">
                  <img
                    src="/images/home/bannerimage.png"
                    alt="Business Innovation"
                    className="w-full h-64 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="image-card group">
                  <img
                    src="/images/home/portfolio-2.png"
                    alt="Digital Transformation"
                    className="w-full h-48 object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="image-card group">
                  <img
                    src="/images/home/portfolio-1.png"
                    alt="Technology Solutions"
                    className="w-full h-48 object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="image-card group">
                  <img
                    src="/images/home/portfolio-3.png"
                    alt="Innovation Hub"
                    className="w-full h-64 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Stats Section with Video Integration */}
      <section
        id="stats-section"
        data-animate
        className="py-32 relative overflow-hidden min-h-screen flex items-center"
      >
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/home/acheivements.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
        </div>

        {/* Animated Particles Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#F8BE28] rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-yellow-300 rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-[#F8BE28]/70 rounded-full animate-bounce animation-delay-2000"></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-ping animation-delay-4000"></div>

          {/* Floating Geometric Shapes */}
          <div
            className="absolute top-1/4 left-1/5 w-8 h-8 border-2 border-[#F8BE28]/30 rotate-45 animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
          <div className="absolute bottom-1/4 right-1/5 w-6 h-6 border border-yellow-300/40 rounded-full animate-pulse animation-delay-3000"></div>
          <div className="absolute top-3/4 left-2/3 w-4 h-4 bg-[#F8BE28]/20 transform rotate-12 animate-float"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Enhanced Header */}
          <div
            className={`text-center mb-20 ${
              isVisible["stats-section"] ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="inline-block mb-8">
              <span className="bg-gradient-to-r from-[#F8BE28] to-yellow-400 text-black px-8 py-3 rounded-full text-sm font-bold tracking-wide uppercase shadow-2xl">
                🏆 Our Impact 🏆
              </span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8BE28] via-yellow-300 to-[#F8BE28] animate-gradient-text">
                Achievement
              </span>{" "}
              Numbers
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Delivering excellence through innovation, one project at a time
              with{" "}
              <span className="text-[#F8BE28] font-semibold">
                measurable results
              </span>
            </p>
          </div>

          {/* Revolutionary Stats Grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 ${
              isVisible["stats-section"]
                ? "animate-fade-in-up animation-delay-200"
                : "opacity-0"
            }`}
          >
            {/* Years Card */}
            <div
              className="stats-card-revolutionary group"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="stats-card-inner">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F8BE28]/10 via-yellow-300/5 to-[#F8BE28]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                {/* Floating Icon */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#F8BE28] to-yellow-400 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-12 group-hover:rotate-0 transition-all duration-500">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>

                <div className="relative z-10 text-center">
                  <div className="mb-6">
                    <Counter
                      target={5}
                      suffix="+"
                      className="text-6xl lg:text-7xl font-black text-white group-hover:text-[#F8BE28] transition-colors duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#F8BE28] mb-3 group-hover:scale-110 transition-transform duration-300">
                    Years
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    of leading Innovation in IT Services
                  </p>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#F8BE28]/20 via-yellow-300/20 to-[#F8BE28]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>
            </div>

            {/* Projects Card */}
            <div
              className="stats-card-revolutionary group"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="stats-card-inner">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F8BE28]/10 via-yellow-300/5 to-[#F8BE28]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#F8BE28] to-yellow-400 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-12 group-hover:rotate-0 transition-all duration-500">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                </div>

                <div className="relative z-10 text-center">
                  <div className="mb-6">
                    <Counter
                      target={100}
                      suffix="+"
                      className="text-6xl lg:text-7xl font-black text-white group-hover:text-[#F8BE28] transition-colors duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#F8BE28] mb-3 group-hover:scale-110 transition-transform duration-300">
                    Projects
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    Successfully delivered with excellence
                  </p>
                </div>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#F8BE28]/20 via-yellow-300/20 to-[#F8BE28]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>
            </div>

            {/* Awards Card */}
            <div
              className="stats-card-revolutionary group"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="stats-card-inner">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F8BE28]/10 via-yellow-300/5 to-[#F8BE28]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#F8BE28] to-yellow-400 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-12 group-hover:rotate-0 transition-all duration-500">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>

                <div className="relative z-10 text-center">
                  <div className="mb-6">
                    <Counter
                      target={20}
                      suffix="+"
                      className="text-6xl lg:text-7xl font-black text-white group-hover:text-[#F8BE28] transition-colors duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#F8BE28] mb-3 group-hover:scale-110 transition-transform duration-300">
                    Awards
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    Recognizing Excellence in Innovation
                  </p>
                </div>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#F8BE28]/20 via-yellow-300/20 to-[#F8BE28]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>
            </div>

            {/* Success Card */}
            <div
              className="stats-card-revolutionary group"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="stats-card-inner">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F8BE28]/10 via-yellow-300/5 to-[#F8BE28]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#F8BE28] to-yellow-400 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-12 group-hover:rotate-0 transition-all duration-500">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>

                <div className="relative z-10 text-center">
                  <div className="mb-6">
                    <Counter
                      target={99}
                      suffix="%"
                      className="text-6xl lg:text-7xl font-black text-white group-hover:text-[#F8BE28] transition-colors duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#F8BE28] mb-3 group-hover:scale-110 transition-transform duration-300">
                    Success
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    Driving Excellence and Achievement
                  </p>
                </div>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#F8BE28]/20 via-yellow-300/20 to-[#F8BE28]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div
            className={`text-center mt-20 ${
              isVisible["stats-section"]
                ? "animate-fade-in-up animation-delay-600"
                : "opacity-0"
            }`}
          >
            <p className="text-lg text-gray-200 mb-8">
              Ready to become our next success story?
            </p>
            <button className="bg-gradient-to-r from-[#F8BE28] to-yellow-400 text-black px-12 py-4 rounded-full font-bold text-lg hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-[#F8BE28]/50">
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Services Section with Interactive Design */}
      <section
        id="services-section"
        data-animate
        className="py-32 bg-white relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, #F8BE28 2px, transparent 2px),
                               radial-gradient(circle at 80% 50%, #000 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div
            className={`text-center mb-20 ${
              isVisible["services-section"] ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#F8BE28]">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At MindVista, we offer a comprehensive range of IT services
              designed to meet the unique needs of our clients. Our expert team
              leverages the latest technologies and creative strategies to
              deliver high-quality solutions that drive efficiency and success.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Web Designing */}
            <div
              className={`service-card group ${
                isVisible["services-section"]
                  ? "animate-slide-in-left"
                  : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="service-card-inner bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{
                    backgroundImage:
                      "url('/images/home/services/web-design-3411373_1920.jpg')",
                  }}
                ></div>

                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10 p-8">
                  <div className="w-12 h-12 mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-[#F8BE28]/10 rounded-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                    <div className="relative w-full h-full bg-[#F8BE28] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-white transition-colors duration-300">
                    Web Designing
                  </h3>

                  <p className="text-gray-600 group-hover:text-gray-200 leading-relaxed text-center mb-6 transition-colors duration-300">
                    Crafting visually stunning and user-friendly websites that
                    captivate and engage visitors. Our designs are tailored to
                    reflect your brand identity while ensuring an optimal user
                    experience.
                  </p>

                  <div className="text-center">
                    <button className="service-btn group-hover:bg-[#F8BE28] group-hover:text-black bg-transparent border-2 border-[#F8BE28] text-[#F8BE28] px-6 py-2 rounded-full font-semibold transition-all duration-300 transform group-hover:scale-105">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Web Development */}
            <div
              className={`service-card group ${
                isVisible["services-section"]
                  ? "animate-slide-in-up"
                  : "opacity-0"
              }`}
              style={{ animationDelay: "0.4s" }}
            >
              <div className="service-card-inner bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{
                    backgroundImage:
                      "url('/images/home/services/web-3157323_1280.jpg')",
                  }}
                ></div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 p-8">
                  <div className="w-12 h-12 mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-[#F8BE28]/10 rounded-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                    <div className="relative w-full h-full bg-[#F8BE28] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <svg
                        className="w-8 h-8 text-white"
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
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-white transition-colors duration-300">
                    Web Development
                  </h3>

                  <p className="text-gray-600 group-hover:text-gray-200 leading-relaxed text-center mb-6 transition-colors duration-300">
                    Building robust and scalable websites using the latest
                    technologies to ensure optimal performance. Our development
                    services include everything from custom website creation to
                    e-commerce solutions and web applications.
                  </p>

                  <div className="text-center">
                    <button className="service-btn group-hover:bg-[#F8BE28] group-hover:text-black bg-transparent border-2 border-[#F8BE28] text-[#F8BE28] px-6 py-2 rounded-full font-semibold transition-all duration-300 transform group-hover:scale-105">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Apps Development */}
            <div
              className={`service-card group ${
                isVisible["services-section"]
                  ? "animate-slide-in-right"
                  : "opacity-0"
              }`}
              style={{ animationDelay: "0.6s" }}
            >
              <div className="service-card-inner bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{
                    backgroundImage:
                      "url('/images/home/services/mobile-app-development-company-8379091_1920.png')",
                  }}
                ></div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 p-8">
                  <div className="w-12 h-12 mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-[#F8BE28]/10 rounded-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                    <div className="relative w-full h-full bg-[#F8BE28] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-white transition-colors duration-300">
                    Mobile Apps Development
                  </h3>

                  <p className="text-gray-600 group-hover:text-gray-200 leading-relaxed text-center mb-6 transition-colors duration-300">
                    Developing intuitive and high-performing mobile applications
                    for both iOS and Android platforms. We focus on creating
                    apps that offer seamless functionality and an engaging user
                    experience.
                  </p>

                  <div className="text-center">
                    <button className="service-btn group-hover:bg-[#F8BE28] group-hover:text-black bg-transparent border-2 border-[#F8BE28] text-[#F8BE28] px-6 py-2 rounded-full font-semibold transition-all duration-300 transform group-hover:scale-105">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Branding */}
            <div
              className={`service-card group ${
                isVisible["services-section"]
                  ? "animate-slide-in-left"
                  : "opacity-0"
              }`}
              style={{ animationDelay: "0.8s" }}
            >
              <div className="service-card-inner bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{
                    backgroundImage:
                      "url('/images/home/services/branding.png')",
                  }}
                ></div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 p-8">
                  <div className="w-12 h-12 mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-[#F8BE28]/10 rounded-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                    <div className="relative w-full h-full bg-[#F8BE28] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-white transition-colors duration-300">
                    Branding
                  </h3>

                  <p className="text-gray-600 group-hover:text-gray-200 leading-relaxed text-center mb-6 transition-colors duration-300">
                    We specialize in creating compelling branding strategies
                    that leave a lasting impression and resonate with your
                    audience. From visual identity to brand positioning, we'll
                    help you establish a brand that speaks for itself.
                  </p>

                  <div className="text-center">
                    <button className="service-btn group-hover:bg-[#F8BE28] group-hover:text-black bg-transparent border-2 border-[#F8BE28] text-[#F8BE28] px-6 py-2 rounded-full font-semibold transition-all duration-300 transform group-hover:scale-105">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* SEO Optimization */}
            <div
              className={`service-card group ${
                isVisible["services-section"]
                  ? "animate-slide-in-up"
                  : "opacity-0"
              }`}
              style={{ animationDelay: "1s" }}
            >
              <div className="service-card-inner bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{
                    backgroundImage:
                      "url('/images/home/services/seo-7092114_1920.png')",
                  }}
                ></div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 p-8">
                  <div className="w-12 h-12 mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-[#F8BE28]/10 rounded-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                    <div className="relative w-full h-full bg-[#F8BE28] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <svg
                        className="w-8 h-8 text-white"
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
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-white transition-colors duration-300">
                    SEO Optimization
                  </h3>

                  <p className="text-gray-600 group-hover:text-gray-200 leading-relaxed text-center mb-6 transition-colors duration-300">
                    Enhancing online visibility and search engine rankings to
                    attract more organic traffic. Our SEO strategies are
                    designed to improve your website's performance and help you
                    reach a larger audience.
                  </p>

                  <div className="text-center">
                    <button className="service-btn group-hover:bg-[#F8BE28] group-hover:text-black bg-transparent border-2 border-[#F8BE28] text-[#F8BE28] px-6 py-2 rounded-full font-semibold transition-all duration-300 transform group-hover:scale-105">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Writing */}
            <div
              className={`service-card group ${
                isVisible["services-section"]
                  ? "animate-slide-in-right"
                  : "opacity-0"
              }`}
              style={{ animationDelay: "1.2s" }}
            >
              <div className="service-card-inner bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{
                    backgroundImage: "url('/images/home/services/content.jpg')",
                  }}
                ></div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 p-8">
                  <div className="w-12 h-12 mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-[#F8BE28]/10 rounded-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                    <div className="relative w-full h-full bg-[#F8BE28] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-white transition-colors duration-300">
                    Content Writing
                  </h3>

                  <p className="text-gray-600 group-hover:text-gray-200 leading-relaxed text-center mb-6 transition-colors duration-300">
                    Producing compelling and relevant content that resonates
                    with your target audience. Our content writing services
                    cover everything from website copy to blog posts and social
                    media content.
                  </p>

                  <div className="text-center">
                    <button className="service-btn group-hover:bg-[#F8BE28] group-hover:text-black bg-transparent border-2 border-[#F8BE28] text-[#F8BE28] px-6 py-2 rounded-full font-semibold transition-all duration-300 transform group-hover:scale-105">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div
            className={`text-center ${
              isVisible["services-section"] ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "1.4s" }}
          >
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#F8BE28] to-yellow-400 text-gray-900 font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              Explore All Services
              <svg
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
            </Link>
          </div>
        </div>
      </section>

      {/* Revolutionary Testimonials Experience */}
      <section
        id="testimonials-section"
        data-animate
        className="py-32 bg-gradient-to-br from-gray-50 via-white to-yellow-50/30 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#F8BE28]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#F8BE28]/3 to-transparent rounded-full animate-spin"
            style={{ animationDuration: "120s" }}
          ></div>

          {/* Floating Geometric Shapes */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-[#F8BE28]/20 rounded-lg transform rotate-45 animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-yellow-300/30 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-[#F8BE28]/15 transform rotate-12 animate-float animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Enhanced Header */}
          <div
            className={`text-center mb-20 ${
              isVisible["testimonials-section"]
                ? "animate-fade-in-up"
                : "opacity-0"
            }`}
          >
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-[#F8BE28] to-yellow-400 text-white px-8 py-3 rounded-full text-sm font-bold tracking-wide uppercase shadow-lg">
                ⭐ Success Stories ⭐
              </span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Client{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8BE28] via-yellow-400 to-[#F8BE28] animate-gradient-text">
                Testimonials
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it - see what actual users of our
              service have to say about their{" "}
              <span className="text-[#F8BE28] font-semibold">
                transformative experience
              </span>{" "}
              with MindVista
            </p>
          </div>

          {/* Main Featured Testimonial */}
          <div className="mb-20">
            <div
              className={`max-w-5xl mx-auto ${
                isVisible["testimonials-section"]
                  ? "animate-fade-in-up animation-delay-200"
                  : "opacity-0"
              }`}
            >
              <div className="testimonial-spotlight bg-white/90 backdrop-blur-xl p-12 lg:p-16 rounded-3xl shadow-2xl border border-white/50 relative overflow-hidden group">
                {/* Animated Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F8BE28]/20 via-yellow-300/20 to-[#F8BE28]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                <div className="absolute inset-[2px] bg-white/95 rounded-3xl"></div>

                {/* Floating Elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-[#F8BE28] to-yellow-400 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-12 group-hover:rotate-0 transition-all duration-700">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>

                <div className="relative z-10">
                  {/* Animated Star Rating */}
                  <div className="flex justify-center mb-8">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-10 h-10 text-[#F8BE28] fill-current mx-2 transform hover:scale-125 transition-all duration-300"
                        style={{ animationDelay: `${i * 0.1}s` }}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Featured Quote */}
                  <blockquote className="text-3xl lg:text-4xl text-gray-800 leading-relaxed text-center mb-12 font-light italic">
                    "{testimonials[activeTestimonial].text}"
                  </blockquote>

                  {/* Featured Author */}
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-br from-[#F8BE28] to-yellow-400 rounded-full p-1 shadow-2xl">
                        <img
                          src={testimonials[activeTestimonial].image}
                          alt={testimonials[activeTestimonial].name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                        <svg
                          className="w-5 h-5 text-white"
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
                    </div>
                    <div className="ml-8 text-left">
                      <h4 className="text-3xl font-bold text-gray-900 mb-2">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-xl text-gray-600">
                        {testimonials[activeTestimonial].position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Navigation Dots */}
          <div className="flex justify-center space-x-6 mb-16">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`relative group transition-all duration-500 ${
                  index === activeTestimonial ? "scale-125" : "hover:scale-110"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? "bg-[#F8BE28] shadow-lg shadow-[#F8BE28]/50"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                ></div>
                {index === activeTestimonial && (
                  <div className="absolute inset-0 w-6 h-6 bg-[#F8BE28] rounded-full animate-ping"></div>
                )}
              </button>
            ))}
          </div>

          {/* Testimonial Cards Grid */}
          <div
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 ${
              isVisible["testimonials-section"]
                ? "animate-fade-in-up animation-delay-400"
                : "opacity-0"
            }`}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                isActive={index === activeTestimonial}
                onClick={() => setActiveTestimonial(index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section with Infinite Scroll */}
      <section
        id="partners-section"
        data-animate
        className="py-32 bg-[#151515] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-20 ${
              isVisible["partners-section"] ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              We Work With the{" "}
              <span className="text-[#F8BE28]">Best Partners</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Collaborating with Industry Leaders for Unmatched Quality and
              Innovation
            </p>
          </div>

          {/* Enhanced Scrolling Partners */}
          <div className="relative overflow-hidden py-12">
            <div className="flex animate-scroll-smooth">
              {/* First set of logos */}
              <div className="flex-shrink-0 mx-8">
                <img
                  src="/images/home/logos/amazon-logo.png"
                  alt="Amazon"
                  className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="flex-shrink-0 mx-8">
                <img
                  src="/images/home/logos/google-logo.png"
                  alt="Google"
                  className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="flex-shrink-0 mx-8">
                <img
                  src="/images/home/logos/microsoft-logo.png"
                  alt="Microsoft"
                  className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="flex-shrink-0 mx-8">
                <img
                  src="/images/home/logos/stripe-logo.png"
                  alt="Stripe"
                  className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="flex-shrink-0 mx-8">
                <img
                  src="/images/home/logos/shopify-logo.png"
                  alt="Shopify"
                  className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="flex-shrink-0 mx-8">
                <img
                  src="/images/home/logos/coursera-logo.png"
                  alt="Coursera"
                  className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="flex-shrink-0 mx-8">
                <img
                  src="/images/home/logos/wordpress.png"
                  alt="WordPress"
                  className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="flex-shrink-0 mx-8">
                <img
                  src="/images/home/logos/bootstrap.png"
                  alt="Bootstrap"
                  className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Duplicate set for seamless scrolling */}
              <div className="flex-shrink-0 mx-8">
                <img
                  src="/images/home/logos/amazon-logo.png"
                  alt="Amazon"
                  className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="flex-shrink-0 mx-8">
                <img
                  src="/images/home/logos/google-logo.png"
                  alt="Google"
                  className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="flex-shrink-0 mx-8">
                <img
                  src="/images/home/logos/microsoft-logo.png"
                  alt="Microsoft"
                  className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="flex-shrink-0 mx-8">
                <img
                  src="/images/home/logos/stripe-logo.png"
                  alt="Stripe"
                  className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="flex-shrink-0 mx-8">
                <img
                  src="/images/home/logos/shopify-logo.png"
                  alt="Shopify"
                  className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="flex-shrink-0 mx-8">
                <img
                  src="/images/home/logos/coursera-logo.png"
                  alt="Coursera"
                  className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="flex-shrink-0 mx-8">
                <img
                  src="/images/home/logos/wordpress.png"
                  alt="WordPress"
                  className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="flex-shrink-0 mx-8">
                <img
                  src="/images/home/logos/bootstrap.png"
                  alt="Bootstrap"
                  className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Contact Section with Scroll-Triggered Video Split */}
      <section
        ref={contactSectionRef}
        id="cta-section"
        data-animate
        className="relative min-h-screen overflow-hidden"
      >
        {/* Video Container - Transitions from full-width to left side */}
        <div
          className={`absolute top-0 left-0 h-full transition-all duration-1000 ease-in-out ${
            isContactInView ? "w-full md:w-1/2 lg:w-1/2 z-10" : "w-full z-0"
          }`}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/home/contact.mp4" type="video/mp4" />
          </video>
          {/* Video Overlay */}
          <div
            className={`absolute inset-0 transition-all duration-1000 ${
              isContactInView ? "bg-black/40" : "bg-black/60"
            }`}
          ></div>
        </div>

        {/* Content Container - Slides in from right when scrolled */}
        <div
          className={`absolute top-0 right-0 h-full flex items-center transition-all duration-1000 ease-in-out z-20 ${
            isContactInView
              ? "w-full md:w-1/2 translate-x-0 opacity-100"
              : "w-full md:w-1/2 translate-x-full opacity-0"
          }`}
        >
          <div className="w-full px-4 sm:px-6 lg:px-12 py-20">
            <div
              className={`${
                isVisible["cta-section"] ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              {/* Header */}
              <div className="mb-12">
                <div className="inline-block mb-6">
                  <span className="bg-gradient-to-r from-[#F8BE28] to-yellow-400 text-black px-6 py-2 rounded-full text-sm font-bold tracking-wide uppercase shadow-lg">
                    Get In Touch
                  </span>
                </div>
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8BE28] via-yellow-400 to-[#F8BE28]">
                    Contact Us
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Reach Out to Elevate Your Business. Contact Us for Premium
                  Services and Tailored Solutions.
                </p>
              </div>

              {/* Enhanced Contact Form */}
              <div className="bg-white/95 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-gray-200 shadow-2xl">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div className="form-group">
                        <label className="block text-gray-900 text-left mb-2 font-semibold">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:border-[#F8BE28] focus:outline-none focus:ring-2 focus:ring-[#F8BE28]/20 transition-all duration-300"
                          placeholder="Your Name"
                        />
                      </div>

                      <div className="form-group">
                        <label className="block text-gray-900 text-left mb-2 font-semibold">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:border-[#F8BE28] focus:outline-none focus:ring-2 focus:ring-[#F8BE28]/20 transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div className="form-group">
                        <label className="block text-gray-900 text-left mb-2 font-semibold">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:border-[#F8BE28] focus:outline-none focus:ring-2 focus:ring-[#F8BE28]/20 transition-all duration-300"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="form-group">
                      <label className="block text-gray-900 text-left mb-2 font-semibold">
                        Message
                      </label>
                      <textarea
                        rows={9}
                        className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:border-[#F8BE28] focus:outline-none focus:ring-2 focus:ring-[#F8BE28]/20 transition-all duration-300 resize-none"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                  </div>

                  {/* Enhanced Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="group relative w-full bg-gradient-to-r from-[#F8BE28] to-yellow-400 text-black px-12 py-4 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        Send Message
                        <svg
                          className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#F8BE28]/10 rounded-full blur-3xl animate-pulse hidden lg:block"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-yellow-300/10 rounded-full blur-2xl animate-pulse animation-delay-2000 hidden lg:block"></div>
      </section>
    </div>
  );
};

export default Home;
