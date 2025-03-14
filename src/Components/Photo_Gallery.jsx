import React from "react";
import Photobanner from "../Image/photo.banner.jpg"
import { FaPhoneVolume } from 'react-icons/fa';
import Navbar from "./Navbar";

function Photo(){
    return(
        <main>
            <div
                    className="hero pt-12 bg-cover bg-center h-[395px] md:h-[500px]"
                    style={{ backgroundImage: `url(${Photobanner})` }}
                  >
                    <Navbar />
                    <div className="mt-14 ml-44">
                      <h1 className="text-white font-bold text-[36px]">Photo Gallery</h1>
                      <div className="flex gap-6 mt-5">
                        <button className="flex items-center gap-3 border-2 border-white rounded-lg p-3">
                          <FaPhoneVolume className="text-white text-[24px]" />
                          <span className="text-[24px] text-white font-bold">080 8129 5005</span>
                        </button>
                        <button className="border border-white p-4 font-bold text-xl bg-white hover:bg-blue-300 text-black hover:text-white rounded-sm transition duration-300">
                          Contact Us
                        </button>
                      </div>
                    </div>
                  </div>
        </main>
    )
}

export default Photo