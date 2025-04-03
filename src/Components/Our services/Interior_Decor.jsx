import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar';
import { FaPhoneVolume } from 'react-icons/fa';
import inter from '../../Image/inter.jpg';
import inter12 from '../../Image/inter12.webp';
import bghero from '../../Image/bg-hero.png';

function InteriorDecor(){
    const navigate = useNavigate()
    return(
        <main>
             <div className="hero pt-12 bg-cover bg-center h-[395px] md:h-[500px]" style={{ backgroundImage: `url(${inter})` }}>
                                    <Navbar />
                                    <div className="mt-14 ml-6 md:ml-20 lg:ml-44 text-center md:text-left">
                                        <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-[36px]">Interior Painters And Decorators</h1>
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
                     <div className="" style={{backgroundImage: `url(${bghero})`, height: '500px'}}>
                     <h1 className="text-4xl font-bold text-center mt-7 mb-8">Interior Painters and Decorator Nigeria</h1>
                      <div className='flex ml-50 gap-12 text-xl'>
                                 <p>Painting and interior decoration of your home or office space in London is now easier than ever thanks to Paint Works London. As one of the most sought after interior painters and decorators in London, we operate from our registered address at West Africa House and cater to a steadily expanding client base covering the entire city and the nearby areas.</p>
                                 <img src={inter12} alt="" className='w-[500px] h-[350px] rounded-sm'/>
                    </div>
                     </div>
        </main>
    )
}

export default InteriorDecor;