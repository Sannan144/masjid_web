export default function Courses({isOpen , setIsOpen }) {
  const coursesList = [
    {
      id: 'qaida',
      title: 'Noorani Qaida',
      subtitle: 'For Kids & Beginners',
      description: 'Master Arabic alphabets, proper pronunciation (Makharij), and basic joint letters with expert patient tutors.',
      badge: 'Most Popular',
      age: 'Ages 4+',
      duration: '3 Months',
      icon: '📖',
    },
    {
      id: 'nazra',
      title: 'Quran Reading & Tajweed',
      subtitle: 'Fluent Recitation',
      description: 'Learn to read the Holy Quran fluently while strictly applying the rules of Tajweed and Tarteel.',
      badge: 'Essential',
      age: 'All Ages',
      duration: 'Flexible',
      icon: '✨',
    },
    {
      id: 'hifz',
      title: 'Quran Memorization (Hifz)',
      subtitle: 'Become a Hafiz/Hafiza',
      description: 'Structured daily memorization program with systematic revision cycles and expert supervision.',
      badge: 'Advanced',
      age: 'Kids & Adults',
      duration: '1-3 Years',
      icon: '🧠',
    },
    {
      id: 'arabic',
      title: 'Quranic Arabic Language',
      subtitle: 'Understand the Quran',
      description: 'Understand the literal meaning of Quranic verses directly without relying entirely on translations.',
      badge: 'In-Depth',
      age: 'Teens & Adults',
      duration: '6 Months',
      icon: '🗣️',
    },
  ];

  return (
    <section id="courses" className="py-20 bg-slate-50/50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Structured Programs
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Comprehensive Online Quran Courses <span className="text-emerald-600">For Every Level</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Personalized 1-on-1 live classes tailored to your pace, schedule, and learning goals, taught by certified native Arabic speakers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coursesList.map((course) => (
            <div 
              key={course.id}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    {course.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                    {course.badge}
                  </span>
                </div>

                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">
                  {course.subtitle}
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-1 mb-3">
                  {course.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6">
                  {course.description}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex justify-between text-xs font-semibold text-slate-500">
                  <span>{course.age}</span>
                  <span>{course.duration}</span>
                </div>

                <button 
                  onClick={()=> setIsOpen(true)}
                  className="w-full bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs py-3 rounded-xl transition-colors duration-200 cursor-pointer shadow-md"
                >
                  Book Free Trial
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}