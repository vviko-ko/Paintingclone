import React from 'react';
import externs from '../../Image/exter.png';
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar';
import { FaPhoneVolume } from 'react-icons/fa';
import external2 from '../../Image/exter2.png';
import bghero from '../../Image/bg-hero.png';

export default function External_Decor() {
    const navigate = useNavigate();
    return (
        <main>
            {/* Hero Section */}
            <div className="hero pt-12 bg-cover bg-center h-[395px] md:h-[500px] flex flex-col items-center md:items-start text-center md:text-left" style={{ backgroundImage: `url(${externs})` }}>
                <Navbar />
                <div className="mt-14 px-6 md:px-20 lg:px-44">
                    <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-[36px]">
                        Exterior Painters And Decorators
                    </h1>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-5 items-center">
                        <a href="tel:08081295005" className="flex items-center gap-3 border-2 border-white rounded-lg p-3 hover:bg-white hover:text-black transition duration-300">
                            <FaPhoneVolume className="text-white text-2xl md:text-[24px]" />
                            <span className="text-xl md:text-[24px] text-white font-bold">080 8129 5005</span>
                        </a>
                        <button
                            className="border border-white p-3 md:p-4 font-bold text-lg md:text-xl bg-white hover:bg-blue-300 text-black hover:text-white rounded-sm transition duration-300"
                            onClick={() => navigate("/contact")}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="bg-cover bg-center py-10 px-6 md:px-20 lg:px-32 text-center md:text-left" style={{ backgroundImage: `url(${bghero})` }}>
                <h1 className="text-4xl font-bold text-center mb-8">Exterior Painting and Decorating Services</h1>
                <div className='flex flex-col md:flex-row gap-8 md:gap-12 items-center'>
                    <p className="text-lg md:text-xl leading-relaxed">
                        Finding the right exterior painters and decorators can be a big challenge for anyone these days. 
                        With Paint Works London, you can now relax as your ideas are being realised by our efficient and 
                        trustworthy team of painters and decorators in London. We feel great pride in providing keen 
                        attention to every detail, and our high standards of professionalism make us stand out from our competitors.
                        <br /><br />
                        Whatever your requirements related to painting and decoration, we will work tirelessly to ensure 
                        everything is finished to meet your satisfaction.
                    </p>
                    <img src={external2} alt="Exterior Design" className='w-full md:w-[500px] h-auto md:h-[350px] rounded-sm shadow-lg' />
                </div>
            </div>

            {/* Services Section */}
            <div className="px-6 md:px-20 lg:px-32 text-center md:text-left mt-10">
                <h2 className='font-bold text-3xl mb-2'>Our exterior services consist of the following:</h2>
                <p className='border-b-4 border-blue-600 w-[100px] mx-auto md:mx-0'></p>
            </div>
        </main>
    );
}
