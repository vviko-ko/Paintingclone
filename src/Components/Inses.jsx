import bg from '../Image/heading-bg.png'
import bg2 from '../Image/heading-bg2.png'
import ins1 from '../Image/ins1.png'
import ins2 from '../Image/ins2.png'
import ins3 from '../Image/ins3.png'
import ins4 from '../Image/ins4.png'
import contact from '../Image/contact.png'
import approved from '../Image/approved.png'
import job from '../Image/job.png'
import fix from '../Image/fix.png'
import arrow1 from '../Image/arrow1.png'
import arrow2 from '../Image/arrow2.png'
import write from '../Image/write.png'
import paint from '../Image/paint.png'
import inspect from '../Image/inspect.png'
import Valuable from './Valuable'

export default function Inses() {
  return (
    <div>
        <div className='mt-10'>
                <img src={bg} alt="" className='absolute item-center ml-170 top-1564'/>
                <h1 className='relative z-10 text-center text-2xl font-bold'>Insipration</h1>
                <div>
                    <div className='flex mt-10 justify-center gap-10'>
                        <div>
                            <img src={ins1} alt="" className=' rounded-lg h-[300px]'/>
                            <p className='relative -top-20 bg-white pl-5 ml-10 mr-10 pt-3 pb-3 font-semibold'>Each color has significance that we will express through <br /> your choice of paint and decoration.</p>
                        </div>
                        <div>
                          <img src={ins2} alt="" className='rounded-lg h-[300px]'/>
                          <p className='relative -top-20 bg-white pl-5 ml-10 mr-10 pt-3 pb-3 font-semibold'>Blues remind you of water or sky abd choosing a light to <br /> medium shade is soothing for the eyes.</p>
                        </div>
                    </div>
                    <div className='flex justify-center gap-5'>
                      <div>
                        <img src={ins3} alt="" className='rounded-lg h-[290px] w-[400px]'/>
                        <p className='relative -top-25 bg-white pl-2 ml-3 mr-10 pt-3  font-semibold'>We enjoy painting and decorating <br /> and believe in providing exceptional <br /> service for your home or office.</p>
                      </div>
                      <div className='bg-blue-400 rounded-lg h-[290px] w-[300px]'>
                        <h1 className='text-white font-bold text-3xl text-center mt-6 mb-10'>Our Promise</h1>
                        <p className='text-white text-center w-[290px] ml-1'>"We ensure to deliver quality and <br /> unique customer service for both <span>residential and commercial <br /></span>decoration and painting works."</p>
                      </div>
                      <div>
                      <img src={ins4} alt="" className='rounded-lg h-[290px] w-[380px]'/>
                        <p className='relative -top-25 bg-white pl-1 ml-8 mr-10 pt-3  font-semibold'>Our top priority is to leave your <br /> space clean and tidy after the end <br /> of every visit.</p>
                      </div>
                    </div>
                </div>
            </div>
        <div className='bg-gradient-to-r from-blue-500 to-green-500 pt-19 pb-25'>
          <div>
            <img src={bg2} alt="" className='absolute item-center ml-170 top-1783'/>
            <h1 className=' relative text-3xl font-bold text-white  text-center'>Our Painting and Decoration Process</h1>
          </div>
          <div className='flex gap-30 justify-center mt-15'>
            <div>
              <p className='text-white font-bold'>Contact us for a free <br /> <span className='ml-12'>quote</span></p>
              <img src={contact} alt="" className='rounded-full h-[200px] mt-14 border-green-500 border-4'/>
            </div>
            <div>
              <p className='text-white font-bold'>Approve the quote, pay <br /> a deposit and arrange <br /> <span className='ml-4'>a starting date</span></p>
              <img src={approved} alt="" className='rounded-full h-[200px] mt-8 border-green-500 border-4'/>
            </div>
            <div>
              <p className='text-white font-bold'>We clean up after the <br /> <span className='ml-4'>job is completed</span></p>
              <img src={job} alt="" className='rounded-full h-[200px] mt-14 border-green-500 border-4'/>
            </div>
            <div>
              <p className='text-white font-bold'>You make a final <br /> payment and enjoy <br /> your newly painted <br /> <span className='ml-8'>property</span></p>
              <img src={fix} alt="" className='rounded-full h-[200px] mt-2 border-green-500 border-4'/>
            </div>
          </div>
          <div>
            <img src={arrow1} alt="" className='absolute top-1880 left-72 mt-2'/>
            <img src={arrow2} alt="" className='absolute top-1880 left-112 mt-2'/>
            <img src={arrow1} alt="" className='absolute top-1880 left-152 mt-2'/>
            <img src={arrow2} alt="" className='absolute top-1880 left-192 mt-2'/>
            <img src={arrow1} alt="" className='absolute top-1880 left-232 mt-2'/>
            <img src={arrow2} alt="" className='absolute top-1880 left-282 mt-2'/>
          </div>
          <div className='flex'>
            <div>
              <img src={write} alt="" className='rounded-full h-[200px] mt-33 ml-85 border-green-500 border-4'/>
              <p className='text-white font-bold ml-88'>We do site survey if <br /> necessary and give you <br /> <span className='ml-10'>a quote</span></p>
            </div>
            <div>
              <img src={paint} alt="" className='rounded-full h-[200px] mt-33 ml-30 border-green-500 border-4'/>
              <p className='text-white font-bold ml-36'>We start the job on the <br /> <span className='ml-8'>agreed date</span></p>
            </div>
            <div>
              <img src={inspect} alt="" className='rounded-full h-[200px] mt-30 ml-35 border-green-500 border-4'/>
              <p className='text-white font-bold ml-41'><span className='ml-5'>You perform a</span> <br /> thorough inspection <br /> and let us know if you <br /> are happy with the our <br /> <span className='ml-10'>service</span></p>
            </div>
          </div>
        </div>
        <Valuable />
    </div>
  )
}
