import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

const Layout = ({ children }) => {
  const location = useLocation()
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef(null)

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact Us' },
  ]

  const serviceLinks = [
    { path: '/services/web-design', label: 'Web Design' },
    { path: '/services/web-development', label: 'Web Development' },
    { path: '/services/app-development', label: 'App Development' },
    { path: '/services/branding', label: 'Branding' },
    { path: '/services/seo', label: 'SEO Optimization' },
    { path: '/services/content-writing', label: 'Content Writing' },
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Close dropdown when route changes
  useEffect(() => {
    setIsServicesOpen(false)
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-[#F8BE28] to-yellow-400 rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <span className="text-black font-black text-xl">M</span>
                </div>
                <span className="text-2xl font-black text-gray-900 group-hover:text-[#F8BE28] transition-colors duration-300">
                  MINDVISTA
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                    isActive(link.path)
                      ? 'text-[#F8BE28]'
                      : 'text-gray-700 hover:text-[#F8BE28]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`px-4 py-2 text-sm font-semibold transition-colors duration-300 flex items-center space-x-1 ${
                    isActive('/services')
                      ? 'text-[#F8BE28]'
                      : 'text-gray-700 hover:text-[#F8BE28]'
                  }`}
                >
                  <span>Services</span>
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-300 ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-2xl overflow-hidden animate-fade-in">
                    <div className="py-2">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className={`block px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-[#F8BE28] hover:text-black ${
                            isActive(service.path)
                              ? 'bg-[#F8BE28]/20 text-[#F8BE28]'
                              : 'text-gray-700'
                          }`}
                        >
                          {service.label}
                        </Link>
                      ))}
                      <Link
                        to="/services"
                        className="block px-6 py-3 text-sm font-medium text-[#F8BE28] hover:bg-[#F8BE28] hover:text-black transition-all duration-300 border-t border-gray-200"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Icons */}
              <div className="flex items-center space-x-4 ml-4">
                <a
                  href="mailto:info@mindvista.com"
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg text-gray-700 hover:bg-[#F8BE28] hover:border-[#F8BE28] hover:text-black transition-all duration-300"
                  aria-label="Email"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
                <a
                  href="tel:+1234567890"
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg text-gray-700 hover:bg-[#F8BE28] hover:border-[#F8BE28] hover:text-black transition-all duration-300"
                  aria-label="Phone"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <a
                href="mailto:info@mindvista.com"
                className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg text-gray-700"
                aria-label="Email"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
                aria-label="Main menu"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4 animate-fade-in bg-white">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive(link.path)
                      ? 'text-[#F8BE28] bg-yellow-50'
                      : 'text-gray-700 hover:text-[#F8BE28] hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 py-2">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-sm font-semibold transition-colors rounded-lg ${
                    isActive('/services')
                      ? 'text-[#F8BE28] bg-yellow-50'
                      : 'text-gray-700 hover:text-[#F8BE28] hover:bg-gray-50'
                  }`}
                >
                  <span>Services</span>
                  <svg
                    className={`w-4 h-4 transform transition-transform ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                          isActive(service.path)
                            ? 'text-[#F8BE28] bg-yellow-50'
                            : 'text-gray-600 hover:text-[#F8BE28] hover:bg-gray-50'
                        }`}
                      >
                        {service.label}
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-sm text-[#F8BE28] hover:bg-gray-50 rounded-lg"
                    >
                      View All Services →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-50 via-white to-yellow-50/30 text-gray-900 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-black text-[#F8BE28] mb-4">MINDVISTA</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your comprehensive solution for online business. Creating innovative solutions to make business operations more efficient.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link to="/" className="hover:text-[#F8BE28] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#F8BE28] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-[#F8BE28] transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="hover:text-[#F8BE28] transition-colors">
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {serviceLinks.map((service) => (
                  <li key={service.path}>
                    <Link
                      to={service.path}
                      className="hover:text-[#F8BE28] transition-colors"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a
                    href="mailto:info@mindvista.com"
                    className="hover:text-[#F8BE28] transition-colors flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@mindvista.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+1234567890"
                    className="hover:text-[#F8BE28] transition-colors flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+1 (234) 567-890</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} MindVista. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
