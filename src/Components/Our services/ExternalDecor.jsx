import React from 'react'
import externs from '../../Image/exter.png'
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar';
import { FaPhoneVolume } from 'react-icons/fa';
import external2 from '../../Image/exter2.png';
import bghero from '../../Image/bg-hero.png';

export default function External_Decor() {
    const navigate = useNavigate();
  return (
    <main>
        <div className="hero pt-12 bg-cover bg-center h-[395px] md:h-[500px]" style={{ backgroundImage: `url(${externs})` }}>
                        <Navbar />
                        <div className="mt-14 ml-6 md:ml-20 lg:ml-44 text-center md:text-left">
                            <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-[36px]">Exterior Painters And Decorators</h1>
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
          <h1 className="text-4xl font-bold text-center mt-7 mb-8">Exterior Painting and Decorating Services</h1>
          <div className='flex ml-60 gap-12 text-xl'>
            <p>Finding the right exterior painters and decorators <br /> can be a big challenge for anyone these days. <br />
             With Paint Works London, you can now relax as <br /> your ideas are being realised by our efficient and <br /> trustworthy team of painters and decorators in <br /> London. We feel great pride for providing keen <br /> attention in every detail and our high standards of <br /> professionalism make us stand out from our <br /> competitors. Whatever might be your requirements <br /> related to painting and decoration, we will work tirelessly <br /> to ensure everything is finished to meet your satisfaction.</p>
            <img src={external2} alt="" className='w-[500px] h-[350px] rounded-sm'/>
          </div>
        </div>
        <h2 className='font-bold text-3xl ml-60 mb-2'>Our exterior services consist of the following:</h2>
        <p className='border-b-4 border-blue-600 w-[100px] ml-60'></p>
    </main>
  )
}
