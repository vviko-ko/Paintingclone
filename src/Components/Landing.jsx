import React from 'react'
import Building from '../Image/Building.png'
import Profile from '../Image/Profile.png'
import Consult from '../Image/Consulation.png'
import Flex from '../Image/Drip.png'
import Work from '../Image/Work.png'
import Service from '../Image/Service.png'
import Service2 from '../Image/Service2.png'
import Service3 from '../Image/Service3.png'
import Service4 from '../Image/Service4.png'
import Serviceimg1 from '../Image/Service-img.png'
import Service2img2 from '../Image/Service-img2.png'
import Serviceimg3 from '../Image/Service-img3.png'
import Serviceimg4 from '../Image/Service-img4.png'
import Serviceimg5 from '../Image/Service-img5.png'
import Serviceimg6 from '../Image/Service-img6.png'
import Insipirator from './Insipirator'
import Footer from './Footer'


export default function Landing() {
  return (
    <div>
    <div className='flex mt-40 gap-20 ml-50'>
        <div>
            <h1 className='font-bold text-4xl'>Welcome To VID Paint Works <br />Nigeria</h1>
            <h3 className='font-bold mt-6 mb-2 text-2xl'>Your Trusted Painters and Decorators in Nigeria</h3>
            <p>At Paint Works Nigeria, we ensure to provide excellent <span className='text-red-500'>residential</span> and <br /> 
            <span className='text-red-500'>commercial</span> painting and decorating services leaving customers satisfied from <br /> beginning to end. For over 30 years, we are carrying out extensive range of <br /> <span className='text-red-500'>interior</span> and <span className='text-red-500'>exterior</span> painting solution in a professional, courteous and friendly <br /> manner. Our high-quality craftsmanship reflects through our service at affordable <br /> price. Visit our <span className='text-red-500'>price page</span> for the expense of your painting and decorating. Reach <br /> out to us for further query or send free quote request for <span className='text-red-500'>painting and decorating <br /> service in Nigeria.</span></p>
        </div>
        <div>
            <img src={Building} alt="" className='h-[300px] w-[400px]'/>
        </div>
    </div>
    <div className='flex mt-20 ml-50 gap-35'>
                <div className='flex'>
                    <img src={Profile} alt="" className='h-10 mr-3'/>
                    <p className='font-bold'>PDCA Certified <br /> Member</p>
                </div>
                <div className='flex'>
                    <img src={Consult} alt="" className='h-10 mr-3'/>
                    <p className='font-bold'>Free Color <br /> Consultation</p>
                </div>
                <div className='flex'>
                    <img src={Flex} alt="" className='h-10 mr-3'/>
                    <p className='font-bold'>Flexible Scheduling <br /> Options</p>
                </div>
                <div className='flex ml-8'>
                    <img src={Work} alt="" className='h-10 mr-3'/>
                    <p className='font-bold'>Maintain a Clean <br /> Work Area</p>
                </div>
    </div>
    <div className='mt-20'>
        <h1 className='text-3xl font-bold text-center'>Our Services</h1>
        <div className='flex ml-60 gap-40'>
            <div>
               <img src={Service} alt="" /> 
            <div>
                <h3 className='font-bold text-gray-300'><span className='text-blue-400 text-4xl'>01.</span>Painting and Decorating</h3>
                <p>We offer a customised service with expert finishing <br /> for all your painting and decorating.</p>
                <button className='bg-blue-500 p-4 rounded-[15px] hover:bg-red-400 mt-2'>Read More</button>
            </div>
            </div>
            <div className='mt-5'>
                <img src={Serviceimg1} alt="" className='rounded-[15px] h-[500px] w-[700px]'/>
            </div>
        </div>
        <div className='flex ml-60 gap-40 mt-8'>
            <div>
               <img src={Service2img2} alt=""  className='rounded-[15px] h-[500px] w-[700px] mt-10'/> 
            </div>
            <div className='mt-5'>
                <img src={Service2} alt=""/>
                <div>
                <h3 className='font-bold text-gray-300'><span className='text-blue-400 text-4xl'>02.</span>Wallpaper Hanging</h3>
                <p>Different materials are used for wallpaper hanging <br /> ensuring the best result for your home or office.</p>
                <button className='bg-blue-500 p-4 rounded-[15px] hover:bg-red-400 mt-2'>Read More</button>
            </div>
            </div>
        </div>
        <div className='flex ml-60 gap-40'>
            <div>
               <img src={Service3} alt="" /> 
            <div>
                <h3 className='font-bold text-gray-300'><span className='text-blue-400 text-4xl'>03.</span>Commercial Decorating</h3>
                <p>We carry out any kind of commercial decorating and <br /> painting works in a professional way.</p>
                <button className='bg-blue-500 p-4 rounded-[15px] hover:bg-red-400 mt-2'>Read More</button>
            </div>
            </div>
            <div className='mt-5'>
                <img src={Serviceimg3} alt="" className='rounded-[15px] h-[500px] w-[700px] mt-18'/>
            </div>
        </div>
        <div className='flex ml-60 gap-40 mt-8'>
            <div>
               <img src={Serviceimg4} alt=""  className='rounded-[15px] h-[500px] w-[700px] mt-10'/> 
            </div>
            <div className='mt-5'>
                <img src={Service4} alt=""/>
                <div>
                <h3 className='font-bold text-gray-300'><span className='text-blue-400 text-4xl'>04.</span>Domestic Decorating</h3>
                <p>Our painters will select exactly the right shades for <br /> domestic decoration to reflect your standards of living.</p>
                <button className='bg-blue-500 p-4 rounded-[15px] hover:bg-red-400 mt-2'>Read More</button>
            </div>
            </div>
        </div>
        <div className='flex ml-60 gap-40'>
            <div>
               <img src={Service3} alt="" /> 
            <div>
                <h3 className='font-bold text-gray-300'><span className='text-blue-400 text-4xl'>05.</span>Interior Decorating</h3>
                <p>Our decorators undertake all interior painting works, <br /> floor tiling and wallpapering to the highest standards.</p>
                <button className='bg-blue-500 p-4 rounded-[15px] hover:bg-red-400 mt-2'>Read More</button>
            </div>
            </div>
            <div className='mt-5'>
                <img src={Serviceimg5} alt="" className='rounded-[15px] h-[500px] w-[700px] mt-15'/>
            </div>
        </div>
        <div className='flex ml-60 gap-40 mt-8'>
            <div>
               <img src={Serviceimg6} alt=""  className='rounded-[15px] h-[500px] w-[700px] mt-10'/> 
            </div>
            <div className='mt-5'>
                <img src={Service4} alt=""/>
                <div>
                <h3 className='font-bold text-gray-300'><span className='text-blue-400 text-4xl'>06.</span>Exterior Decorating</h3>
                <p>Our professional painters will paint external walls to <br /> improve appearances, and prevent weather damage.</p>
                <button className='bg-blue-500 p-4 rounded-[15px] hover:bg-red-400 mt-2'>Read More</button>
            </div>
            </div>
        </div>
    </div>
    <Insipirator />
    </div>
  )
}
