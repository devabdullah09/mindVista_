import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import WhatsAppButton from './WhatsAppButton'

const Layout = ({ children }) => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-white">
      {/* Professional Navigation */}
      <nav className="font-header bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center group">
                <img
                  src="/images/logo.png"
                  alt="MindVista Logo"
                  className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    const fallback = e.target.nextSibling
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />
                <div className="hidden items-center space-x-3">
                  <div className="w-10 h-10 bg-[#F8BE28] rounded-lg flex items-center justify-center">
                    <span className="text-white font-black text-xl">M</span>
                  </div>
                  <span className="text-2xl font-black text-gray-900">MINDVISTA</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-base font-bold rounded-lg transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-gray-900 bg-[#F8BE28]/10'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#F8BE28] rounded-full"></div>
                  )}
                </Link>
              ))}

              <Link
                to="/services"
                className={`relative px-4 py-2 text-base font-bold rounded-lg transition-all duration-200 ${
                  isActive('/services')
                    ? 'text-gray-900 bg-[#F8BE28]/10'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Services
                {isActive('/services') && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#F8BE28] rounded-full"></div>
                )}
              </Link>
            </div>

            {/* Contact Actions */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="mailto:business@mindvista.tech"
                className="p-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
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
                href="tel:+923098391932"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F8BE28] hover:bg-[#e6a821] text-gray-900 font-bold text-base rounded-lg transition-colors duration-200"
                aria-label="Phone"
              >
                <svg
                  className="w-4 h-4"
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
                <span>Call Us</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <a
                href="mailto:business@mindvista.tech"
                className="p-2.5 text-gray-600 hover:bg-gray-50 rounded-lg"
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
                className="p-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
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
            <div className="md:hidden border-t border-gray-100 py-4 animate-fade-in">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-2.5 text-base font-bold rounded-lg transition-colors ${
                      isActive(link.path)
                        ? 'text-gray-900 bg-[#F8BE28]/10'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/services"
                  className={`block px-4 py-2.5 text-base font-bold rounded-lg transition-colors ${
                    isActive('/services')
                      ? 'text-gray-900 bg-[#F8BE28]/10'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  Services
                </Link>

                <div className="pt-4 px-4">
                  <a
                    href="tel:+923098391932"
                    className="block w-full py-2.5 bg-[#F8BE28] hover:bg-[#e6a821] text-gray-900 font-bold text-base text-center rounded-lg transition-colors"
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-50 via-white to-yellow-50/30 text-gray-900 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-4 gap-6 mb-6">
            <div>
              <Link to="/" className="flex items-center mb-3">
                <img
                  src="/images/logo.png"
                  alt="MindVista Logo"
                  className="h-10 w-auto"
                  onError={(e) => {
                    // Fallback to text logo if image fails
                    e.target.style.display = 'none'
                    const fallback = e.target.nextSibling
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />
                <div className="hidden items-center space-x-2">
                  <div className="w-8 h-8 bg-[#F8BE28] rounded-lg flex items-center justify-center">
                    <span className="text-white font-black text-sm">M</span>
                  </div>
                  <h3 className="text-lg font-black text-[#F8BE28]">MINDVISTA</h3>
                </div>
              </Link>
              <p className="text-gray-600 text-xs leading-relaxed">
                Your comprehensive solution for online business. Creating innovative solutions to make business operations more efficient.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-3 text-sm">Quick Links</h4>
              <ul className="space-y-1.5 text-xs text-gray-600">
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
              <h4 className="font-bold text-gray-900 mb-3 text-sm">Services</h4>
              <ul className="space-y-1.5 text-xs text-gray-600">
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
              <h4 className="font-bold text-gray-900 mb-3 text-sm">Contact</h4>
              <ul className="space-y-2 text-xs text-gray-600">
                <li>
                  <a
                    href="mailto:business@mindvista.tech"
                    className="hover:text-[#F8BE28] transition-colors flex items-start space-x-2"
                  >
                    <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>business@mindvista.tech</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+923098391932"
                    className="hover:text-[#F8BE28] transition-colors flex items-start space-x-2"
                  >
                    <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+92-309-8391932</span>
                  </a>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>89 C, Punjab Housing Society Lahore</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4 text-center text-xs text-gray-600">
            <p>© {new Date().getFullYear()} MindVista. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  )
}

export default Layout
