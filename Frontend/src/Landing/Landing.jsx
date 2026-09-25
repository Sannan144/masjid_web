const Hero = () => {
  return (
    <div className="relative bg-slate-50 overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Background Soft Sky Blue Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-sky-200/50 to-transparent blur-3xl rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Copy & CTA (Attract + Inform) */}
          <div className="text-center md:text-left space-y-6">
            
            {/* Student Attraction Badge */}
            <div className="inline-flex items-center gap-2 bg-sky-100/80 border border-sky-200 px-4 py-1.5 rounded-full text-sky-700 text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
              3-Day Free Trial • No Credit Card Required
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Master Quranic Reading & Tajweed <span className="text-sky-500">From Home</span>
            </h1>

            {/* About Academy Short Pitch */}
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Tarteel Academy provides 1-on-1 live Quran classes for kids and adults worldwide. Learn Noorani Qaida, Tajweed, and Hifz at your own flexible pace with certified Egyptian & Arab tutors.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
              <button className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-sky-500/30 transition-all transform hover:-translate-y-0.5 text-lg">
                Book Free Trial
              </button>
              <button className="w-full sm:w-auto bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold px-6 py-4 rounded-full transition-all flex items-center justify-center gap-2">
                Explore Courses
              </button>
            </div>

            {/* Key Highlights / Trust Stats */}
            <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-4 text-center md:text-left">
              <div>
                <h3 className="text-2xl font-bold text-slate-800">5,000+</h3>
                <p className="text-sm text-slate-500">Active Students</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">100%</h3>
                <p className="text-sm text-slate-500">Certified Tutors</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-sky-600">4.9/5 ★</h3>
                <p className="text-sm text-slate-500">Global Rating</p>
              </div>
            </div>

          </div>

          {/* Right Side: Interactive Visual Card (Features & Trust Showcase) */}
          <div className="relative">
            <div className="w-full h-[440px] sm:h-[490px] bg-gradient-to-tr from-sky-100 to-sky-50 rounded-3xl border border-sky-200 p-6 flex flex-col justify-between shadow-xl shadow-sky-100 relative overflow-hidden">
              
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-sky-300/30 rounded-full blur-2xl" />

              {/* Attraction Element 1: Interactive Learning Card */}
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-slate-100 shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-700 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Personalized 1-on-1 Learning
                  </span>
                  <span className="text-[10px] bg-sky-100 text-sky-700 px-2 py-0.5 rounded font-semibold">Live Class</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                    <p className="text-slate-400 text-[10px]">Tutors Available</p>
                    <p className="font-semibold text-slate-700">Male & Female Tutors</p>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                    <p className="text-slate-400 text-[10px]">Schedule</p>
                    <p className="font-semibold text-slate-700">24/7 Any Timezone</p>
                  </div>
                </div>
              </div>

              {/* Quran Verse */}
              <div className="my-auto text-center px-4">
                <p className="font-serif text-2xl text-slate-800 dir-rtl leading-loose">
                  "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا"
                </p>
                <p className="text-xs text-slate-500 italic mt-1">
                  "And recite the Quran with measured recitation." (73:4)
                </p>
              </div>

              {/* Trust Element 2: Academy Accreditation Badge */}
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-slate-100 shadow-md flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold text-lg">
                    🎓
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">Al-Azhar Certified Tutors</p>
                    <p className="text-xs text-slate-500">Fluent in English & Arabic</p>
                  </div>
                </div>
                <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded-full">
                  Verified
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero