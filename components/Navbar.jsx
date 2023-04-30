import Link from "next/link"
import { useState } from "react"
import { Bars3Icon } from '@heroicons/react/24/solid'
import Image from "next/image"
import logo from "../public/assets/logoPayday.png"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <>
      <div id="home" className=" ">
          <div className="h-20 px-8 sm:px-20 w-full flex items-center justify-between">
            <div className="left flex items-center cursor-pointer">
                <Image src={logo} className="w-6 h-6 mt-[3px]" alt="" />
                <h3 className="text-xl font-semibold tracking-wide text-left">ayday</h3>
            </div>
            <div className="right hidden md:flex items-center space-x-10">
                <Link href="/#home">Home</Link>
                <Link href="/#about">About</Link>
                <Link href="/#cards">Cards</Link>
                <Link href="/#contact">Contact</Link>
                <Link className="text-white bg-blue-600 px-4 py-2 rounded-[5px]" href="/">Join Our Telegram</Link>
            </div>
            <div className="md:hidden cursor-pointer" onClick={handleNav}>
                    <AiOutlineMenu size={25} />
            </div>
          </div>
        

        {/* Hamburger Menu */}
        <div className={nav ? "md:hidden fixed right-0 top-0 w-full h-screen z-10 bg-black/70": ""}>           
            <div className={nav ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease duration-500": "fixed right-[-100%] top-0 p-10 ease duration-500"}>
                <div>
                <div className="flex w-full items-center justify-between">
                    <h3 className="text-3xl font-bold tracking-wide text-blue-600 text-center ml-4">Payday</h3>
                    <div onClick={handleNav} className="rounded-full shadow-lg text-xs sm:text-sm shadow-gray-400 p-[6px] sm:p-2 cursor-pointer">
                        <AiOutlineClose />
                    </div>
                </div>
                <div className="border-b border-gray-300 my-4 text-center">
                    <p className="w-[85%] md:w-[90%] py-4"> Payments Made Easy! </p>
                </div>
            </div>
            <div className="py-4 flex flex-col items-center justify-center">
                <ul className="uppercase">
                    <Link href="/#home" onClick={() => setNav(!nav)}> <li className="py-5 font-medium text-sm"> Home </li> </Link>
                    <Link href="/#about" onClick={() => setNav(!nav)}> <li className="py-5 font-medium text-sm"> About </li> </Link>
                    <Link href="/#cards" onClick={() => setNav(!nav)}> <li className="py-5 font-medium text-sm"> Cards </li> </Link>
                    <Link href="/#contact" onClick={() => setNav(!nav)}> <li className="py-5 font-medium text-sm"> Contact </li> </Link>
                </ul>

            </div>
                </div>
        </div>
    </div>
    </>
    
  )
}

export default Navbar