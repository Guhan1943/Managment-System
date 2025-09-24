import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Signup from './components/Sign-up/Signup'
import Login from './components/Loginpage/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login  />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
