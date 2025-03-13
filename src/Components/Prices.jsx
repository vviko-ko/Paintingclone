import React from 'react'
import prices from '../Image/prices.png'
import Navbar from './Navbar'

export default function Prices() {
  return (
    <div className="hero pt-12" style={{ backgroundImage: `url(${prices})`, height: '395px'}}>
        <Navbar />
    </div>
  )
}
