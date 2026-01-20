import { useState, useEffect, useRef } from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsTelephone } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import { HiOutlineShare } from 'react-icons/hi'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isVisible, setIsVisible] = useState(false)
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const contactRef = useRef(null)
  const formRef = useRef(null)
  const heroRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => {
      setIsFormVisible(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    const infoItems = document.querySelectorAll('.contact-info-item')
    infoItems.forEach((item) => observer.observe(item))

    return () => {
      infoItems.forEach((item) => observer.unobserve(item))
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  }

  const contactInfo = [
    {
      icon: HiOutlineLocationMarker,
      title: 'Location',
      content: '315 B, Phase 5 DHA, Lahore',
      delay: '0.1s',
    },
    {
      icon: BsTelephone,
      title: 'Phone',
      content: '+92-309-8391932',
      delay: '0.2s',
    },
    {
      icon: MdOutlineEmail,
      title: 'Email',
      content: 'mindvista100@gmail.com',
      delay: '0.3s',
    },
    {
      icon: HiOutlineShare,
      title: 'Social',
      content: 'Follow us on social media',
      delay: '0.4s',
      isSocial: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-yellow-50/20 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute w-96 h-96 bg-[#F8BE28]/5 rounded-full blur-3xl animate-float"
          style={{
            left: `${mousePosition.x * 0.5}%`,
            top: `${mousePosition.y * 0.5}%`,
            transition: 'all 0.3s ease-out',
          }}
        ></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#F8BE28]/5 rounded-full blur-3xl animate-float animation-delay-4000"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/4 left-10 w-32 h-32 border-4 border-[#F8BE28]/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-24 h-24 border-4 border-yellow-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#F8BE28]/10 rotate-12 animate-float"></div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto relative">
          {/* Decorative Elements */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-[#F8BE28]/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-tl from-yellow-400/20 to-transparent rounded-full blur-3xl"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="inline-block mb-6">
                <span className="text-sm md:text-base font-semibold text-[#F8BE28] tracking-widest uppercase px-6 py-2 bg-gradient-to-r from-[#F8BE28]/10 via-yellow-50/50 to-[#F8BE28]/10 rounded-full border border-[#F8BE28]/20 backdrop-blur-sm">
                  Get in Touch
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Contact Us
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                We're here to help and answer any questions you may have. Whether you need more details about our services, want to discuss your project, or just have a quick inquiry, feel free to reach out.
              </p>
            </div>
            
            {/* Right Side - Image */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <img
                src="/images/other/contact-image.jpg"
                alt="Contact Us"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                style={{ maxHeight: '500px' }}
                onError={(e) => {
                  e.target.src = '/images/other/contact.jpg'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={contactRef} className="relative py-12 px-4 sm:px-6 lg:px-8 pb-20 z-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            {/* Contact Information */}
            <div
              className={`flex flex-col space-y-6 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div
                    key={index}
                    className="contact-info-item contact-info-card-creative group relative bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-2xl border-2 border-gray-200/50 hover:border-[#F8BE28] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(248,190,40,0.3)] hover:-translate-y-2 overflow-hidden"
                    style={{ animationDelay: info.delay }}
                  >
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F8BE28]/0 to-yellow-400/0 group-hover:from-[#F8BE28]/10 group-hover:to-yellow-400/10 transition-opacity duration-500"></div>
                    
                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#F8BE28]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 flex items-start gap-5">
                      <div className="flex-shrink-0 relative">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-[#F8BE28] group-hover:to-yellow-400 flex items-center justify-center shadow-xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 relative overflow-hidden border-2 border-gray-200 group-hover:border-[#F8BE28]">
                          <Icon className="w-8 h-8 text-gray-700 group-hover:text-black relative z-10 transform group-hover:scale-110 transition-all duration-500" />
                        </div>
                        {/* Pulse Effect */}
                        <div className="absolute inset-0 rounded-2xl bg-[#F8BE28]/0 group-hover:bg-[#F8BE28]/20 opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
                      </div>
                      <div className="flex-1 pt-1">
                        <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-[#F8BE28] transition-colors duration-300">
                          {info.title}
                        </h3>
                        {info.isSocial ? (
                          <div className="space-y-4">
                            <p className="text-gray-600 text-sm font-medium">
                              {info.content}
                            </p>
                            <div className="flex gap-3">
                              <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link-creative group/social w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 hover:from-[#F8BE28] hover:to-yellow-400 border-2 border-gray-200 hover:border-[#F8BE28] flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-lg hover:rotate-3"
                                aria-label="Facebook"
                              >
                                <FaFacebookF className="w-5 h-5 text-gray-700 group-hover/social:text-black transition-colors duration-300" />
                              </a>
                              <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link-creative group/social w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 hover:from-[#F8BE28] hover:to-yellow-400 border-2 border-gray-200 hover:border-[#F8BE28] flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-lg hover:-rotate-3"
                                aria-label="Twitter"
                              >
                                <FaTwitter className="w-5 h-5 text-gray-700 group-hover/social:text-black transition-colors duration-300" />
                              </a>
                              <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link-creative group/social w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 hover:from-[#F8BE28] hover:to-yellow-400 border-2 border-gray-200 hover:border-[#F8BE28] flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-lg hover:rotate-3"
                                aria-label="Instagram"
                              >
                                <FaInstagram className="w-5 h-5 text-gray-700 group-hover/social:text-black transition-colors duration-300" />
                              </a>
                            </div>
                          </div>
                        ) : (
                          <a
                            href={info.title === 'Email' ? `mailto:${info.content}` : info.title === 'Phone' ? `tel:${info.content}` : '#'}
                            className="text-gray-600 text-sm leading-relaxed hover:text-[#F8BE28] transition-colors duration-300 font-medium block"
                          >
                            {info.content}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}

              {/* Contact Image */}
              <div
                className="contact-info-item mt-8 rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-200/50 hover:border-[#F8BE28] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(248,190,40,0.3)] group relative"
                style={{ animationDelay: '0.5s' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F8BE28]/0 to-yellow-400/0 group-hover:from-[#F8BE28]/20 group-hover:to-yellow-400/20 transition-all duration-500 z-10"></div>
                <img
                  src="/images/other/hero-image-2.jpg"
                  alt="Contact"
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  style={{ maxHeight: '300px' }}
                  onError={(e) => {
                    e.target.src = '/images/other/contact.jpg'
                    e.target.onerror = null
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Contact Form - Creative Design */}
            <div
              ref={formRef}
              className={`flex transition-all duration-1000 delay-400 ${
                isFormVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="contact-form-creative relative bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-gray-200/50 hover:border-[#F8BE28] transition-all duration-500 overflow-hidden w-full flex flex-col h-full">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#F8BE28]/10 to-transparent rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tl from-yellow-400/10 to-transparent rounded-full blur-3xl -z-10"></div>
                
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F8BE28]/20 to-transparent rounded-bl-full"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-1 h-12 bg-gradient-to-b from-[#F8BE28] to-yellow-400 rounded-full"></div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                      Fill Up The Form
                    </h2>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                    <div className="flex-1 space-y-6">
                    {/* Name Field */}
                    <div className="form-group-creative">
                      <label
                        htmlFor="name"
                        className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3"
                      >
                        <span className="w-2 h-2 bg-[#F8BE28] rounded-full"></span>
                        Your Name <span className="text-[#F8BE28]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="form-input-creative w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#F8BE28] focus:outline-none focus:ring-4 focus:ring-[#F8BE28]/10 transition-all duration-300 bg-white/50 backdrop-blur-sm text-gray-900 placeholder-gray-400 font-medium"
                          placeholder="Enter your name"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#F8BE28]/0 to-yellow-400/0 focus-within:from-[#F8BE28]/5 focus-within:to-yellow-400/5 transition-all duration-300 pointer-events-none"></div>
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="form-group-creative">
                      <label
                        htmlFor="email"
                        className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3"
                      >
                        <span className="w-2 h-2 bg-[#F8BE28] rounded-full"></span>
                        Email Address <span className="text-[#F8BE28]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="form-input-creative w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#F8BE28] focus:outline-none focus:ring-4 focus:ring-[#F8BE28]/10 transition-all duration-300 bg-white/50 backdrop-blur-sm text-gray-900 placeholder-gray-400 font-medium"
                          placeholder="Enter your email"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#F8BE28]/0 to-yellow-400/0 focus-within:from-[#F8BE28]/5 focus-within:to-yellow-400/5 transition-all duration-300 pointer-events-none"></div>
                      </div>
                    </div>

                    {/* Phone Field */}
                    <div className="form-group-creative">
                      <label
                        htmlFor="phone"
                        className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3"
                      >
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        Phone Number
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="form-input-creative w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#F8BE28] focus:outline-none focus:ring-4 focus:ring-[#F8BE28]/10 transition-all duration-300 bg-white/50 backdrop-blur-sm text-gray-900 placeholder-gray-400 font-medium"
                          placeholder="Enter your phone number"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#F8BE28]/0 to-yellow-400/0 focus-within:from-[#F8BE28]/5 focus-within:to-yellow-400/5 transition-all duration-300 pointer-events-none"></div>
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="form-group-creative">
                      <label
                        htmlFor="message"
                        className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3"
                      >
                        <span className="w-2 h-2 bg-[#F8BE28] rounded-full"></span>
                        Message <span className="text-[#F8BE28]">*</span>
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="form-input-creative w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#F8BE28] focus:outline-none focus:ring-4 focus:ring-[#F8BE28]/10 transition-all duration-300 bg-white/50 backdrop-blur-sm text-gray-900 placeholder-gray-400 resize-none font-medium"
                          placeholder="Enter your message here"
                        ></textarea>
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#F8BE28]/0 to-yellow-400/0 focus-within:from-[#F8BE28]/5 focus-within:to-yellow-400/5 transition-all duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-auto pt-4">
                    <button
                      type="submit"
                      className="contact-submit-button w-full bg-gradient-to-r from-[#F8BE28] via-yellow-500 to-[#F8BE28] hover:from-yellow-500 hover:via-[#F8BE28] hover:to-yellow-500 text-black font-black py-5 px-8 rounded-2xl transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-3 group relative overflow-hidden"
                    >
                      <span className="relative z-10">Get in Touch</span>
                      <svg
                        className="w-6 h-6 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300 relative z-10"
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
                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
