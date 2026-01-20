import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { projectData, tagColors } from '../data/portfolioData'
import { CiMobile4 } from 'react-icons/ci'
import { FaLaptopCode } from 'react-icons/fa'
import { SiHiveBlockchain } from 'react-icons/si'
import { MdDesignServices } from 'react-icons/md'

const categories = [
  { id: 'web-app', label: 'Web Application', icon: FaLaptopCode, dataKey: 'web', color: 'from-blue-500 to-cyan-500' },
  { id: 'mobile-app', label: 'Mobile Application', icon: CiMobile4, dataKey: 'app', color: 'from-purple-500 to-pink-500' },
  { id: 'admin-panel', label: 'Admin Panel', icon: FaLaptopCode, dataKey: 'web', color: 'from-green-500 to-emerald-500' },
  { id: 'ui-ux', label: 'UI/UX Designing', icon: MdDesignServices, dataKey: 'blockchain', color: 'from-orange-500 to-yellow-500' },
]

const Portfolio = () => {
  const navigate = useNavigate()
  const [selectedCategoryId, setSelectedCategoryId] = useState('mobile-app')
  const [selectedDataKey, setSelectedDataKey] = useState('app')
  const [isVisible, setIsVisible] = useState(false)
  const [projectsVisible, setProjectsVisible] = useState(false)
  const heroRef = useRef(null)
  const projectsRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    setProjectsVisible(false)
    const timer = setTimeout(() => {
      setProjectsVisible(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [selectedDataKey])

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

    const cards = document.querySelectorAll('.portfolio-grid-item')
    cards.forEach((card) => observer.observe(card))

    return () => {
      cards.forEach((card) => observer.unobserve(card))
    }
  }, [selectedDataKey])

  const handleCategoryClick = (categoryId, dataKey) => {
    setSelectedCategoryId(categoryId)
    setSelectedDataKey(dataKey)
  }

  const projects = (projectData && projectData[selectedDataKey]) || []

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-yellow-50/20 to-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative portfolio-hero py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[600px] flex items-center"
        style={{
          backgroundImage: 'url(/images/other/portfolio.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Background Image Fallback */}
        <img
          src="/images/other/portfolio.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none"
          onError={(e) => {
            e.target.style.display = 'none'
            const section = e.target.closest('section')
            if (section) {
              section.style.backgroundImage = 'url(/images/other/keyboard-254582_1920.jpg)'
            }
          }}
        />
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Portfolio
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore our work and see how we've helped entrepreneurs, startups, and enterprises turn ideas into impactful, results-driven digital solutions.
            </p>
          </div>

          {/* Category Selection */}
          <div
            className={`mt-16 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-gradient-to-br from-[#F8BE28]/10 via-white to-yellow-50/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl border border-yellow-200/50">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {categories.map(({ id, label, icon: Icon, dataKey }, index) => {
                  const isActive = selectedCategoryId === id
                  
                  return (
                    <button
                      key={id}
                      onClick={() => handleCategoryClick(id, dataKey)}
                      className={`category-button group relative p-4 md:p-5 rounded-xl transition-all duration-500 ${
                        isActive
                          ? 'category-button active shadow-xl'
                          : 'bg-white hover:bg-yellow-50 border-2 border-gray-200 hover:border-[#F8BE28]'
                      }`}
                      style={{
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      <div className="flex flex-col items-center space-y-2 md:space-y-3">
                        <div
                          className={`category-icon w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
                            isActive
                              ? 'bg-black text-[#F8BE28] shadow-lg'
                              : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 group-hover:from-[#F8BE28] group-hover:to-yellow-400 group-hover:text-black'
                          }`}
                        >
                          <Icon className="w-6 h-6 md:w-7 md:h-7" />
                        </div>
                        <h3
                          className={`text-xs md:text-sm font-bold transition-colors duration-300 ${
                            isActive ? 'text-black' : 'text-gray-700 group-hover:text-[#F8BE28]'
                          }`}
                        >
                          {label}
                        </h3>
                      </div>
                      {isActive && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#F8BE28] to-yellow-400 opacity-20 animate-pulse"></div>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#F8BE28]/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-[#F8BE28]/5 rounded-full blur-lg animate-float animation-delay-4000"></div>
      </section>

      {/* Projects Grid */}
      <section ref={projectsRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header with Image */}
          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Work</h2>
                <p className="text-gray-600">
                  Browse through our portfolio of successful projects across various industries and technologies.
                </p>
              </div>
              <div>
                <img
                  src="/images/other/keyboard-254582_1920.jpg"
                  alt="Our Work"
                  className="w-full h-auto rounded-xl shadow-lg object-cover"
                  style={{ maxHeight: '250px' }}
                />
              </div>
            </div>
          </div>
          
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${
              projectsVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="portfolio-grid-item portfolio-card bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:border-[#F8BE28] transition-all duration-300"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Image Container */}
                <div className="portfolio-image-container relative">
                  <img
                    src={project.image[0]}
                    alt={project.title}
                    className="portfolio-image"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x250/F8BE28/FFFFFF?text=' + encodeURIComponent(project.title)
                    }}
                  />
                  <div className="portfolio-overlay"></div>
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#F8BE28] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`portfolio-tag px-3 py-1 rounded-full text-xs font-medium ${
                          tagColors[tag] || 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View More Button */}
                  <button
                    onClick={() => navigate(`/project/${selectedDataKey}/${index}`)}
                    className="portfolio-view-more w-full bg-gradient-to-r from-[#F8BE28] to-yellow-500 hover:from-yellow-500 hover:to-[#F8BE28] text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                  >
                    <span>View More Details</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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
                  </button>
                </div>
              </div>
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#F8BE28]/10 via-white to-yellow-50/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life. Contact us today to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-[#F8BE28] to-yellow-500 hover:from-yellow-500 hover:to-[#F8BE28] text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="/services"
              className="bg-white border-2 border-[#F8BE28] text-[#F8BE28] font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-[#F8BE28] hover:text-black shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
