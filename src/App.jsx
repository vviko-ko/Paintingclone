import React from 'react'
// import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Landing from './Components/Landing'
import Inses from './Components/Inses'
import Footer from './Components/Footer'
import About from './Components/About'
import Home from './Components/Home'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

export default function App() {
  return (
    <div>
      {/* <Navbar /> */}

      <BrowserRouter>

      <Link to={"/"}>Home</Link>
      <Link to="/about">About</Link>
    
    
    

    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
  </Routes>
  </BrowserRouter>
    </div>
  )
}
