import React from "react";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import heroImage from "../public/assets/mobile.svg";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="max-w-7xl mx-auto px-2 sm:px-10">
      <div className="mainText text-center py-5 pb-16 sm:py-12 sm:pb-16">
        <p className="text-xl sm:text-2xl font-semibold px-4 sm:px-48">Open USD, GBP, EUR AND 20+ other Global Accounts for Free & Spend with the Payday Mastercard</p>
      </div>
      <div className="max-w-7xl cards mx-auto px-5 sm:px-10">
        <div className="card1 max-w-5xl mx-auto px-4 bg-blue-600 rounded-xl flex items-center justify-center flex-col sm:flex-row">
          <div className="left py-10 lg:py-1 px-5 sm:w-[450px] text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl text-white font-semibold">USD, GBP & EUR bank accounts for free</h2>
            <p className="text-gray-300 py-2">Recieve Payments from your clients, employers, social media platforms and other businesses directly to your foreign account - without hidden fees.</p>
            <button className="downloadBtn bg-white border-none">
              <AiFillApple className='text-blue-700 h-5 w-5' />
              <AiFillAndroid className='text-blue-700 h-5 w-5' />
              <p className='text-sm pl-1 text-blue-700'>Get the App</p>
            </button>
          </div>
          <div className="right">
            <Image src={heroImage} className="max-w-sm hidden md:flex sm:max-w-xs lg:max-w-none -ml-14 sm:ml-0 -mt-10 sm:w-[450px] sm:mt-48 lg:mt-2" alt="" />
          </div>
        </div>
        <div className="smallCards max-w-5xl mx-auto space-x-1 flex flex-col sm:flex-row items-center justify-center">
          <div className="flex flex-col items-center ">
            <div className="smallCard1 p-10 my-3 bg-blue-100 rounded-lg">
              <h2 className="text-2xl font-semibold">Send cash to family & friends</h2>
              <p className="text-base text-gray-700 pt-2 pb-16">Recieve Payments from your clients, employers, directly to your foreign account.</p>
            </div>
            <div className="flex flex-col items-center bg-white shadow-xl rounded-lg p-7 w-52 -mt-24">
              <h2 className="text-lg font-semibold">Transfer</h2>
              <div className="flex items-center justify-center -space-x-2 py-4">
                <img className="h-8 w-8 object-cover rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt=""  />
                <img className="h-8 w-8 object-cover rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt=""  />
                <img className="h-8 w-8 object-cover rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt=""  />
              </div>
              <h2 className="text-2xl font-bold">$ 450.00</h2>
              <p className="text-xs text-gray-600">Money successfully sent!</p>
            </div>
          </div>

          <div className="flex flex-col items-center ">
            <div className="smallCard1 p-10 my-3 bg-[#35abff] rounded-lg">
              <h2 className="text-2xl font-semibold text-white">Get paid by foreign employers</h2>
              <p className="text-base text-gray-100 pt-2 pb-16">Freelancer, Remote worker or corporate employee ? Get Paid fast and securely.</p>
            </div>
            <div className="flex flex-col items-center bg-blue-100 shadow-xl rounded-lg p-7 w-52 -mt-24">
              <h2 className="text-lg font-semibold">Recieved</h2>
              <div className="flex items-center justify-center -space-x-2 py-4">
                <img className="h-8 w-8 object-cover rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt=""  />
              </div>
              <h2 className="text-2xl font-bold">₹ 17,500.00</h2>
              <p className="text-xs text-gray-600">Money recieved!</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;
