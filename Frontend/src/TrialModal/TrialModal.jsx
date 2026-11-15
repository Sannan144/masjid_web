import { useState } from 'react';
import axios from 'axios';

export default function TrialModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const [formData, setFormData] = useState({
    studentName: '',
    age: '',
    gender: 'Female',
    parentName: '',
    email: '',
    phone: '',
    course: 'Noorani Qaida for Kids',
    preferredTutor: 'Any',
    timeZone: 'UTC+0 (GMT - UK)',
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post('http://localhost:5000/api/submit-trial', formData);
      
      if (response.data.success) {
        setMessage('Trial booked successfully!');
        setTimeout(() => {
          setLoading(false);
          onClose(); 
          setStep(1);
        }, 1500);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  const courses = [
    'Noorani Qaida for Kids',
    'Quran Reading with Tajweed',
    'Quran Memorization (Hifz)',
    'Quranic Arabic Language',
  ];

  const timeZones = [
    'UTC-5 (EST - USA/Canada)',
    'UTC+0 (GMT - UK)',
    'UTC+1 (CET - Europe)',
    'UTC+4 (GST - UAE/Gulf)',
    'UTC+10 (AEST - Australia)',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative font-sans">
        
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 text-xl font-bold p-2"
        >
          ✕
        </button>

        <div className="mb-6 text-center">
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Step {step} of 2
          </span>
          <h2 className="text-2xl font-black text-slate-900 mt-2">
            {step === 1 ? 'Student Details' : 'Learning Preferences'}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {step === 1 ? 'Tell us who will be learning with us' : 'Select course and schedule preferences'}
          </p>
        </div>

        {message && (
          <div className={`mb-4 p-3 rounded-xl text-xs font-bold text-center ${
            message.includes('successfully') ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'
          }`}>
            {message}
          </div>
        )}

        <form onSubmit={step === 2 ? handleSubmit : (e) => { e.preventDefault(); setStep(2); }}>
          {step === 1 ? (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Student Full Name</label>
                <input 
                  type="text" 
                  name="studentName"
                  required
                  value={formData.studentName}
                  onChange={handleChange}
                  placeholder="e.g. Aaliyah Khan"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Age</label>
                  <input 
                    type="number" 
                    name="age"
                    required
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="e.g. 8"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Gender</label>
                  <select 
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-600 bg-white"
                  >
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Parent / Guardian Name</label>
                <input 
                  type="text" 
                  name="parentName"
                  required
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="e.g. Usman Khan"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="parent@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">WhatsApp / Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 890"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-600/20 transition-all mt-4"
              >
                Continue to Next Step →
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Select Course</label>
                <select 
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-600 bg-white"
                >
                  {courses.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Preferred Teacher</label>
                <div className="grid grid-cols-3 gap-3">
                  {['Female', 'Male', 'Any'].map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setFormData({ ...formData, preferredTutor: t })}
                      className={`py-2.5 text-xs font-bold rounded-xl border transition-all ${
                        formData.preferredTutor === t 
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-700' 
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {t} Teacher
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Time Zone</label>
                <select 
                  name="timeZone"
                  value={formData.timeZone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-600 bg-white"
                >
                  {timeZones.map((tz) => (
                    <option key={tz} value={tz}>{tz}</option>
                  ))}
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button 
                  type="button" 
                  onClick={() => setStep(1)}
                  disabled={loading}
                  className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 rounded-xl transition-all text-xs"
                >
                  ← Back
                </button>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-2/3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-600/20 transition-all text-xs flex items-center justify-center"
                >
                  {loading ? 'Submitting...' : 'Confirm 3-Day Free Trial'}
                </button>
              </div>
            </div>
          )}
        </form>

      </div>
    </div>
  );
}