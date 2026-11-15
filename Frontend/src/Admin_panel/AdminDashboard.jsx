import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('trials');
  const [trials, setTrials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (activeTab === 'trials') {
      fetchTrials();
    }
  }, [activeTab]);

  const fetchTrials = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/trials');
      setTrials(response.data);
    } catch (error) {
      console.error('Error fetching trials data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-slate-100 font-sans overflow-hidden">
      
      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
        />
      )}

      <div className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white flex flex-col transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="p-6 border-b border-slate-800 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-black text-emerald-400">Tarteel Admin</h1>
            <p className="text-xs text-slate-400 mt-1">Management Portal</p>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden text-slate-400 hover:text-white text-lg font-bold"
          >
            ✕
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => { setActiveTab('trials'); setIsSidebarOpen(false); }}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'trials' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            📋 Trial Requests
          </button>

          <button
            onClick={() => { setActiveTab('courses'); setIsSidebarOpen(false); }}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'courses' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            📚 Courses
          </button>

          <button
            onClick={() => { setActiveTab('settings'); setIsSidebarOpen(false); }}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'settings' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            ⚙️ Settings
          </button>
        </nav>

        <div className="p-4 border-t border-slate-800 text-xs text-slate-500 text-center">
          Tarteel Academy v1.0
        </div>
      </div>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 shadow-sm flex-shrink-0">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-slate-600 hover:text-slate-900 p-2 rounded-xl bg-slate-100 font-bold"
            >
              ☰
            </button>
            <h2 className="text-base sm:text-lg font-black text-slate-800 capitalize truncate">
              {activeTab === 'trials' && 'Trial Class Submissions'}
              {activeTab === 'courses' && 'Manage Courses'}
              {activeTab === 'settings' && 'System Settings'}
            </h2>
          </div>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100 whitespace-nowrap">
            Admin Logged In
          </span>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-8">
          
          {activeTab === 'trials' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <p className="text-xs text-slate-500">List of students who booked a free trial class.</p>
                <button 
                  onClick={fetchTrials}
                  className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-bold px-4 py-2 rounded-xl transition-all border border-emerald-200 whitespace-nowrap"
                >
                  🔄 Refresh Data
                </button>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                {loading ? (
                  <div className="p-8 text-center text-sm text-slate-500">Loading submissions...</div>
                ) : trials.length === 0 ? (
                  <div className="p-8 text-center text-sm text-slate-500">No trial requests found yet.</div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[900px]">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider">
                          <th className="p-4">Student</th>
                          <th className="p-4">Age / Gender</th>
                          <th className="p-4">Parent</th>
                          <th className="p-4">Contact</th>
                          <th className="p-4">Course</th>
                          <th className="p-4">Teacher Pref</th>
                          <th className="p-4">Time Zone</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-sm">
                        {trials.map((item, index) => (
                          <tr key={index} className="hover:bg-slate-50/80">
                            <td className="p-4 font-bold text-slate-800">{item.student_name}</td>
                            <td className="p-4 text-slate-600">{item.age} yrs ({item.gender})</td>
                            <td className="p-4 text-slate-600">{item.parent_name}</td>
                            <td className="p-4 text-slate-600">
                              <div className="text-xs font-semibold">{item.email}</div>
                              <div className="text-xs text-slate-400">{item.phone}</div>
                            </td>
                            <td className="p-4 text-slate-700 font-medium">{item.course}</td>
                            <td className="p-4">
                              <span className="bg-slate-100 text-slate-700 text-xs font-bold px-2.5 py-1 rounded-lg">
                                {item.preferred_tutor}
                              </span>
                            </td>
                            <td className="p-4 text-xs text-slate-600 font-medium">{item.time_zone}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-base font-bold text-slate-800 mb-2">Available Academy Courses</h3>
              <p className="text-xs text-slate-500 mb-4">Here you can manage or add courses shown on the website.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Noorani Qaida for Kids', 'Quran Reading with Tajweed', 'Quran Memorization (Hifz)', 'Quranic Arabic Language'].map((course, idx) => (
                  <div key={idx} className="p-4 border border-slate-100 rounded-xl bg-slate-50/50 flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-700">{course}</span>
                    <span className="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-lg font-bold">Active</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-base font-bold text-slate-800 mb-2">Admin Settings</h3>
              <p className="text-xs text-slate-500">Configure your academy backend preferences here.</p>
            </div>
          )}

        </main>
      </div>

    </div>
  );
}