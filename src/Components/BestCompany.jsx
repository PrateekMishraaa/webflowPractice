import React from 'react';
import Video from "../assets/video2.mp4";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const BestCompany = () => {
  return (
    <>
      <section className='min-h-screen w-full bg-[#f0f0f0] relative py-8 px-4 sm:px-6 md:px-8 lg:px-12'>
        {/* Title and Navigation Arrows Container */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-4 sm:mt-8 md:mt-12 lg:mt-20'>
          {/* Title */}
          <div className='w-full md:w-3/4 lg:w-1/2 mb-6 md:mb-0'>
            <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans text-black'>
              The best Companies build on Webflow
            </p>
          </div>
          
         
          <div className='flex justify-start md:justify-end gap-4 mt-2 md:mt-0'>
            <FaArrowLeft className='text-2xl md:text-3xl lg:text-4xl text-black hover:text-blue-600 transition cursor-pointer' />
            <FaArrowRight className='text-2xl md:text-3xl lg:text-4xl text-black hover:text-blue-600 transition cursor-pointer' />
          </div>
        </div>
        
   
        <div className="w-full mt-6 md:mt-10">
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
      </section>
      <section className='h-[100%] w-full bg-black border-2 relative'>
        <div className='h-68 w-[70%]  absolute top-10 left-20'>
          <p className='text-8xl font-semibold text-white font-serif h-full'>Manage content visually, publish anywhere</p>
          
        </div>
        <div className='h-[100vh] w-full flex justify-between border-2 relative top-96'>
            <div>2</div>
            <div>2</div>
          </div>
      </section>
    </>
  );
};

export default BestCompany;