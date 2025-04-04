import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar';
import { FaPhoneVolume } from 'react-icons/fa';
import inter from '../../Image/inter.jpg';
import inter12 from '../../Image/inter12.webp';
import inter3 from '../../Image/inter3.webp'
import bghero from '../../Image/bg-hero.png';

function InteriorDecor() {
    const navigate = useNavigate();
    return (
        <main>
            {/* Hero Section */}
            <div 
                className="hero pt-12 bg-cover bg-center h-[395px] md:h-[500px] flex flex-col items-center md:items-start text-center md:text-left"
                style={{ backgroundImage: `url(${inter})` }}
            >
                <Navbar />
                <div className="mt-14 px-6 md:px-20 lg:px-44">
                    <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-[36px]">
                        Interior Painters And Decorators
                    </h1>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-5 items-center">
                        <a 
                            href="tel:08081295005" 
                            className="flex items-center gap-3 border-2 border-white rounded-lg p-3 hover:bg-white hover:text-black transition duration-300"
                        >
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
            <div 
                className="bg-cover bg-center py-10 px-6 md:px-20 lg:px-32 text-center md:text-left"
                style={{ backgroundImage: `url(${bghero})` }}
            >
                <h1 className="text-4xl font-bold text-center mb-8">Interior Painters and Decorators in Nigeria</h1>
                {/* <p className='border-b-4 border-blue-600 w-[100px] mx-auto md:mx-0'></p> */}
                <div className='flex flex-col md:flex-row gap-8 md:gap-12 items-center'>
                    <p className="text-lg md:text-xl leading-relaxed">
                        Painting and interior decoration of your home or office space in Nigeria is now easier than ever thanks to Paint Works Nigeria. 
                        As one of the most sought-after interior painters and decorators in Nigeria, we operate from our registered address at West Africa 
                        House and cater to a steadily expanding client base covering the entire city and nearby areas.
                        <br /><br />
                        Unlike average painters in Nigeria, our aim is to make your indoors clean and orderly so that the overall quality of life improves 
                        while you along with your family members or employees enjoy greater comfort. At Paint Works Nigeria, we are PDCA-certified. 
                        Our skilled and experienced painters and decorators possess in-depth expertise to cater to your tastes and needs.
                    </p>
                    <img src={inter12} alt="Interior Design" className='w-full md:w-[500px] h-auto md:h-[350px] rounded-sm shadow-lg' />
                </div>
                <p className="text-lg md:text-xl mt-6 leading-relaxed">
                    As one of the most reliable interior decorators in Nigeria, we value the trust that clients impose on us. Our creative experts never leave anything unattended
                    to ensure clients get higher value for their hard-earned money. At Paint Works Nigeria, we believe in innovation. Our experts spend enough time racking their brains
                    not only to make your home or office more attractive both from outside and inside but also to mirror your refined taste and choice in the process.
                </p>

                {/* section2 */}
                <h1 className="text-4xl font-bold pt-8 mb-8">Specialist Interior Painters and Decorators in Nigeria</h1>
                <p className='border-b-4 border-blue-600 w-[100px] mx-auto md:mx-0 '></p>
                <div className='flex flex-col md:flex-row pt-6 gap-8 md:gap-12 items-center'>
                    <p className="text-lg md:text-xl leading-relaxed">
                    At Paint Works Nigeria, painting and interior decoration are our passion. And as committed professionals, we have made our passion our profession. Before starting a project, we build a customised approach to provide your property with a unique identity that carries your signature identity.
                                                <br /><br /> 
                                                As a result, once a client remains a client across the ages. What is worth mentioning, our existing clients voluntarily gift us with volumes of referential business round the year.
                    </p>
                    <img src={inter3} alt="Interior Design" className='w-full md:w-[500px] h-auto md:h-[350px] rounded-sm shadow-lg' />
                </div>
                <p className="text-lg md:text-xl mt-6 leading-relaxed">
                They keep introducing us to their friends, colleagues and peers. Thus, we are one of the most widely trusted interior painters & decorators in London and its surrounding areas.
                </p>
            </div>
        </main>
    );
}

export default InteriorDecor;