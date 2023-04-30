import Image from 'next/image';
import React from 'react'
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import heroImage from "../public/assets/mobile.png"
import cardImage from "../public/assets/cardNew.png"

const Main = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='mainText text-center py-5'>
        <h1 className='text-5xl sm:text-7xl md:text-9xl font-semibold text-blue-700 tracking-wide'>Revolutionize</h1>
        <h1 className='text-5xl sm:text-7xl md:text-9xl font-semibold text-gray-700 -mt-2 sm:-mt-6 tracking-wide'>Your Banking</h1>
      </div>
      <div className='desc text-center mx-auto'>
        <p className='text-gray-600'>Simple, Secure and Convenient</p>
        <button className='downloadBtn shadow-none bg-transparent border-blue-600'> 
          <AiFillApple className='text-blue-700 h-5 w-5' />
          <AiFillAndroid className='text-blue-700 h-5 w-5' />
          <p className='text-sm pl-1 text-black'>Get the App</p>
        </button>
      </div>
      <div className="mobileImage flex items-center justify-center">
          <Image src={heroImage} className='w-96 lg:w-[25rem] mt-[2rem] sm:mt-[3.4rem] lg:mt-2' alt="" />
      </div>
    </div>
  )
}

export default Main