import {useState}from 'react'
import { FaPaintBrush } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import About from '../Components/About.jsx';

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center" >
         <nav className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-4 flex items-center justify-between shadow-md rounded-xl pt-[25px] pb-[25px] w-[1200px]">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <FaPaintBrush className="text-3xl text-white" />
        <span className="text-white text-2xl font-bold">VID</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-white font-medium">
        <span className="bg-white text-black px-4 py-1 rounded-full font-semibold ml-10">Home</span>
        <div className="relative">
            <button
              className="text-white focus:outline-none"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
             <Link to='/'> Our Services ⌄</Link>
            </button>
            {dropdownOpen && ( 
              <div className="absolute left-0 mt-5 w-48 bg-white text-black rounded-lg shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Painting & Designs</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Wallpaper Hanging</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Commercial Decorating</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Interior Decorating</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">External Decorating</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Laminate Floor Installers</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">House Refurbishment</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Plastering</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">bathroom And Kitchen Tiling</a>
              </div>
            )}
          </div>

        <Link to='/About'><span className="cursor-pointer hover:">About Us</span></Link>
       <Link to='/'><span className="hover:underline cursor-pointer">Prices</span></Link>
        <span className="hover:underline cursor-pointer">Photo Gallery</span>
      </div>

      {/* Request Button */}
      <button className="bg-white text-black font-semibold px-4 py-2 rounded-full hover:bg-gray-700 hidden md:block ml-45">
        Request a Quote
      </button>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)} >
        {dropdownOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-0 bg-white text-black w-48 shadow-lg p-4 rounded-lg flex flex-col space-y-3 md:hidden">
          <span className="font-semibold">Home</span>
          <span className="hover:text-gray-700 cursor-pointer">Our Services</span>
          <span className="hover:text-gray-700 cursor-pointer">About Us</span>
          <span className="hover:text-gray-700 cursor-pointer">Prices</span>
          <span className="hover:text-gray-700 cursor-pointer">Photo Gallery</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Request a Quote</button>
        </div>
      )} 
    </nav>
    </div>
  )
}
