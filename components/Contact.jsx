import React from 'react'
import logo from "../public/assets/logoPayday.png"
import Image from 'next/image'
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Contact = () => {
  return (
    <div id="contact" className='w-full bg-gray-800 py-16'>
        <div className='flex flex-col md:flex-row items-start sm:items-center pl-14 sm:pl-0 justify-center md:space-x-44'>
            <div className='lg:flex items-center justify-center lg:space-x-40'>
            <div className="logo flex flex-col items-start justify-center"> 
                <h3 className="text-3xl font-bold tracking-wide text-left text-white">Payday</h3>
                <div className='py-3'>
                    <p className='text-gray-400'>256, Chapman road, STE 105-4, <br /> New Castle, DE. </p>
                </div>
            </div>
            <div className='flex items-center space-x-10 sm:flex sm:items-center sm:space-x-28 pb-5 sm:pb-0'>
                <div className='Payments flex flex-col items-start justify-center mt-3'>
                    <p className='text-white text-xl font-semibold pb-3'>How it works</p>
                    <div className=''>
                        <p className='text-gray-400'>Guarantee</p>
                        <p className='text-gray-400'>Security</p>
                        <p className='text-gray-400'>Pricing</p>
                    </div>
                </div>
                <div className='flex flex-col items-start justify-center mt-3'>
                <p className='text-white text-xl font-semibold pb-3'>About</p>
                    <div className=''>
                        <p className='text-gray-400'>Policy</p>
                        <p className='text-gray-400'>Careers</p>
                        <p className='text-gray-400'>Blogs</p>
                    </div>
                </div>
            </div>
            </div>
            <div className='flex flex-col items-start justify-center mt-3 sm:-ml-12 lg:ml-0'>
                <h2 className='text-white text-xl font-semibold pb-3'>Subscribe</h2>
                <div>
                    <input className='py-[7px] rounded-l-md pl-3' type="text" placeholder='Enter Email Address' />
                    <button className='bg-blue-600 text-white px-7 py-2 rounded-md -ml-3'>Send</button>
                </div>
                <div className='flex items-start justify-center space-x-5 pt-5'>
                    <AiOutlineInstagram className='text-pink-400 text-xl cursor-pointer' />
                    <AiOutlineTwitter className='text-blue-400 text-xl cursor-pointer' />
                    <AiFillYoutube className='text-red-700 text-2xl cursor-pointer' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact