import React from 'react'
// import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Landing from './Components/Landing'
import Inses from './Components/Inses'
import Footer from './Components/Footer'
import About from './Components/About'
import Prices from './Components/Prices'
import Photo from './Components/Photo_Gallery'
import Home from './Components/Home'
import Painting from './Components/Our services/Painting_Design'
import ExternalDecor from "./Components/Our services/ExternalDecor";
import InteriorDecor from './Components/Our services/Interior_Decor';
// import Exter_Decor from './Components/Our services/ExternalDecor'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import StickyForm from './Components/StickyForm_prices'

export default function App() {
  return (
    <div>
      {/* <Navbar /> */}

      <BrowserRouter>
{/* 
      <Link to={"/"}>Home</Link>
      <Link to="/about">About</Link>
      <link to="/prices">Prices</link> */}
    

    
    

    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/prices" element={<Prices/>}></Route>
    <Route path='/Photo' element={<Photo/>}></Route>
    <Route path='/StickyForm' element={<StickyForm/>}></Route>
    <Route path='/Painting' element={<Painting/>}></Route>
    <Route path="/Our-services/External_Decor" element={<ExternalDecor />} />
    <Route path='/Our-services/Interior_Decor' element={<InteriorDecor/>} />
    {/* <Route path="/Our-services/External_Decor" element={<External_Decor/>} /> */}
    {/* <Route path='/Exter_Decor' element={<ExterDecor/>}></Route> */}
  </Routes>
  </BrowserRouter>
    </div>
  )
}
