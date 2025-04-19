import React from 'react'
import Navbar from '../Components/Navbar'
import Video from "../assets/video.mp4"
import Logo from "../assets/Ncr.svg"
import Logotwo from "../assets/monday.svg"
import Logothree from "../assets/spotify.svg"
import LogoFour from "../assets/Ted.svg"
import LogoFive from "../assets/dropbox.svg"
import LogoSix from "../assets/greenhouse.svg"
import LogoSeven from "../assets/clear.svg"
import LogoEight from "../assets/theory.svg"
import LogoNine from "../assets/checkout.svg"
import LogoTen from "../assets/sound.svg"
import LogoEleven from "../assets/mizuho.svg"
import Logotwelve from "../assets/ideo.svg"
import Logothirteen from "../assets/docusign.svg"
import LogoFourteen from "../assets/Abm.svg"
import LogoFifteen from "../assets/NewYork.svg"
import LogoSixteen from "../assets/mural.svg"
import LogoSeventeen from "../assets/upwork.svg"
import LogoEighteen from "../assets/deca.svg"
import LogoNineteen from "../assets/discord.svg"
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
            <div className='h-40 w-full'>
                <div className='h-20 w-full  flex justify-between p-6'>
                    <img src={Logo} alt="logo1" className='h-fit' />
                    <img src={Logotwo} alt="logo1" className='h-fit' />
                    <img src={Logothree} alt="logo1" className='h-fit' />
                    <img src={LogoFour} alt="logo1" className='h-fit' />
                    <img src={LogoFive} alt="logo1" className='h-fit' />
                    <img src={LogoSix} alt="logo1" className='h-fit' />
                    <img src={LogoSeven} alt="logo1" className='h-fit' />
                    <img src={LogoEight} alt="logo1" className='h-fit' />
                    <img src={LogoNine} alt="logo1" className='h-fit' />
                    <img src={LogoTen} alt="logo1" className='h-fit' />
                </div>
                <div className='h-20 w-full  flex justify-between p-6'>
                    <img src={LogoEleven} alt="logo1" className='h-fit' />
                    <img src={Logotwelve} alt="logo1" className='h-6' />
                    <img src={Logothirteen} alt="logo1" className='h-fit' />
                    <img src={LogoFourteen} alt="logo1" className='h-fit' />
                    <img src={LogoFifteen} alt="logo1" className='h-6' />
                    <img src={LogoSixteen} alt="logo1" className='h-fit' />
                    <img src={LogoSeventeen} alt="logo1" className='h-fit' />
                    <img src={LogoEighteen} alt="logo1" className='h-6' />
                    <img src={LogoNineteen} alt="logo1" className='h-fit' />
                    <img src={LogoTen} alt="logo1" className='h-fit' />
                </div>
            </div>
      </section>
    </>
  )
}

export default HomePage
