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
import { PiCursorFill } from "react-icons/pi";
import { FaRocket } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { IoScaleSharp } from "react-icons/io5";
import Design from "../assets/design.mp4"
import Footer from '../Components/Footer'

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
                className="w-40 text-white font-semibold flex gap-2"
              >
                Learn More <LuArrowUpRight className='mt-1 text-xl hover:ml-10' />
              </a>
            </div>
          </div>
        </div>

        {/* Responsive Video */}
        <div className="w-full px-4">
          <video
            src={Video}
            controls
            autoPlay
            muted
            playsInline
            loop
            preload=""
            className="w-full h-auto rounded-lg"
          ></video>
        </div>

        {/* Logo Section */}
        <div className='py-10 px-4'>
          <div className='flex flex-wrap justify-center items-center gap-6'>
            {[Logo, Logotwo, Logothree, LogoFour, LogoFive, LogoSix, LogoSeven, LogoEight, LogoNine, LogoTen, LogoEleven, Logotwelve, Logothirteen, LogoFourteen, LogoFifteen, LogoSixteen, LogoSeventeen, LogoEighteen, LogoNineteen].map((logo, index) => (
              <img src={logo} key={index} alt={`logo-${index}`} className='h-2 md:h-4' />
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div className='w-full px-4 py-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white font-semibold'>
            <div className='relative'>
              <PiCursorFill className='absolute top-2 text-gray-600 text-2xl left-4' />
              <p className='font-bold px-6 py-10'>Design and build</p>
              <p className='font-semibold text-gray-400 px-6'>
                Designers can take control of HTML, CSS, and JavaScript in a visual canvas — while marketers can work with pre-made, design-approved building blocks.
              </p>
            </div>
            <div className='relative'>
              <FaRocket className='absolute top-2 text-gray-600 text-2xl left-4' />
              <p className='font-bold px-6 py-10'>Publish and edit</p>
              <p className='font-semibold text-gray-400 px-6'>
                Choose how you want to add, edit, and update content at scale with Webflow's CMS: visually in our platform or programmatically through our headless APIs.
              </p>
            </div>
            <div className='relative'>
              <GoGraph className='absolute top-2 text-gray-600 text-2xl left-4' />
              <p className='font-bold px-6 py-10'>Analyze and Optimize</p>
              <p className='font-semibold text-gray-400 px-6'>
                Transform your site into your most valuable marketing asset with native tools for AI-powered personalization, A/B testing, SEO, localization, and more.
              </p>
            </div>
            <div className='relative'>
              <IoScaleSharp className='absolute top-2 text-gray-600 text-2xl left-4' />
              <p className='font-bold px-6 py-10'>Scale and collaborate</p>
              <p className='font-semibold text-gray-400 px-6'>
                15,000 websites are published with Webflow every hour. Confidently scale your site with tools for hosting, security, compliance, and publishing — plus connect to your tech stack with integrations and APIs.
              </p>
            </div>
          </div>
        </div>
        <div className='h-screen w-full border-2 bg-white '>
          <p className='text-9xl font-bold font-serif text-black p-8 w-[70%]'>Launch pixel perfect sites</p>
        <div className='h-full w-full flex justify-between text-black p-4'>
          <div className='h-full w-[50%] '>
            <p className='w-[82%] text-2xl font-semibold font-sans'>Rethink the web dev cycle with Webflow. Give your design and marketing teams the power to launch sophisticated sites quickly — so your dev team can focus on more complex work, not pixel-perfect revisions.</p>
            <a href="" className='h-20 w-48 relative top-10 border-2 text-xl p-2 bg-[#146ef5] text-white font-bold rounded-sm'>Get Started __ <span className='text-semibold'>It's free</span></a>
          </div>
          <div className='h-full w-[50%]'>
          <video
            src={Design}
            controls
            autoPlay
            muted
            playsInline
            loop
            preload=""
            className="  w-full h-auto rounded-lg"
          ></video>
          </div>
        </div>
        </div>
      </section>
     <div className='relative top-[450px]'>
     <Footer/>
     </div>
    </>
  )
}

export default HomePage
