import { useState } from 'react';

export default function Navbar({ isOpen, setIsOpen, setIsLogin }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Tutors', href: '#tutors' },
    { name: 'Pricing', href: '#pricing' },
  ];

  const coursesList = [
    { name: 'Noorani Qaida for Kids', href: '#qaida', icon: '📖' },
    { name: 'Quran Reading with Tajweed', href: '#nazra', icon: '✨' },
    { name: 'Quran Memorization (Hifz)', href: '#hifz', icon: '🧠' },
    { name: 'Quranic Arabic Language', href: '#arabic', icon: '🗣️' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs font-sans">
      <div className="bg-slate-900 text-white text-xs py-2 px-4 text-center font-medium">
        <span>🌍 Certified Male & Female Arabic Tutors Available 24/7. </span>
        <button onClick={() => setIsOpen(true)} className="underline text-emerald-400 hover:text-emerald-300 ml-1 font-semibold cursor-pointer bg-transparent border-none">
          Get 3 Days Free Trial →
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 to-emerald-500 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-emerald-600/25 group-hover:scale-105 transition-transform">
              📖
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl tracking-tight text-slate-900 leading-none">
                Tarteel<span className="text-emerald-600">Academy</span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mt-1">
                Global Quran Learning
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-slate-600">
            <a href={navLinks[0].href} className="hover:text-emerald-600 transition-colors">
              {navLinks[0].name}
            </a>
            
            <div 
              className="relative py-2"
              onMouseEnter={() => setIsCoursesOpen(true)}
              onMouseLeave={() => setIsCoursesOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-emerald-600 transition-colors focus:outline-none">
                <span>Courses</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${isCoursesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isCoursesOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 space-y-1 transition-all animate-in fade-in slide-in-from-top-2">
                  {coursesList.map((course) => (
                    <a 
                      key={course.href} 
                      href={course.href} 
                      className="block px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                    >
                      {course.icon} {course.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <a key={link.href} href={link.href} className="hover:text-emerald-600 transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button onClick={()=> setIsLogin(true)} className="text-sm font-bold text-slate-700 hover:text-emerald-600 px-3 py-2 transition-colors cursor-pointer">
              Sign In
            </button>
            <button 
              onClick={() => setIsOpen(true)}
              className="bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-sm font-bold px-6 py-3 rounded-full shadow-lg shadow-emerald-600/25 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Book Free Trial</span>
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-emerald-600 p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 px-4 pt-3 pb-8 space-y-4 shadow-xl">
          <a href={navLinks[0].href} className="block text-base font-semibold text-slate-700 hover:text-emerald-600 py-1">
            {navLinks[0].name}
          </a>
          
          <div className="space-y-2 pl-2 border-l-2 border-emerald-100">
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Courses</span>
            {coursesList.map((course) => (
              <a key={course.href} href={course.href} className="block text-sm font-medium text-slate-600 hover:text-emerald-600 py-1">
                {course.name}
              </a>
            ))}
          </div>

          {navLinks.slice(1).map((link) => (
            <a key={link.href} href={link.href} className="block text-base font-semibold text-slate-700 hover:text-emerald-600 py-1">
              {link.name}
            </a>
          ))}
          
          <div className="pt-4 flex flex-col gap-3">
            <a href="#login" className="w-full text-center font-bold text-slate-700 border border-slate-200 py-3 rounded-xl hover:bg-slate-50 transition-colors">
              Sign In
            </a>
            <button onClick={() => setIsOpen(true)} className="w-full text-center font-bold bg-emerald-600 text-white py-3.5 rounded-xl shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-colors cursor-pointer">
              Book Free Trial
            </button>
          </div>
        </div>
      )}
    </header>
  );
}