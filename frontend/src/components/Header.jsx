"use client"

import { useState } from "react"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-900 shadow-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary-400">JobBridge</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#jobs" className="text-gray-200 hover:text-primary-400 transition-colors">
              Find Jobs
            </a>
            <a href="#companies" className="text-gray-200 hover:text-primary-400 transition-colors">
              Companies
            </a>
            <a href="#about" className="text-gray-200 hover:text-primary-400 transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-200 hover:text-primary-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop Sign In Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-primary-500 text-gray-100 px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors shadow-md font-medium">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-200 hover:text-primary-400 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <a href="#jobs" className="text-gray-200 hover:text-primary-400 transition-colors">
                Find Jobs
              </a>
              <a href="#companies" className="text-gray-200 hover:text-primary-400 transition-colors">
                Companies
              </a>
              <a href="#about" className="text-gray-200 hover:text-primary-400 transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-200 hover:text-primary-400 transition-colors">
                Contact
              </a>
              <div className="pt-4 border-t border-gray-700">
                <button className="w-full bg-primary-500 text-gray-100 px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors shadow-md font-medium">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
