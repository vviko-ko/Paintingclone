import React from "react";
import Photobanner from "../Image/photo.banner.jpg";
import { FaPhoneVolume } from "react-icons/fa";
import Navbar from "./Navbar";
import bghero from "../Image/bg-hero.png";
import photoimage1 from "../Image/photo-img1.webp"
import StickyForm from "./StickyForm_prices";
import photoimage2 from "../Image/photo-img2.webp"
import photoimage3 from "../Image/photo-img3.webp"
import photoimage4 from "../Image/photo-img4.webp"
import photoimage5 from "../Image/photo-img-5.webp"
import photoimage6 from "../Image/photo-img6.webp"
import photoimage7 from "../Image/photo-img7.webp"
import photoimage8 from "../Image/photo-img8.webp"
import photoimage9 from "../Image/photo-img9.webp"
import photoimage10 from "../Image/photo-img10.webp"
import Footer from "./Footer";

function Photo() {
  return (
    <main>
      {/* Hero Section */}
      <div
        className="hero pt-12 bg-cover bg-center h-[395px] md:h-[500px]"
        style={{ backgroundImage: `url(${Photobanner})` }}
      >
        <Navbar />
        <div className="mt-14 ml-10 md:ml-44">
          <h1 className="text-white font-bold text-3xl md:text-[36px]">
            Photo Gallery
          </h1>
          <div className="flex gap-6 mt-5">
            <button className="flex items-center gap-3 border-2 border-white rounded-lg p-3 hover:bg-white hover:text-black transition duration-300">
              <FaPhoneVolume className="text-white text-[24px]" />
              <span className="text-[24px] text-white font-bold">
                080 8129 5005
              </span>
            </button>
            <button className="border border-white p-4 font-bold text-xl bg-white hover:bg-blue-300 text-black hover:text-white rounded-sm transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Second Background Section */}
      <div
        className=" bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${bghero})` }}
      >
        {/* photogallery */}
        <div className="ms-40 flex gap-15">
        <div>
            <img src={photoimage1} alt="" className="w-100 h-100 mt-10 " />
        </div>
        <div>
        <img src={photoimage2} alt="" className="w-100 h-100 mt-10 " />
        </div>
        </div>

        {/* stickform */}
        <div className="fixed top-20 right-5 z-50 ">
          <StickyForm />
        </div>
        {/* end of stickform  */}
        <div className="ms-40 flex gap-15">
        <div>
            <img src={photoimage3} alt="" className="w-100 h-100 mt-10 " />
        </div>
        <div>
        <img src={photoimage4} alt="" className="w-100 h-100 mt-10 " />
        </div>
        </div>
        {/* ---------- */}
        <div className="ms-40 flex gap-15">
        <div>
            <img src={photoimage5} alt="" className="w-100 h-100 mt-10 " />
        </div>
        <div>
        <img src={photoimage6} alt="" className="w-100 h-100 mt-10 " />
        </div>
        </div>
        {/* ------------ */}
        <div className="ms-40 flex gap-15">
        <div>
            <img src={photoimage7} alt="" className="w-100 h-100 mt-10 " />
        </div>
        <div>
        <img src={photoimage8} alt="" className="w-100 h-100 mt-10 " />
        </div>
        </div>
        {/* ---------------------- */}
        <div className="ms-40 flex gap-15 pb-10">
        <div>
            <img src={photoimage9} alt="" className="w-100 h-100 mt-10 " />
        </div>
        <div>
        <img src={photoimage10} alt="" className="w-100 h-100 mt-10 " />
        </div>
        </div>
        {/* --------------------- */}

        


      </div>
      <Footer/>

    </main>
  );
}

export default Photo;
