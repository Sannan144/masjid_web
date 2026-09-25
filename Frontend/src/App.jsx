import { useState } from 'react'
import Navbar from './Navbar/Navbar.jsx'
import Hero from './Landing/Landing.jsx'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App