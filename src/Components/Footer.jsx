import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 p-8 md:p-12">
      {/* Footer Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <p className="text-white">
            We are a top painting and decoration company in Nigeria, providing
            high-quality services for homes and offices. Contact us to restore
            warmth and beauty to your property.
          </p>
        </div>

        {/* Services Section */}
        <div>
          <h1 className="font-bold text-lg text-white mb-3">Our Services</h1>
          <ul className="text-white space-y-2">
            <li className="hover:text-black">Painting & Decorating</li>
            <li className="hover:text-black">Wallpaper Hanging</li>
            <li className="hover:text-black">Commercial Decorating</li>
            <li className="hover:text-black">Interior Design</li>
            <li className="hover:text-black">External Design</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h1 className="font-bold text-lg text-white mb-3">Quick Links</h1>
          <ul className="text-white space-y-2">
            <li className="hover:text-black">Home</li>
            <li className="hover:text-black">Our Services</li>
            <li className="hover:text-black">Prices</li>
            <li className="hover:text-black">Blog</li>
            <li className="hover:text-black">Contact Us</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h1 className="font-bold text-lg text-white mb-3">Contact Info</h1>
          <p className="text-white">
            <span className="font-bold">Address:</span> 248 Linen Hall, 162-168
            Regent St., London W1B 5TB
          </p>
          <p className="text-white">
            <span className="font-bold">Email:</span> info@paintworkslondon.co.uk
          </p>
          <p className="text-white">
            <span className="font-bold">Phone:</span> 080 8129 5005
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white my-6"></div>

      {/* Locations Section */}
      <div>
        <h1 className="text-white font-bold text-lg">Locations</h1>
        <div className="flex flex-wrap gap-4 mt-3">
          {["Lagos", "Ibadan", "Ijebu-Ode", "Ijebu-Ife", "Ago"].map((location, index) => (
            <div key={index} className="flex items-center text-white">
              <FaChevronRight className="mr-2" /> {location}
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white my-6"></div>

      {/* Social Media */}
      <h2 className="text-white font-bold text-lg text-center">Follow Us On Social Media</h2>
      <div className="flex justify-center gap-5 text-white text-3xl mt-3">
        <FaSquareWhatsapp />
        <FaInstagramSquare />
        <FaFacebook />
        <AiFillTikTok />
      </div>
    </div>
  );
}
