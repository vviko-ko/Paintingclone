import React from 'react';
import { FaPhoneVolume } from 'react-icons/fa';
import { useNavigate } from "react-router-dom"; // Import useNavigate
import painting from './our services images/painting.jpg';
import Navbar from '../Navbar';
import bghero from './our services images/bg-hero.png';
import pdhero from './our services images/painting-and-decorating1.webp'
import { color } from 'framer-motion';

function Painting() {
    const navigate = useNavigate(); // Hook for navigation

    return (
        <main>
            <div className="hero pt-12 bg-cover bg-center h-[395px] md:h-[500px]" style={{ backgroundImage: `url(${painting})` }}>
                <Navbar />
                <div className="mt-14 ml-6 md:ml-20 lg:ml-44 text-center md:text-left">
                    <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-[36px]">Painting</h1>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-5 items-center md:items-start">
                        <a href="tel:08081295005" className="flex items-center gap-3 border-2 border-white rounded-lg p-3 hover:bg-white hover:text-black transition duration-300">
                            <FaPhoneVolume className="text-white text-2xl md:text-[24px]" />
                            <span className="text-xl md:text-[24px] text-white font-bold">080 8129 5005</span>
                        </a>
                        <button
                            className="border border-white p-3 md:p-4 font-bold text-lg md:text-xl bg-white hover:bg-blue-300 text-black hover:text-white rounded-sm transition duration-300"
                            onClick={() => navigate("/contact")} // Navigate to contact page
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>  
            {/* -------------- */}
            <div className="hero pt-12 bg-cover bg-center min-h-[800px] px-6 md:px-12" style={{ backgroundImage: `url(${bghero})` }}>
            <h1 className="font-bold text-3xl md:text-5xl mb-6 text-center md:text-left">
                Painting and Design Services
            </h1>
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                       <img src={pdhero} alt="Painting Image" className="w-full md:w-1/2 rounded-lg" />
                       <p className=" text-lg md:text-xl leading-relaxed ">
                      Our homes and offices reflect our lives — they are places we spend a lot of our time. They need to be clean and well managed so that our quality of life and that of the people working or living with us are comfortable.

                      <br />
                      It is therefore, essential that homes and offices are well painted and decorated.Hiring a good <span>painting and decorating company</span> is necessary if you want to have a good job done. You can trust Paint Works London to carry out the best painting and decorating. We are a PDCA certified member; and offer the best quality of painting and decoration. Contact us today to discuss your painting and decoration in Nigeria.
                      </p>
                    </div>
                    <div>
                        <p className='text-lg md:text-xl leading-relaxed pt-5'>
                        Our painters are always ready to give your home and office that touch of class. Call us now on <span>02071833809 </span> 
                        </p>
                    </div>
                  {/* ---------- */}
                  {/* text and button */}
                  {/* ---------3rd section */}
            <h1 className="font-bold text-3xl md:text-5xl mb-6 text-center md:text-left pt-5">
                Professional Painting and Decorating
            </h1>
            <p className='text-lg md:text-xl leading-relaxed '>
            There will be many painters and decorators in your area, but it can be hard to find a professional painting and decorating company that can provide you with an expert finish to any painting and decorating work in London. Paint Works London provides quality painting and decoration for homes and offices. We offer one of the best painting and decorating services in London. We are certified PDCA members.
            </p>
            <p className='text-lg md:text-xl leading-relaxed pt-5'>
            When you want to give your house or office a new look, our painters are here to offer the best decorating services in the London area. We understand that you work hard for your money, that is why we make our services very affordable and offer the best quality result for every penny spent.
            </p>
            </div>
        </main>
    );
}

export default Painting;
