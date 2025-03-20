import React from 'react';
import { FaPhoneVolume } from 'react-icons/fa';
import prices from '../Image/prices.png';
import bghero from '../Image/bg-hero.png';
import Navbar from './Navbar';
import pchero from '../Image/Prices-image.webp';
import StickyForm from './StickyForm_prices';
import Footer from './Footer';

function Prices() {
  return (
    <main>
      <div
        className="hero pt-12 bg-cover bg-center h-[395px] md:h-[500px]"
        style={{ backgroundImage: `url(${prices})` }}
      >
        <Navbar />
        <div className="mt-14 ml-6 md:ml-20 lg:ml-44 text-center md:text-left">
          <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-[36px]">Prices</h1>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-5 items-center md:items-start">
            <button className="flex items-center gap-3 border-2 border-white rounded-lg p-3">
              <FaPhoneVolume className="text-white text-2xl md:text-[24px]" />
              <span className="text-xl md:text-[24px] text-white font-bold">080 8129 5005</span>
            </button>
            <button className="border border-white p-3 md:p-4 font-bold text-lg md:text-xl bg-white hover:bg-blue-300 text-black hover:text-white rounded-sm transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      
      <div
        className="hero pt-12 bg-cover bg-center min-h-[800px] px-6 md:px-12"
        style={{ backgroundImage: `url(${bghero})` }}
      >
        <h1 className="font-bold text-3xl md:text-5xl mb-6 text-center md:text-left">
          Costs of Hiring a Painter and Decorator in Nigeria
        </h1>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <p className="font-semibold text-lg md:text-xl leading-relaxed">
            Painting and decoration works do not have fixed costs, and much of it depends on where you stay and the painter you choose. 
            The cost of hiring a painter and decorator in Nigeria might be almost four times higher than hiring one in other places. 
            An effective tip is to decide the amount of money you would lose when you take out time to do the work by yourself and then 
            compare the cost of hiring a painter.
          </p>
          <img src={pchero} alt="Painting Image" className="w-full md:w-1/2 rounded-lg" />
        </div>
      
        <div className="mt-12">
          <h2 className="text-3xl md:text-5xl font-bold">Average Painting and Decorating Rates for 2022</h2>
          <p className="text-lg md:text-xl mt-4 leading-relaxed">
            Below is a table of estimated prices for various painting and decorating services. If you want a customized quote, use our free and no-obligation quote service.
          </p>
        </div>
      
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse border border-gray-300 text-left text-sm md:text-base">
            <thead className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 text-white">
              <tr>
                <th className="border border-gray-300 p-4">Service</th>
                <th className="border border-gray-300 p-4">Duration</th>
                <th className="border border-gray-300 p-4">Cost</th>
                <th className="border border-gray-300 p-4">Location</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Interior Painting', '3 Days', '$500', 'Lagos'],
                ['Exterior Painting', '5 Days', '$800', 'Abuja'],
                ['Wallpaper Installation', '2 Days', '$300', 'Port Harcourt'],
                ['Decorative Finishing', '4 Days', '$700', 'Kano']
                
              ].map((row, index) => (
                <tr key={index} className="bg-white even:bg-gray-100">
                  {row.map((cell, i) => (
                    <td key={i} className="border border-gray-300 p-4">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      
        <div className="mt-12">
          <h2 className="text-3xl md:text-5xl font-bold">Consider the Costs of Painting and Decoration Works in Nigeria</h2>
          <p className="text-lg md:text-xl mt-4 leading-relaxed">
            When searching for a good painter and decorator in Nigeria, ensure you ask about costs upfront. 
            It’s common for painters to add a markup on materials to cover procurement costs and financial risks.
          </p>
        </div>
      
        <div className="mt-12">
          <h2 className="text-3xl md:text-5xl font-bold">Ask for Free Quotes from Our Painters and Decorators</h2>
          <p className="text-lg md:text-xl mt-4 leading-relaxed">
            More than just applying paint, painting and decorating involve skills and expertise. 
            Requesting multiple quotes allows you to compare and choose the best service provider for your needs.
          </p>
        </div>
      
        <div className="mt-12">
          <h2 className="text-3xl md:text-5xl font-bold">Costs to Pay for Your Painting and Decorating Works</h2>
          <p className="text-lg md:text-xl mt-4 leading-relaxed pb-10">
            Get in touch with painters and decorators in your area, request quotes, and compare rates to find the right professional for your project. 
            Our quote service is free and comes with no obligations.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Prices;