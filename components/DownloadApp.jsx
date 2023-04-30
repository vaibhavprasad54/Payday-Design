import Image from 'next/image'
import React from 'react'
import slackIcon from '../public/assets/slack.svg'
import stove from '../public/assets/stove.svg'
import mastercard from '../public/assets/mastercard.svg'
import chang from '../public/assets/chang.svg'
import kroger from '../public/assets/kroger.png'

const DownloadApp = () => {
  return (
    <div>
        <div className="download-section w-full flex flex-col items-center justify-center pb-7 sm:pb-14">
            <div>
                <h2 className='text-2xl sm:text-3xl font-bold text-center sm:my-7'>What are you waiting for ? <br /> Download the <span className='text-blue-500'>Payday</span> App & get <br /> started now </h2>
            </div>
            <div className='flex items-center flex-col sm:flex-row justify-center space-x-0 sm:space-x-5'>
                <div class="flex mt-3 w-44 h-14 py-4 bg-black text-white rounded-lg items-center justify-center cursor-pointer">
                    <div class="mr-3">
                        <svg viewBox="0 0 384 512" width="20" >
                            <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                        </svg>
                    </div>
                    <div>
                        <div class="text-xs">Download on the</div>
                        <div class="text-lg font-semibold font-sans -mt-1">App Store</div>
                    </div>
                 </div>
                 <div class="flex mt-3 w-44 h-14 py-4 bg-black text-white rounded-lg items-center justify-center cursor-pointer">
                    <div class="mr-3">
                        <svg viewBox="30 336.7 120.9 129.2" width="20">
                            <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"/>
                            <path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"/>
                            <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"/>
                            <path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"/>
                        </svg>
                    </div>
                    <div>
                        <div class="text-xs">GET IT ON</div>
                        <div class="text-lg font-semibold font-sans -mt-1">Google Play</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="featured-section flex items-center justify-center flex-col py-20 mt-10 pb-24 bg-[#f2f8ff]">
            <div className="features-heading mt-12 mb-10">
                <h2 className='font-bold text-3xl'>As Featured In</h2>
            </div>
            <div className="featured-icons flex flex-col sm:flex-row items-center justify-center space-y-7 sm:space-y-0 sm:space-x-28">
                <div className='flex items-center justify-center'>
                <div className='px-5 sm:px-24'>
                    <Image className='w-24 sm:w-28' src={slackIcon} width={120} height={120} />
                </div>
                <div className='px-5 sm:pl-5 sm:pr-2'>
                    <Image className='w-24 sm:w-28' src={stove} width={120} height={120} />
                </div>
                </div>
                <div className='flex items-center justify-center'>
                <div className='px-5 sm:pl-2 sm:pr-24'>
                    <Image className='w-24 sm:w-28' src={chang} width={120} height={120} />
                </div>
                <div className='px-5 sm:px-0 sm:pr-7'>
                    <Image className='w-24 sm:w-28' src={mastercard} width={120} height={120} />
                </div>
                </div>
                <div className=''>
                    <Image className='w-20' src={kroger} width={80} height={80} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DownloadApp