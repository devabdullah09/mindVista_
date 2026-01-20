import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { projectData, tagColors } from '../data/portfolioData'
import { CiMobile4 } from 'react-icons/ci'
import { FaLaptopCode, FaArrowRight, FaStar } from 'react-icons/fa'
import { SiHiveBlockchain } from 'react-icons/si'
import { MdDesignServices } from 'react-icons/md'
import { BsGrid3X3GapFill } from 'react-icons/bs'

const categories = [
  { id: 'web-app', label: 'Web Application', icon: FaLaptopCode, dataKey: 'web', color: 'from-blue-500 via-cyan-500 to-teal-500' },
  { id: 'mobile-app', label: 'Mobile Application', icon: CiMobile4, dataKey: 'app', color: 'from-purple-500 via-pink-500 to-rose-500' },
  { id: 'admin-panel', label: 'Admin Panel', icon: FaLaptopCode, dataKey: 'web', color: 'from-green-500 via-emerald-500 to-teal-500' },
  { id: 'ui-ux', label: 'UI/UX Designing', icon: MdDesignServices, dataKey: 'blockchain', color: 'from-orange-500 via-amber-500 to-yellow-500' },
]

const Portfolio = () => {
  const navigate = useNavigate()
  const [selectedCategoryId, setSelectedCategoryId] = useState('mobile-app')
  const [selectedDataKey, setSelectedDataKey] = useState('app')
  const [isVisible, setIsVisible] = useState(false)
  const [projectsVisible, setProjectsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredCard, setHoveredCard] = useState(null)
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

  // Mouse position tracking for magnetic effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleCategoryClick = (categoryId, dataKey) => {
    setSelectedCategoryId(categoryId)
    setSelectedDataKey(dataKey)
  }

  const projects = (projectData && projectData[selectedDataKey]) || []

  // Bento grid layout patterns - varies card sizes for visual interest
  const getBentoClass = (index) => {
    const patterns = [
      'md:col-span-2 md:row-span-2', // Large
      'md:col-span-1', // Regular
      'md:col-span-1', // Regular
      'md:col-span-2', // Wide
      'md:col-span-1', // Regular
      'md:col-span-1 md:row-span-2', // Tall
    ]
    return patterns[index % patterns.length]
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Enhanced Hero with Creative Design */}
      <section
        ref={heroRef}
        className="relative py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Creative Header */}
          <div className="relative mb-12">
            {/* Decorative Background */}
            <div className="absolute -top-4 right-20 w-32 h-32 bg-[#F8BE28]/10 rounded-full blur-2xl"></div>
            
            <div className="relative bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg">
              {/* Top Section - Title and Filter */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                {/* Title Section */}
                <div className={`flex-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <div className="flex items-center gap-4">
                    {/* Yellow Accent Bar */}
                    <div className="w-1.5 h-16 bg-[#F8BE28] rounded-full"></div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-[#F8BE28] rounded-full animate-pulse"></div>
                        <span className="text-xs font-bold text-[#F8BE28] uppercase tracking-wider">Our Work</span>
                      </div>
                      <h1 className="text-3xl md:text-4xl font-black text-gray-900">
                        Portfolio
                      </h1>
                      <p className="text-sm text-gray-600 mt-1">Creative work & case studies</p>
                    </div>
                  </div>
                </div>
                
                {/* Category Filter */}
                <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Filter by Category
                    </label>
                    <div className="relative">
                      <select
                        value={selectedCategoryId}
                        onChange={(e) => {
                          const category = categories.find(c => c.id === e.target.value)
                          if (category) handleCategoryClick(category.id, category.dataKey)
                        }}
                        style={{
                          colorScheme: 'light'
                        }}
                        className="appearance-none bg-white text-gray-900 border-2 border-gray-300 rounded-xl px-5 py-2.5 pr-11 text-sm font-semibold cursor-pointer hover:border-[#F8BE28] focus:outline-none focus:ring-2 focus:ring-[#F8BE28]/30 focus:border-[#F8BE28] transition-all duration-300 min-w-[200px]"
                      >
                        {categories.map(({ id, label }) => (
                          <option key={id} value={id}>{label}</option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="pt-6 border-t border-gray-100">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-black text-[#F8BE28]">{projects.length}</div>
                    <div className="text-[10px] text-gray-500 font-medium uppercase">Projects</div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <div className="text-xl font-black text-[#F8BE28]">Featured</div>
                    <div className="text-[10px] text-gray-500 font-medium uppercase">Category</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-black text-[#F8BE28]">2024</div>
                    <div className="text-[10px] text-gray-500 font-medium uppercase">Latest</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Magazine-Style Layout */}
      <section ref={projectsRef} className="relative py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {projects.length > 0 && (
            <div className={`transition-all duration-500 ${projectsVisible ? 'opacity-100' : 'opacity-0'}`}>
              {/* Featured Project - Large Hero */}
              <div 
                className="relative mb-12 group cursor-pointer"
                onClick={() => navigate(`/project/${selectedDataKey}/0`)}
                onMouseEnter={() => setHoveredCard(0)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gray-100">
                  <img
                    src={projects[0].image[0]}
                    alt={projects[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/1200x500/F8BE28/FFFFFF?text=' + encodeURIComponent(projects[0].title)
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Featured Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="relative">
                      <span className="px-4 py-2 bg-[#F8BE28] text-white text-xs font-bold rounded-lg shadow-lg flex items-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        FEATURED PROJECT
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {projects[0].tags.slice(0, 4).map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                      {projects[0].title}
                    </h2>
                    <p className="text-white/90 text-sm md:text-base max-w-2xl line-clamp-2">
                      {projects[0].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Scrapbook-Style Grid - Staggered & Rotated (No Overlap) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative">
                {projects.slice(1).map((project, index) => {
                  const actualIndex = index + 1
                  // Create unique layouts for visual interest - removed negative margins to prevent overlap
                  const layouts = [
                    { col: 'md:col-span-5', rotate: 'hover:rotate-1', offset: '' },
                    { col: 'md:col-span-7', rotate: 'hover:-rotate-1', offset: '' },
                    { col: 'md:col-span-7', rotate: 'hover:rotate-1', offset: '' },
                    { col: 'md:col-span-5', rotate: 'hover:-rotate-1', offset: '' },
                    { col: 'md:col-span-6', rotate: 'hover:rotate-1', offset: '' },
                    { col: 'md:col-span-6', rotate: 'hover:-rotate-1', offset: '' },
                  ]
                  const layout = layouts[index % layouts.length]

                  return (
                    <div
                      key={actualIndex}
                      className={`${layout.col} ${layout.offset} portfolio-grid-item`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div
                        className={`group relative bg-white border-2 border-gray-200 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:border-[#F8BE28] hover:shadow-2xl ${layout.rotate} hover:scale-105`}
                        onClick={() => navigate(`/project/${selectedDataKey}/${actualIndex}`)}
                        onMouseEnter={() => setHoveredCard(actualIndex)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        {/* Yellow Corner Accent */}
                        <div className="absolute top-0 left-0 w-16 h-16 bg-[#F8BE28]/5 rounded-br-full"></div>
                        
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden bg-gray-100">
                          <img
                            src={project.image[0]}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/600x300/F8BE28/FFFFFF?text=' + encodeURIComponent(project.title)
                            }}
                          />
                          
                          {/* Number Badge */}
                          <div className="absolute top-3 right-3">
                            <div className="w-8 h-8 bg-[#F8BE28] text-white font-bold text-xs flex items-center justify-center rounded-full shadow-lg">
                              {actualIndex.toString().padStart(2, '0')}
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5">
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#F8BE28] transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                            {project.description}
                          </p>
                          
                          {/* Tags - Compact */}
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.slice(0, 2).map((tag, tagIdx) => (
                              <span key={tagIdx} className="px-2 py-1 bg-gray-100 text-gray-700 text-[10px] font-medium rounded">
                                {tag}
                              </span>
                            ))}
                            {project.tags.length > 2 && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-500 text-[10px] font-medium rounded">
                                +{project.tags.length - 2}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Yellow accent bar - appears on hover */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F8BE28] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Empty State */}
          {projects.length === 0 && (
            <div className="text-center py-24">
              <BsGrid3X3GapFill className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Projects Found</h3>
              <p className="text-sm text-gray-600">This category is currently empty.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section - Yellow Accents Only */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#F8BE28]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#F8BE28]/10 rounded-full blur-2xl"></div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 md:p-12 text-center shadow-xl">
            {/* Yellow Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#F8BE28] rounded-t-2xl"></div>
            
            {/* Compact Title */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-2 h-2 bg-[#F8BE28] rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                Ready to Start Your Project?
              </h2>
              <div className="w-2 h-2 bg-[#F8BE28] rounded-full"></div>
            </div>
            
            {/* Description */}
            <p className="text-sm text-gray-600 mb-6 max-w-xl mx-auto">
              Let's collaborate to bring your vision to life with innovative solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href="/contact"
                className="group px-6 py-3 rounded-xl bg-[#F8BE28] hover:bg-[#e6a821] text-white font-bold text-sm transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                <span>Start Project</span>
                <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href="/services"
                className="px-6 py-3 rounded-xl border-2 border-[#F8BE28] hover:bg-[#F8BE28] hover:text-white text-gray-900 font-bold text-sm transition-all duration-300"
              >
                View Services
              </a>
            </div>

            {/* Compact Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">
              <div className="text-center group">
                <div className="text-2xl font-black text-[#F8BE28] mb-1">500+</div>
                <div className="text-[10px] text-gray-600 font-medium uppercase">Projects</div>
              </div>
              <div className="text-center border-x border-gray-200 group">
                <div className="text-2xl font-black text-[#F8BE28] mb-1">98%</div>
                <div className="text-[10px] text-gray-600 font-medium uppercase">Satisfaction</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl font-black text-[#F8BE28] mb-1">50+</div>
                <div className="text-[10px] text-gray-600 font-medium uppercase">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
