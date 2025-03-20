import bg from '../Image/heading-bg.png';
import bg2 from '../Image/heading-bg2.png';
import ins1 from '../Image/ins1.png';
import ins2 from '../Image/ins2.png';
import ins3 from '../Image/ins3.png';
import ins4 from '../Image/ins4.png';
import contact from '../Image/contact.png';
import approved from '../Image/approved.png';
import job from '../Image/job.png';
import fix from '../Image/fix.png';
import arrow1 from '../Image/arrow1.png';
import arrow2 from '../Image/arrow2.png';
import write from '../Image/write.png';
import paint from '../Image/paint.png';
import inspect from '../Image/inspect.png';
import Valuable from './Valuable';

export default function Inses() {
  return (
    <div className="mt-10 px-4 md:px-10">
      <div className="relative text-center">
        <img src={bg} alt="" className="absolute inset-x-0 mx-auto hidden md:block" />
        <h1 className="relative z-10 text-2xl font-bold">Inspiration</h1>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
          {[ins1, ins2].map((img, index) => (
            <div key={index} className="relative">
              <img src={img} alt="" className="rounded-lg h-[300px] w-full" />
              <p className="absolute bottom-5 bg-white p-3 font-semibold mx-5 text-center shadow-lg">
                {index === 0
                  ? "Each color has significance that we will express through your choice of paint and decoration."
                  : "Blues remind you of water or sky and choosing a light to medium shade is soothing for the eyes."}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 justify-center">
          <div className="relative">
            <img src={ins3} alt="" className="rounded-lg w-full h-[290px]" />
            <p className="absolute bottom-5 bg-white p-3 font-semibold mx-3 text-center shadow-lg">
              We enjoy painting and decorating and believe in providing exceptional service for your home or office.
            </p>
          </div>
          <div className="bg-blue-400 rounded-lg h-[290px] flex flex-col justify-center items-center p-5 text-center text-white">
            <h1 className="font-bold text-3xl mb-4">Our Promise</h1>
            <p>
              "We ensure to deliver quality and unique customer service for both residential and commercial decoration and painting works."
            </p>
          </div>
          <div className="relative">
            <img src={ins4} alt="" className="rounded-lg w-full h-[290px]" />
            <p className="absolute bottom-5 bg-white p-3 font-semibold mx-3 text-center shadow-lg">
              Our top priority is to leave your space clean and tidy after the end of every visit.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-green-500 py-10 text-white text-center mt-10 rounded">
        <h1 className="text-3xl font-bold">Our Painting and Decoration Process</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10 px-4 md:px-20">
          {[contact, approved, job, fix].map((img, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={img} alt="" className="rounded-full h-[150px] md:h-[200px] border-4 border-green-500" />
              <p className="mt-4 font-bold">
                {[
                  "Contact us for a free quote",
                  "Approve the quote, pay a deposit and arrange a starting date",
                  "We clean up after the job is completed",
                  "You make a final payment and enjoy your newly painted property",
                ][index]}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-20">
          {[write, paint, inspect].map((img, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={img} alt="" className="rounded-full h-[150px] md:h-[200px] border-4 border-green-500" />
              <p className="mt-4 font-bold text-center">
                {[
                  "We do site survey if necessary and give you a quote",
                  "We start the job on the agreed date",
                  "You perform a thorough inspection and let us know if you are happy with our service",
                ][index]}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Valuable />
    </div>
  );
}