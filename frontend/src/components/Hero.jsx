function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-800 to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6">
            Find Your Dream Job
            <span className="text-primary-400 block">Today</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Connect with top employers and discover opportunities that match your skills and aspirations through
            JobBridge.
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-col lg:flex-row gap-4 p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">Job Title</label>
                <input
                  type="text"
                  placeholder="e.g. Frontend Developer, Product Manager"
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-700/80 text-gray-100 placeholder-gray-400 transition-all"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                <input
                  type="text"
                  placeholder="e.g. New York, Remote, San Francisco"
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-700/80 text-gray-100 placeholder-gray-400 transition-all"
                />
              </div>
              <div className="flex items-end">
                <button className="w-full lg:w-auto border-2 border-primary-400 text-primary-400 px-8 py-3 rounded-lg font-semibold hover:bg-primary-400 hover:text-gray-900 transition-colors shadow-lg">
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    Search Jobs
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="text-gray-300 font-medium">Popular:</span>
            {["Remote", "Full-time", "Part-time", "Frontend", "Backend", "Design"].map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 bg-gray-700/60 text-gray-200 rounded-full text-sm hover:bg-gray-600/80 hover:text-gray-100 transition-all border border-gray-600/50 hover:border-gray-500"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
