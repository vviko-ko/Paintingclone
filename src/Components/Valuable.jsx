import Bg from '../Image/heading-bg.png';

export default function Valuable() {
  return (
    <div className='flex flex-col md:flex-row gap-10 mt-8 px-4 md:px-10'>
      <div className='relative md:w-1/2'>
        <img src={Bg} alt="" className='absolute hidden md:block top-0 left-0 w-full' />
        <h1 className='relative font-bold text-2xl mb-8 text-center md:text-left'>What we provide our valuable customers:</h1>
        <ul className='list-disc ml-4 space-y-3 text-center md:text-left'>
          <li>Clean, friendly, and reliable service from our experts</li>
          <li>Complete painting and decorating services for your needs</li>
          <li>Ensure a 2-year guarantee on all our works</li>
          <li>30 years of experience in decoration and painting works</li>
          <li>Free personal on-site quotes to suit your requirements</li>
          <li>Plastering and carpentry options available</li>
        </ul>
      </div>
      <div className='md:w-1/2 text-justify'>
        <p className='mb-4'>
          Being a trusted and established painting and decorating company in Nigeria,
          our experts strive to deliver the best possible results to our clients.
          Our hard-working team communicates with clients and ensures to provide a
          clean and reliable service tailored to their needs.
        </p>
        <p className='mb-4'>
          We handle both residential and commercial painting and decorating projects
          and are happy to provide carpentry and plastering services when required.
        </p>
        <p className='mb-4'>
          Our offices are based in Lagos, Nigeria, and our team of professional painters
          and decorators offer quality services all over Nigeria and surrounding areas.
        </p>
        <p className='pb-10'>
          Our decorators and painters have attained success with several years of
          experience in residential and commercial property work through rigorous
          quality control and flexible working hours.
        </p>
      </div>
    </div>
  );
}
