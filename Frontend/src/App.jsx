import { useState } from "react"
import Hero from "./Hero/Hero"
import Navbar from "./Navbar/Navbar"
import TrialModal from "./TrialModal/TrialModal"
import Courses from "./Courses/Courses"
import Login from "./Login/Login"
import AdminDashboard from "./Admin_panel/AdminDashboard"

function App() {
const [isOpen , setIsOpen] = useState(false)
const [isLogin , setIsLogin] = useState(false)

let onClose = ()=>{
  setIsOpen(false)
}

  return (
    <>
      {/* {
        isLogin && <Login setIsLogin={setIsLogin}/>
      }
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} setIsLogin={setIsLogin}/>
      <Hero/>
      <TrialModal isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose}/>
      <Courses isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose}/>
       */}
    
        <AdminDashboard/>

    </>
  )
}

export default App