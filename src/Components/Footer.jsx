import React from 'react'

export default function Footer() {
  return (
    <div className='bg-gradient-to-r from-blue-500 via-purple-500 to-green-500  pb-40 p-40'> 
    <div className='flex  gap-20 w-[100opx] mt-15'>
        <div>
            <p className='text-white mt-7 w-[250px]'>We are the top painting and decoration companies in Nigeria where our experts offer unparalled and quality service to paint the walls and ceilings of your home and office. Get in touch with use to restore the warmth and beauty of your property.</p>
        </div>
        <div>
            <h1 className='font-bold text-2xl text-white mb-5'>Our Services</h1>
            <ul className='text-white list-disc'>
                <li className='hover:text-black mb-3'>Painting & Decorating</li>
                <li className='hover:text-black mb-3'>Wallpaper Hanging</li>
                <li className='hover:text-black mb-3'>Commercial Decorating</li>
                <li className='hover:text-black mb-3'>Interior Design</li>
                <li className='hover:text-black mb-3'>External Design</li>
            </ul>
        </div>
        <div>
            <h1 className='font-bold text-2xl text-white mb-5'>Quick Links</h1>
            <ol className='text-white list-disc'>
                <li className='hover:text-black mb-3'>Home</li>
                <li className='hover:text-black mb-3'>Our Services</li>
                <li className='hover:text-black mb-3'>Prices</li>
                <li className='hover:text-black mb-3'>Blog</li>
                <li className='hover:text-black mb-3'>Contact Us</li>
            </ol>
        </div>
        <div>
            <h1 className='font-bold text-2xl text-white mb-5'>Contact Info</h1>
            <p className='text-white'><span className='text-white font-bold'>Address:</span> 248 Linen Hall, 162-168</p>
            <p className='text-white mb-3'>Regent St., London W1B 5TB</p>
            <p className='text-white mb-3'><span className='text-white font-bold'>Email:   </span>info@paintworkslondon.co.uk</p>
            <p className='text-white'><span className='font-bold'>Phone:   </span> 080 8129 5005</p>
        </div>
    </div>
    <div className='border border-b-2 mt-15 border-b-white'></div>
    <div>
        <h1 className='text-white font-bold text-2xl mt-5'>Locations</h1>
        <div className=''>
            <ol>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ol>
        </div>
    </div>
    </div>
  )
}
