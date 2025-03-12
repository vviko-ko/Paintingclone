import React from 'react'
import Banner2 from '../Image/Banner2.png'
import Navbar from './Navbar'
import { FaPhoneVolume } from "react-icons/fa6";
import bghero from '../Image/bg-hero.png'
import about from '../Image/about.png'
import Footer from './Footer';
export default function About() {
  return (
    <main>
        <div className="hero pt-12" style={{ backgroundImage: `url(${Banner2})`, height: '395px'}}>
            <Navbar />
            <div className='mt-15 ml-45'>
                <h1 className='text-white font-bold text-[36px]'>About Us</h1>
                <div className='flex gap-6 mt-5'>
                    <button className='flex gap-3 border-2 border-white rounded-lg p-3'><FaPhoneVolume className='text-white text-[24px] mt-1.5'/><span className='text-[24px] text-white font-bold'>080 8129 5005</span></button>
                    <button className='border border-white p-4 font-bold text-xl bg-white hover:text-blue-300 rounded-sm'>Contact Us</button>
                </div>
            </div>
        </div>
        <div  className="hero pt-12" style={{ backgroundImage: `url(${bghero})`, height: '800px'}}>
            <h1 className='font-bold text-5xl text-center'>About Paint Works Nigeria</h1>
            <p className='ml-60 mt-2'>Painting and decorating homes have always been our passion. When we first started, which was thirty years ago, we took our time to study the basics of <br /> painting and decorating before going in full time.</p>
            <p className='ml-60 mt-4'>We began small; painting and decorating people's houses before delving into commercial painting and decor after some time.</p>
            <p className='ml-60 mt-4'>Our years of working on domestic buildings really taught us a lot of things that customers usually cared about, some of which include: neatness, reliability, <br /> reasonable price, beauty, and of course a perfect finish. Trust us to concentrate on that, and we would like to believe that we are good at it.</p>
            <p className='ml-60 mt-5'>Some years later our business grew because of demand so, we had to open up more offices in Nigeria while operating the home office smoothly.</p>
            <div className='flex gap-8 mb-30'>
                <div>
                    <img src={about} alt="" className='max-w[100%] h-[350px] ml-60 mt-4 rounded-lg'/>
                </div>
                <div className='font-semibold'>
                    <p className='mt-8'>We carved a niche for ourselves in the painting industry based on our <br /> creativity and style. Right now, Paint Works London has a good number of <br /> skilled decorators, painters, supervisors, and estimators. Our staff growth is <br /> commensurate with business expansion.</p>
                    <p className='mt-4'>At Paint Works London, we strive to maintain our quality services and loyalty <br /> to customers, knowing it is the key to continued patronage.</p>
                    <p className='mt-5'>We ask that you give us the chance to show our expertise in painting and <br /> decoration by hiring us. You can even get a free quote and estimate from <br /> one of our smart, reliable, and friendly estimators when you come to Paint <br /> Works Nigeria.</p>
                    <p className='mt-5'>We are looking forward to hearing from you.</p>
                </div>
            </div>
        </div>
        <Footer className='mt-25'/>
    </main>
         
  )
}
