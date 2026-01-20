import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { projectData, tagColors } from '../data/portfolioData'
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt, FaGithub, FaCheck } from 'react-icons/fa'

const ProjectDetail = () => {
  const { category, id } = useParams()
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [])

  // Get project data
  const projects = projectData[category] || []
  const project = projects[parseInt(id)]

  // Get previous and next projects
  const prevProject = parseInt(id) > 0 ? parseInt(id) - 1 : null
  const nextProject = parseInt(id) < projects.length - 1 ? parseInt(id) + 1 : null

  // If project not found, redirect to portfolio
  useEffect(() => {
    if (!project) {
      navigate('/portfolio')
    }
  }, [project, navigate])

  if (!project) return null

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#F8BE28]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#F8BE28]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative">
          {/* Back Button */}
          <button
            onClick={() => navigate('/portfolio')}
            className={`group flex items-center gap-2 text-gray-600 hover:text-[#F8BE28] font-medium mb-8 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
          >
            <FaArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </button>

          {/* Project Header */}
          <div className={`transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-16 bg-[#F8BE28] rounded-full"></div>
              <div>
                <span className="px-3 py-1 bg-[#F8BE28]/10 text-[#F8BE28] text-xs font-bold rounded-lg uppercase tracking-wider">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">
                  {project.title}
                </h1>
              </div>
            </div>

            <p className="text-lg text-gray-600 max-w-3xl mt-6">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`px-4 py-2 ${
                    tagColors[tag] || 'bg-gray-100 text-gray-800'
                  } text-sm font-semibold rounded-lg`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Images */}
            <div className="lg:col-span-2">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 bg-gray-100">
                <img
                  src={project.image[selectedImage]}
                  alt={`${project.title} - View ${selectedImage + 1}`}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/1200x800/F8BE28/FFFFFF?text=${encodeURIComponent(project.title)}`
                  }}
                />
                
                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 px-4 py-2 bg-black/60 backdrop-blur-sm text-white text-sm font-bold rounded-lg">
                  {selectedImage + 1} / {project.image.length}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {project.image.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {project.image.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                        selectedImage === idx
                          ? 'ring-4 ring-[#F8BE28] scale-105'
                          : 'hover:scale-105 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-24 object-cover"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/300x200/F8BE28/FFFFFF?text=${idx + 1}`
                        }}
                      />
                      {selectedImage === idx && (
                        <div className="absolute inset-0 bg-[#F8BE28]/20"></div>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {/* Project Details */}
              <div className="mt-12 bg-white border-2 border-gray-100 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-[#F8BE28]"></div>
                  <h2 className="text-2xl font-black text-gray-900">Project Overview</h2>
                </div>

                <div className="prose prose-lg max-w-none text-gray-600">
                  <p className="leading-relaxed">
                    {project.description}
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {project.tags.map((tag, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#F8BE28] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FaCheck className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700">{tag} integration and implementation</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Project Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Project Info Card */}
                <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-6 shadow-lg">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#F8BE28]"></div>
                  
                  <h3 className="text-lg font-black text-gray-900 mb-6">Project Info</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-gray-500 font-semibold uppercase mb-1">Category</div>
                      <div className="text-sm font-bold text-gray-900">{project.category}</div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4">
                      <div className="text-xs text-gray-500 font-semibold uppercase mb-1">Technologies</div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-[#F8BE28]/10 text-[#F8BE28] text-xs font-bold rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4">
                      <div className="text-xs text-gray-500 font-semibold uppercase mb-1">Project Type</div>
                      <div className="text-sm font-bold text-gray-900">Custom Development</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#F8BE28] hover:bg-[#e6a821] text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group">
                    <span>View Live Demo</span>
                    <FaExternalLinkAlt className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>

                  <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group">
                    <FaGithub className="w-5 h-5" />
                    <span>View on GitHub</span>
                  </button>
                </div>

                {/* Contact CTA */}
                <div className="bg-gradient-to-br from-[#F8BE28] to-[#e6a821] rounded-2xl p-6 text-white shadow-xl">
                  <h4 className="text-lg font-black mb-2">Like This Project?</h4>
                  <p className="text-sm text-white/90 mb-4">
                    Let's create something amazing together!
                  </p>
                  <Link
                    to="/contact"
                    className="block w-full text-center px-6 py-3 bg-white hover:bg-gray-100 text-[#F8BE28] font-bold rounded-xl transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to Next/Previous Projects */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Previous Project */}
            <div className="flex-1">
              {prevProject !== null && (
                <button
                  onClick={() => navigate(`/project/${category}/${prevProject}`)}
                  className="group flex items-center gap-3 text-left hover:text-[#F8BE28] transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-100 group-hover:bg-[#F8BE28] flex items-center justify-center transition-colors">
                    <FaArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold uppercase">Previous</div>
                    <div className="text-sm font-bold text-gray-900 group-hover:text-[#F8BE28]">
                      {projects[prevProject].title}
                    </div>
                  </div>
                </button>
              )}
            </div>

            {/* View All */}
            <Link
              to="/portfolio"
              className="px-6 py-3 bg-white border-2 border-gray-200 hover:border-[#F8BE28] hover:bg-[#F8BE28] hover:text-white text-gray-900 font-bold rounded-xl transition-all duration-300"
            >
              View All Projects
            </Link>

            {/* Next Project */}
            <div className="flex-1 flex justify-end">
              {nextProject !== null && (
                <button
                  onClick={() => navigate(`/project/${category}/${nextProject}`)}
                  className="group flex items-center gap-3 text-right hover:text-[#F8BE28] transition-colors"
                >
                  <div>
                    <div className="text-xs text-gray-500 font-semibold uppercase">Next</div>
                    <div className="text-sm font-bold text-gray-900 group-hover:text-[#F8BE28]">
                      {projects[nextProject].title}
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gray-100 group-hover:bg-[#F8BE28] flex items-center justify-center transition-colors">
                    <FaArrowRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects / CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white border-2 border-gray-100 rounded-2xl p-12 text-center shadow-xl">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#F8BE28]"></div>
            
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-base text-gray-600 mb-8 max-w-2xl mx-auto">
              We'd love to hear about your project ideas and help bring them to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F8BE28] hover:bg-[#e6a821] text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Get in Touch</span>
                <FaArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-[#F8BE28] text-[#F8BE28] hover:bg-[#F8BE28] hover:text-white font-bold rounded-xl transition-all duration-300"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetail
