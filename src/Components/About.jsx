import React from 'react';
import Banner2 from '../Image/Banner2.png';
import Navbar from './Navbar';
import { FaPhoneVolume } from "react-icons/fa6";
import bghero from '../Image/bg-hero.png';
import about from '../Image/about.png';
import Footer from './Footer';

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <div 
        className="hero pt-12 bg-cover bg-center flex flex-col items-center text-center text-white"
        style={{ backgroundImage: `url(${Banner2})`, minHeight: '395px' }}
      >
        <Navbar />
        <div className="mt-14 ">
                 <h1 className="text-white font-bold text-[36px]">About</h1>
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

      {/* About Section */}
      <div 
        className="hero pt-12 bg-cover bg-center text-center px-6 md:px-20 lg:px-40"
        style={{ backgroundImage: `url(${bghero})`, minHeight: '800px' }}
      >
        <h1 className='font-bold text-3xl sm:text-5xl'>About Paint Works Nigeria</h1>
        <p className='mt-4 text-base sm:text-lg'>
          Painting and decorating homes have always been our passion. When we first started, which was thirty years ago, we took our time to study the basics of painting and decorating before going in full time.
        </p>
        <p className='mt-4 text-base sm:text-lg'>
          We began small; painting and decorating people's houses before delving into commercial painting and decor after some time.
        </p>
        <p className='mt-4 text-base sm:text-lg'>
          Our years of working on domestic buildings really taught us a lot of things that customers usually cared about, some of which include: neatness, reliability, reasonable price, beauty, and of course a perfect finish.
        </p>
        <p className='mt-5 text-base sm:text-lg'>
          Some years later our business grew because of demand, so we had to open up more offices in Nigeria while operating the home office smoothly.
        </p>

        <div className='flex flex-col md:flex-row items-center gap-8 mt-10'>
          <img src={about} alt="About Us" className='w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg' />
          <div className='text-left max-w-lg'>
            <p className='mt-4 text-base sm:text-lg'>
              We carved a niche for ourselves in the painting industry based on our creativity and style. Right now, Paint Works London has a good number of skilled decorators, painters, supervisors, and estimators. Our staff growth is commensurate with business expansion.
            </p>
            <p className='mt-4 text-base sm:text-lg'>
              At Paint Works London, we strive to maintain our quality services and loyalty to customers, knowing it is the key to continued patronage.
            </p>
            <p className='mt-5 text-base sm:text-lg'>
              We ask that you give us the chance to show our expertise in painting and decoration by hiring us. You can even get a free quote and estimate from one of our smart, reliable, and friendly estimators when you come to Paint Works Nigeria.
            </p>
            <p className='mt-5 text-base sm:text-lg pb-5'>We are looking forward to hearing from you.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer className='mt-25' />
    </main>
  );
}