import React from 'react'
import Navbar from '../Components/Navbar'
import Video from "../assets/video.mp4"
import { LuArrowUpRight } from "react-icons/lu";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen w-full bg-black text-white">
        <div className="max-w-screen-xl mx-auto px-4 py-16">
          <p className="text-gray-400 font-semibold text-sm md:text-base">
            MORE THAN A WEBSITE BUILDER
          </p>

          <div className="mt-6 md:w-1/2">
            <p className="text-3xl md:text-7xl font-bold leading-tight">
              The Web design platform built for pro freelancers.
            </p>
          </div>

          <div className="mt-8 md:w-2/3 flex flex-col md:flex-row items-start md:items-center gap-y-4 md:gap-x-6">
            <p className="font-medium text-sm md:text-base md:w-[60%]">
              Create custom, professional websites that impress clients, speed up delivery, and help you stand out in a crowded market.
            </p>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-y-2 md:gap-x-4">
              <a
                href="#"
                className="h-10 w-48 bg-blue-800 text-white text-center py-2 font-bold hover:bg-blue-900 rounded-md"
              >
                Start Building
              </a>
              <a
                href="#"
                className="w-40 text-white  font-semibold flex gap-2 "
              >
                Learn More <LuArrowUpRight className='mt-1 text-xl hover:ml-10'/>
              </a>
            </div>
          </div>
        </div>
        <video src={Video} controls autoPlay   muted
            playsInline loop preload=''></video>
      </section>
    </>
  )
}

export default HomePage
