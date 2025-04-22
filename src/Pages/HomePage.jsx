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
import { LuArrowUpRight } from "react-icons/lu"
import { PiCursorFill } from "react-icons/pi"
import { FaRocket } from "react-icons/fa"
import { GoGraph } from "react-icons/go"
import { IoScaleSharp } from "react-icons/io5"
import Design from "../assets/design.mp4"
import Footer from '../Components/Footer'
import BestCompany from '../Components/BestCompany'

const HomePage = () => {
  // Array of logos for easier management
  const logos = [
    Logo, Logotwo, Logothree, LogoFour, LogoFive, LogoSix, LogoSeven, LogoEight, LogoNine, 
    LogoTen, LogoEleven, Logotwelve, Logothirteen, LogoFourteen, LogoFifteen, LogoSixteen, 
    LogoSeventeen, LogoEighteen, LogoNineteen
  ]

  // Feature cards data for easier management
  const featureCards = [
    {
      icon: <PiCursorFill />,
      title: "Design and build",
      description: "Designers can take control of HTML, CSS, and JavaScript in a visual canvas — while marketers can work with pre-made, design-approved building blocks."
    },
    {
      icon: <FaRocket />,
      title: "Publish and edit",
      description: "Choose how you want to add, edit, and update content at scale with Webflow's CMS: visually in our platform or programmatically through our headless APIs."
    },
    {
      icon: <GoGraph />,
      title: "Analyze and Optimize",
      description: "Transform your site into your most valuable marketing asset with native tools for AI-powered personalization, A/B testing, SEO, localization, and more."
    },
    {
      icon: <IoScaleSharp />,
      title: "Scale and collaborate",
      description: "15,000 websites are published with Webflow every hour. Confidently scale your site with tools for hosting, security, compliance, and publishing — plus connect to your tech stack with integrations and APIs."
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full bg-black">
        <div className="max-w-screen-xl mx-auto px-4 py-16">
          <p className="text-gray-400 font-semibold text-sm md:text-base">
            MORE THAN A WEBSITE BUILDER
          </p>

          <div className="mt-6 md:w-1/2">
            <h1 className="text-3xl md:text-7xl font-bold leading-tight">
              The Web design platform built for pro freelancers.
            </h1>
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
                className="w-40 text-white font-semibold flex items-center gap-2 group"
              >
                Learn More <LuArrowUpRight className="text-xl transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full px-4 mb-10">
          <video
            src={Video}
            controls
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            className="w-full h-auto rounded-lg"
          ></video>
        </div>

        {/* Logo Section */}
        <div className="py-10 px-4">
          <div className="flex flex-wrap justify-center items-center gap-6">
            {logos.map((logo, index) => (
              <img 
                src={logo} 
                key={index} 
                alt={`Partner logo ${index + 1}`} 
                className="h-2 md:h-4" 
              />
            ))}
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="w-full px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
            {featureCards.map((card, index) => (
              <div key={index} className="relative">
                <div className="absolute top-2 left-4 text-gray-600 text-2xl">
                  {card.icon}
                </div>
                <h3 className="font-bold px-6 py-10">{card.title}</h3>
                <p className="font-semibold text-gray-400 px-6">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Launch Pixel Perfect Sites Section */}
        <div className="w-full bg-white text-black py-16">
          <div className="max-w-screen-xl mx-auto px-4">
            <h2 className="text-4xl md:text-6xl lg:text-9xl font-bold font-serif mb-8 md:w-[70%]">
              Launch pixel perfect sites
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 space-y-6">
                <p className="text-xl md:text-2xl font-semibold font-sans md:w-[90%]">
                  Rethink the web dev cycle with Webflow. Give your design and marketing teams the power to launch sophisticated sites quickly — so your dev team can focus on more complex work, not pixel-perfect revisions.
                </p>
                <a 
                  href="#" 
                  className="inline-block mt-6 px-6 py-3 bg-[#146ef5] text-white font-bold rounded-sm"
                >
                  Get Started — <span className="font-normal">It's free</span>
                </a>
              </div>
              
              <div className="md:w-1/2 mt-6 md:mt-0">
                <video
                  src={Design}
                  controls
                  autoPlay
                  muted
                  playsInline
                  loop
                  preload="auto"
                  className="w-full h-auto rounded-lg"
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Best Company Section */}
      <BestCompany />
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default HomePage