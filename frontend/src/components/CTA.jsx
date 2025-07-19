function CTA() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">Ready to Find Your Next Opportunity?</h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Join thousands of professionals who have found their dream jobs through our platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="border-2 border-primary-400 text-primary-400 px-8 py-3 rounded-lg font-semibold hover:bg-primary-400 hover:text-gray-900 transition-colors">
            Browse Jobs
          </button>
          <button className="border-2 border-primary-400 text-primary-400 px-8 py-3 rounded-lg font-semibold hover:bg-primary-400 hover:text-gray-900 transition-colors">
            Post a Job
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA
