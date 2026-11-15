export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/60 px-4 py-2 rounded-full">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
              <span className="text-xs font-bold text-emerald-800 tracking-wide uppercase">
                Trusted by Students in 50+ Countries
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Master Quran & Tajweed <span className="text-emerald-600 underline decoration-emerald-200 decoration-wavy decoration-1">With Expert Tutors</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Experience personalized 1-on-1 live online classes for kids and adults. Certified Al-Azhar teachers, flexible global schedules, and an interactive learning platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#trial" 
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-xl shadow-emerald-600/25 transition-all text-center flex items-center justify-center gap-3 group"
              >
                <span>Book 3-Day Free Trial</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a 
                href="#courses" 
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 font-bold text-base px-8 py-4 rounded-2xl border border-slate-200 transition-all text-center shadow-xs"
              >
                Explore Courses
              </a>
            </div>

            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs font-semibold text-slate-500">
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 text-base">✓</span> No Credit Card Required
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 text-base">✓</span> Male & Female Tutors
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-600 to-amber-400 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
              
              <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xl">
                      👨‍🏫
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">Live 1-on-1 Session</h3>
                      <p className="text-xs text-slate-500 font-medium">Interactive Digital Mushaf</p>
                    </div>
                  </div>
                  <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
                    Active Now
                  </span>
                </div>

                <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 space-y-3 font-mono text-center">
                  <p className="text-xs text-amber-400 font-semibold tracking-wider">SURAH AL-FATIHAH (1:1)</p>
                  <p className="text-xl sm:text-2xl font-bold tracking-wide text-emerald-400" dir="rtl">
                    بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                  </p>
                  <p className="text-xs text-slate-400 font-sans italic">
                    "In the name of Allah, the Entirely Merciful, the Especially Merciful."
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>Tajweed Accuracy</span>
                    <span className="text-emerald-600">98%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full rounded-full w-[98%]"></div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 font-medium border-t border-slate-100">
                  <span>⭐ 4.9/5 Parent Rating</span>
                  <span>5,000+ Enrolled</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}