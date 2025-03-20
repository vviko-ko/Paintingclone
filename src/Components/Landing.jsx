import React from 'react';
import Building from '../Image/Building.png';
import Profile from '../Image/Profile.png';
import Consult from '../Image/Consulation.png';
import Flex from '../Image/Drip.png';
import Work from '../Image/Work.png';
import Service from '../Image/Service.png';
import Service2 from '../Image/Service2.png';
import Service3 from '../Image/Service3.png';
import Service4 from '../Image/Service4.png';
import Serviceimg1 from '../Image/Service-img.png';
import Service2img2 from '../Image/Service-img2.png';
import Serviceimg3 from '../Image/Service-img3.png';
import Serviceimg4 from '../Image/Service-img4.png';
import Serviceimg5 from '../Image/Service-img5.png';
import Serviceimg6 from '../Image/Service-img6.png';
import Insipirator from './Insipirator';
import Footer from './Footer';

export default function Landing() {
  return (
    <div className="px-4 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row mt-20 gap-10 lg:gap-20">
        <div>
          <h1 className="font-bold text-3xl md:text-4xl">Welcome To VID Paint Works Nigeria</h1>
          <h3 className="font-bold mt-4 text-xl md:text-2xl">Your Trusted Painters and Decorators in Nigeria</h3>
          <p className="mt-4 text-gray-700 text-sm md:text-base">
            At Paint Works Nigeria, we ensure to provide excellent <span className="text-red-500">residential</span> and 
            <span className="text-red-500">commercial</span> painting and decorating services, leaving customers satisfied from 
            beginning to end...
          </p>
        </div>
        <div>
          <img src={Building} alt="Building" className="h-60 w-full max-w-sm lg:h-80" />
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {[{img: Profile, text: 'PDCA Certified Member'}, {img: Consult, text: 'Free Color Consultation'}, {img: Flex, text: 'Flexible Scheduling Options'}, {img: Work, text: 'Maintain a Clean Work Area'}].map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <img src={item.img} alt="icon" className="h-10" />
            <p className="font-bold text-center">{item.text}</p>
          </div>
        ))}
      </div>
      
      <h1 className="text-3xl font-bold text-center mt-10">Our Services</h1>
      <div className="flex flex-col gap-10 mt-10">
        {[{service: Service, img: Serviceimg1, title: 'Painting and Decorating', desc: 'We offer a customised service with expert finishing...'},
          {service: Service2, img: Service2img2, title: 'Wallpaper Hanging', desc: 'Different materials are used for wallpaper hanging...'},
          {service: Service3, img: Serviceimg3, title: 'Commercial Decorating', desc: 'We carry out any kind of commercial decorating...'},
          {service: Service4, img: Serviceimg4, title: 'Domestic Decorating', desc: 'Our painters will select exactly the right shades...'},
          {service: Service3, img: Serviceimg5, title: 'Interior Decorating', desc: 'Our decorators undertake all interior painting works...'},
          {service: Service4, img: Serviceimg6, title: 'Exterior Decorating', desc: 'Our professional painters will paint external walls...'}]
          .map((item, index) => (
            <div key={index} className={`flex flex-col lg:flex-row ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} items-center gap-10`}>
              <img src={item.img} alt={item.title} className="rounded-xl h-64 md:h-80 w-full max-w-lg" />   
              <div className="text-center lg:text-left">
                <img src={item.service} alt={item.title} className="h-16 mx-auto lg:mx-0" />
                <h3 className="font-bold text-gray-600 mt-4 text-xl md:text-2xl">
                  <span className="text-blue-500 text-3xl md:text-4xl">{(index + 1).toString().padStart(2, '0')}.</span> {item.title}
                </h3>
                <p className="mt-2 text-gray-700">{item.desc}</p>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-red-400 mt-4">Read More</button>
              </div>
            </div>
          ))}
      </div>
      
      <Insipirator />
    </div>
  );
}
