const Portfolio = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portfolio
          </h1>
          <p className="text-xl text-gray-600">
            Explore our work and achievements
          </p>
        </div>

        {/* Content will be added here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
            <p className="text-gray-500">Portfolio item will be added here</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio

