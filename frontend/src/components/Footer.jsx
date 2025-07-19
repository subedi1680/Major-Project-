function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">JobBridge</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Bridging the gap between talented professionals and amazing opportunities. Your career journey starts
              here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">For Job Seekers</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-gray-100 transition-colors">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100 transition-colors">
                  Career Advice
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">For Employers</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-gray-100 transition-colors">
                  Post Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100 transition-colors">
                  Find Candidates
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 JobBridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
