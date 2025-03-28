import { Dropdown } from "bootstrap";
import { useState } from "react";
import { FaPaintBrush, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Menu from './menu';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-4 shadow-md rounded-xl w-full">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <FaPaintBrush className="text-3xl text-white" />
          <span className="text-white text-2xl font-bold">VID</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white font-medium">
          <Link to="/" className="bg-white text-black px-4 py-1 rounded-full font-semibold">
            Home
          </Link>
          <Menu/>
          <Link to="/About" className="hover:underline">About Us</Link>
          <Link to="/Prices" className="hover:underline">Prices</Link>
          <Link to="/Photo" className="hover:underline">Photo Gallery</Link>
          
        </div>

        {/* Request Button (Hidden on Small Screens) */}
        <Link to="/StickyForm">
          <button className="hidden md:block bg-white text-black font-semibold px-4 py-2 rounded-full hover:bg-gray-700">
            Request a Quote
          </button>
        </Link>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 bg-white text-black w-full shadow-lg p-4 rounded-lg flex flex-col space-y-3">
          <Link to="/" className="font-semibold">Home</Link>
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="font-semibold mr-55">
            Our Services ⌄
          </button>
          {dropdownOpen && (
            <div className="flex flex-col pl-4">
              {[
                "Painting & Designs",
                "Wallpaper Hanging",
                "Commercial Decorating",
                "Interior Decorating",
                "External Decorating",
                "Laminate Floor Installers",
                "House Refurbishment",
                "Plastering",
                "Bathroom & Kitchen Tiling",
              ].map((service, index) => (
                <a key={index} href="#" className="block py-1 hover:text-gray-700">
                  {service}
                </a>
              ))}
            </div>
          )}
          <Link to="/About" className="hover:text-gray-700">About Us</Link>
          <Link to="/Prices" className="hover:text-gray-700">Prices</Link>
          <Link to="/Photo" className="hover:text-gray-700">Photo Gallery</Link>
          <Link to="/StickyForm">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full w-full hover:bg-blue-700">
              Request a Quote
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
