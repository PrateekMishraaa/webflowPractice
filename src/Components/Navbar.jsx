import React from 'react'
import { LuArrowUpRight } from "react-icons/lu";
import Logo from "../assets/logo.svg"
const Navbar = () => {
    return (
        <>
            <nav className='h-48 w-full  bg-black'>
                <div className='h-16 w-full bg-[#146ef5]'>
                    <ul className='flex justify-between px-4 py-4 text-white font-semibold'>
                        <li><a href='' className='ml-8'>Join us in NYC or online on September 17-18 for Webflow Conf  2025.</a></li>
                        <div className='flex justify-between'>
                            <li className='mr-20 font-bold'><a href=''>Register Now<LuArrowUpRight className='relative  left-26 text-2xl bottom-7 hover:h-4 font-bold' /></a></li>
                        </div>
                    </ul>
                </div>
                <div className='h-24 w-full  flex justify-between text-white'>
                    <div className='px-10 h-full w-[50%] '>
                        <ul className='flex justify-between items-center gap-6'>
                            <img src="" alt="logo" />
                            <li><a href="" className="font-light font-sans text-xl hover:underline hover:decoration-blue-500 transition">Webflow</a></li>
                            <li><a href="" className="font-light font-sans text-xl hover:underline hover:decoration-blue-500 transition">Platform</a></li>
                            <li><a href="" className="font-light font-sans text-xl hover:underline hover:decoration-blue-500 transition">Solutions</a></li>
                            <li><a href="" className="font-light font-sans text-xl hover:underline hover:decoration-blue-500 transition">Resources</a></li>
                            <li><a href="" className="font-light font-sans text-xl hover:underline hover:decoration-blue-500 transition">Enterprise</a></li>
                            <li><a href="" className="font-light font-sans text-xl hover:underline hover:decoration-blue-500 transition">Pricing</a></li>
                        </ul>

                    </div>
                    <div className='flex justify-between mr-20 '>
                    <ul className="flex justify-between mr-4 py-2 list-none gap-4 text-sm ">
  <li>
    <a href="#" className="font-light font-sans text-xl hover:underline hover:decoration-blue-500 transition">
   Login
    </a>
  </li>
  <li>
    <a href="#" className="font-light font-sans text-xl hover:underline hover:decoration-blue-500 transition">
Contact Sales
    </a>
  </li>
  <li>
    <a href="#" className="font-light font-sans text-xl h-16 w-80 p-1 bg-[#146ef5] text-white font-semibold rounded-sm text-sm">
      Get Started For Free
    </a>
  </li>
</ul>

                    </div>
                </div>
                <hr className='border-1 border-gray-700 relative bottom-10'/>
            </nav>
            
        </>
    )
}

export default Navbar
