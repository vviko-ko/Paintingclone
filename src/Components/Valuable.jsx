import Bg from '../Image/heading-bg.png';

export default function Valuable() {
  return (
    <div className='flex gap-40 mt-8'>
        <div className='ml-50'>
            <img src={Bg} alt="" className='absolute ml-45 top-2030 leading-1'/>
            <h1 className='relative font-bold text-2xl mb-8'>What we provide our variable customers:</h1>
            <ul className='list-disc ml-4'>
                <li className='mb-3'>Clean, friendly and reliable service from our experts</li>
                <li className='mb-3'>Complete painting and decorating services for your need</li>
                <li className='mb-3'>Ensure 2 year guarantee on all our works</li>
                <li className='mb-3'>30 years of experience in decoration and painting works</li>
                <li className='mb-3'>Free personal on-site quotes to suit your requirement</li>
                <li className='mb-3'>Plastering and carpentry options available</li>
            </ul>
        </div>
        <div>
            <p className='mb-4 mt-2'>Being a trusted and established painters and decorators company in <br /> Nigeria, our experts try to deliver the best possible results to the clients. <br /> Our hard-working team communicate with the clients and ensure to <br /> provide clean and reliable service for their needs.</p>
            <p className='mb-4'>We deal with both residential and commercial painting and decorating <br /> works and are happy to provide carpentry and plastering work when <br /> required.</p>
            <p className='mb-4'>Our offices are based in Lagos, Nigeria, and our team of professional <br /> painters and decorators offer their quality services all over Nigeria and <br /> Surrounding areas.</p>
            <p>Our decorators and painters have attained success with several years <br /> of experience in residential and commercial property works through <br /> rigorous quality control and flexible hours of working.</p>
        </div>
    </div>
  )
}
