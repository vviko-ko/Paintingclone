import React from "react";
import Banner from "../Image/Banner.png";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <main className="relative">
      <div
        className="hero pt-5 flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: `url(${Banner})`, height: "700px", backgroundSize: "cover" }}
      >
        <Navbar />

        {/* Hero section */}
        <section className="relative flex-grow flex flex-col  w-full">
          <div className="container mx-auto px-4 py-20 relative z-10">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              VOLUME INTERIOR DESIGNS <br className="sm:hidden" /> IN NIGERIA
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto font-semibold mt-5">
              Bring Your Home And Office To Lovely Colours
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 mt-6">
              <div className="relative flex lg:flex-col  gap-4 items-center lg:ms-70 lg:ps-70  ">
                {/* <img
                  src="https://www.paintworkslondon.co.uk/design/images/offer-tag.png"
                  alt="Offer Tag"
                  className="w-20 sm:w-24"
                /> */}
              <p className="text-white font-bold text-xl sm:text-2xl">Don't Doubt Us</p>
              <button className="bg-red-700 text-white p-3 rounded-xl hover:bg-blue-500">Shop Now</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
