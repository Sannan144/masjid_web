import { useState } from 'react';
import axios from 'axios';

export default function Login({ setIsLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);
      
      if (response.data.success) {
        setMessage('Login successful!');
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage(error.response?.data?.error || 'Invalid email or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4 font-sans">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl border border-slate-100 relative">
        
        <button 
          type="button"
          onClick={() => setIsLogin(false)}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 text-xl font-bold p-2 transition-colors"
        >
          ✕
        </button>

        <div className="mb-8 text-center">
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Admin Portal
          </span>
          <h2 className="text-2xl font-black text-slate-900 mt-2">Welcome Back</h2>
          <p className="text-xs text-slate-500 mt-1">Please enter your credentials to login</p>
        </div>

        {message && (
          <div className={`mb-4 p-3 rounded-xl text-xs font-bold text-center ${
            message.includes('successful') ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'
          }`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
            <input 
              type="email" 
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@tarteel.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Password</label>
            <input 
              type="password" 
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-600"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-600/20 transition-all text-sm flex items-center justify-center mt-6"
          >
            {loading ? 'Logging in...' : 'Sign In'}
          </button>
        </form>

      </div>
    </div>
  );
}