import React from "react";
import Banner from "../Image/Banner.png";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <main className="relative">
      <div className="hero pt-12" style={{ backgroundImage: `url(${Banner})`, height: '700px', backgroundSize: 'cover'}} >
        <Navbar/>
        {/* Hero section */}
        <section className="relative flex-grow flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
          >
            <div className="absolute "></div>
          </div>

          <div className="container mx-auto px-4 py-20 relative z-10 ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white  leading-tight ml-155">
              VOLUME INTERIOR DESIGNS <span className="ml-55">IN NIGERIA</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-2 mx-auto ml-170 font-semibold mt-5">
              Bring Your Home And Office To Lovely Colours
            </p>
            <div className="flex flex-col sm:flex-row gap-60 justify-center">
              <p className="bg-primary hover:bg-primary/90 text-white px-8">
                <img
                  src="https://www.paintworkslondon.co.uk/design/images/offer-tag.png"
                  alt=""
                  className="absolute mb-30 left-168 top-72"
                />
              </p>
              <p className="relative top-13 ml-70 text-white font-bold text-2xl">Don't Doubt us</p>
              <p className="bg-red-500 text-white hover:text-black font-bold mt-11 p-5 rounded-lg hover:bg-blue-500">
                BOOK NOW
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
