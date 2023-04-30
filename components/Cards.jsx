import React from 'react'
import cardImage from "../public/assets/card1.svg"
import cardImage2 from "../public/assets/card2.svg"
import Image from 'next/image'
import { AiFillAndroid, AiFillApple } from 'react-icons/ai'

const Cards = () => {
  return (
    <div id="cards" className='max-w-7xl mx-auto bg-[#f2f8ff] px-10 sm:px-20 py-16 pb-5 my-16'>
        <div>
          <div className="top1 flex sm:items-center justify-around flex-col lg:flex-row py-5 sm:py-12">
              <div className="cardBg1 w-9/12 md:w-[25rem] relative rounded-lg  bg-[#33a8ff] py-8 sm:py-12">
                 <Image src={cardImage} className='ml-20 mt-2 drop-shadow-2xl w-[32rem] md:w-[25rem]' />
              </div>
              <div className="cardText py-7 sm:py-0 w-[300px] sm:[380px]">
                <h2 className='text-2xl sm:text-3xl py-2 font-semibold'>Global Mastercard</h2>
                <p className='text-gray-600 text-sm sm:text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur magnam saepe corrupti.</p>
                <button className='downloadBtn bg-blue-600 border-none'> 
                    <AiFillApple className='text-white h-5 w-5' />
                    <AiFillAndroid className='text-white h-5 w-5' />
                    <p className='text-sm text-white pl-1'>Get the App</p>
                </button>
              </div>
          </div>
          
          <div className="top1 flex sm:items-center justify-around flex-col lg:flex-row-reverse py-5 sm:py-12">
              <div className="cardBg1 w-9/12 md:w-[25rem] relative rounded-lg  bg-[#33a8ff] py-8 sm:py-12 ml-16">
                 <Image src={cardImage2} className='-ml-20 mt-2 drop-shadow-2xl w-[32rem] md:w-[25rem]' />
              </div>
              <div className="cardText py-7 sm:py-0 w-[300px] sm:[380px]">
                <h2 className='text-2xl sm:text-3xl py-2 font-semibold'>Electronic Mastercard</h2>
                <p className='text-gray-600 text-sm sm:text-base text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur magnam saepe corrupti.</p>
                <button className='downloadBtn bg-blue-600 border-none'> 
                    <AiFillApple className='text-white h-5 w-5' />
                    <AiFillAndroid className='text-white h-5 w-5' />
                    <p className='text-sm text-white pl-1'>Get the App</p>
                </button>
              </div>
          </div>
        </div>
        <div></div>
    </div>
  )
}

export default Cards