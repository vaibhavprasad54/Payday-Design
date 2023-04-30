import React from 'react'
import { BsArrowUpRight, BsArrowUp, BsCurrencyDollar } from "react-icons/bs";

const Features = () => {
  return (
    <div className='features max-w-6xl mx-auto px-10 md:px-0 py-16 mt-5 sm:mt-10 text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-6'>
        <div className='flex items-center mx-auto space-x-2'>
            <div className='arrowIcon rounded-full bg-gray-700 p-4 '>
                <BsArrowUpRight className='text-white h-3 w-3' />
            </div>
            <div className='featuresText text-start'>
                <h2 className='text-base font-semibold'>Send</h2>
                <p className='text-sm text-gray-500'>Send & recieve money globally in seconds</p>
            </div>
        </div>

        <div className='flex items-center mx-auto space-x-2'>
            <div className='arrowIcon rounded-full bg-gray-700 p-4'>
                <BsArrowUp className='text-white h-3 w-3' />
            </div>
            <div className='featuresText text-start'>
                <h2 className='text-base font-semibold'>Spend</h2>
                <p className='text-sm text-gray-500'>Send & recieve money globally in seconds</p>
            </div>
        </div>

        <div className='flex items-center mx-auto space-x-2'>
            <div className='arrowIcon rounded-full bg-gray-700 p-4'>
                <BsCurrencyDollar className='text-white h-3 w-3' />
            </div>
            <div className='featuresText text-start'>
                <h2 className='text-base font-semibold'>Bank</h2>
                <p className='text-sm text-gray-500'>Send & recieve money globally in seconds</p>
            </div>
        </div>
        
    </div>
  )
}

export default Features