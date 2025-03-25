import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link

export default function ServicesDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const services = [
    { name: "Painting & Designs", link: "/Our-services/Painting_Design" },
    { name: "Wallpaper Hanging", link: "/Our-services/Wallpaper_Hanging" },
    { name: "Commercial Decorating", link: "/Our-services/Commercial_Decorating" },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="text-white rounded-md focus:outline-none flex items-center space-x-1"
        onClick={() => setDropdownOpen((prev) => !prev)}
      >
        <p>Our Services</p>
        <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={27} />
        </motion.div>
      </button>

      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-0 mt-2 w-56 bg-white text-black rounded-lg shadow-lg border"
          >
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link} // Using React Router Link
                className="block px-4 py-2 hover:bg-gray-200 transition duration-200"
                onClick={() => setDropdownOpen(false)} // Close dropdown on selection
              >
                {service.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
