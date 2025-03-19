import React, { useState } from "react";
import Photobanner from "../Image/photo.banner.jpg";
import { FaPhoneVolume } from "react-icons/fa";
import Navbar from "./Navbar";
import bghero from "../Image/bg-hero.png";
import Footer from "./Footer";

import photoimage1 from "../Image/photo-img1.webp";
import photoimage2 from "../Image/photo-img2.webp";
import photoimage3 from "../Image/photo-img3.webp";
import photoimage4 from "../Image/photo-img4.webp";
import photoimage5 from "../Image/photo-img-5.webp";
import photoimage6 from "../Image/photo-img6.webp";
import photoimage11 from "../Image/photo-img8.webp";
import photoimage8 from "../Image/photo-img9.webp";

const galleryImages = [
  photoimage1, photoimage2, photoimage3, photoimage4, photoimage5,
  photoimage6, photoimage11, photoimage8,
];

function Photo() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main>
      <div
        className="hero pt-12 bg-cover bg-center h-[310px] md:h-[400px]"
        style={{ backgroundImage: `url(${Photobanner})` }}
      >
        <Navbar />
        <div className="mt-14 ml-10 md:ml-44">
          <h1 className="text-white font-bold text-4xl md:text-[36px]">
            Photo Gallery
          </h1>
          <div className="flex gap-6 mt-5">
            <button className="flex items-center gap-3 border-2 border-white rounded-lg p-3 hover:bg-blue-500 hover:text-black transition duration-300">
              <FaPhoneVolume className="text-white text-[24px]" />
              <span className="text-[15px] text-white font-bold">
                080 8129 5005
              </span>
            </button>
            <button className="border border-white p-4 font-bold text-xl bg-white hover:bg-blue-300 text-black hover:text-white rounded-sm transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-center min-h-screen px-10 md:px-40 py-16"
        style={{ backgroundImage: `url(${bghero})` }}
      >
        <div className="text-5xl font-bold text-center pb-9">
          <h1>Here's a display of our work</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative max-w-4xl">
            <img src={selectedImage} alt="Selected" className="w-full h-auto rounded-lg" />
            <button
              className="absolute top-3 right-3 text-white text-2xl bg-black bg-opacity-50 px-3 py-1 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

export default Photo;
