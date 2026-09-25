import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-slate-50/90 backdrop-blur-md border-b border-sky-100 sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-sky-300 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-sky-200">
              T
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-slate-800 bg-clip-text text-transparent">
              Tarteel<span className="text-sky-500">Academy</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-slate-600 hover:text-sky-600 font-medium transition-colors">Home</a>
            <a href="#courses" className="text-slate-600 hover:text-sky-600 font-medium transition-colors">Courses</a>
            <a href="#why-us" className="text-slate-600 hover:text-sky-600 font-medium transition-colors">Why Us</a>
            <a href="#pricing" className="text-slate-600 hover:text-sky-600 font-medium transition-colors">Pricing</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sky-600 hover:text-sky-700 font-semibold px-4 py-2 transition-colors">
              Sign In
            </button>
            <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-sky-500/25 transition-all transform hover:-translate-y-0.5">
              Book Free Trial
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-sky-600 focus:outline-none"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-50 border-b border-sky-100 px-4 pt-2 pb-6 space-y-3">
          <a href="#home" className="block text-slate-600 hover:text-sky-600 font-medium py-2">Home</a>
          <a href="#courses" className="block text-slate-600 hover:text-sky-600 font-medium py-2">Courses</a>
          <a href="#why-us" className="block text-slate-600 hover:text-sky-600 font-medium py-2">Why Us</a>
          <a href="#pricing" className="block text-slate-600 hover:text-sky-600 font-medium py-2">Pricing</a>
          <div className="pt-4 flex flex-col gap-3">
            <button className="w-full text-sky-600 font-semibold py-2 rounded-lg border border-sky-200">
              Sign In
            </button>
            <button className="w-full bg-sky-500 text-white font-semibold py-2.5 rounded-lg shadow-md shadow-sky-500/20">
              Book Free Trial
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar