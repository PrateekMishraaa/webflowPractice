import React from 'react';
import Video from "../assets/video2.mp4";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Videosecond from "../assets/video4.mp4";
import VideoThird from "../assets/video5.mp4"

const BestCompany = () => {
  return (
    <>
      {/* Intro Section */}
      <section className='w-full bg-[#f0f0f0] py-16 px-4 sm:px-6 lg:px-12'>
        <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6'>
          <div className='w-full md:w-2/3'>
            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-black'>
              The best Companies build on Webflow
            </h2>
          </div>
          <div className='flex gap-4'>
            <FaArrowLeft className='text-3xl text-black hover:text-blue-600 cursor-pointer transition' />
            <FaArrowRight className='text-3xl text-black hover:text-blue-600 cursor-pointer transition' />
          </div>
        </div>

        {/* Company Video */}
        <div className="mt-10 rounded-lg overflow-hidden aspect-video">
          <video
            src={Video}
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Visual Publish Section */}
      <section className='w-full bg-black text-white py-20 px-4'>
        <div className='max-w-screen-xl mx-auto'>
          <h3 className='text-8xl sm:text-6xl lg:text-8xl font-serif font-semibold mb-10 w-[70%]'>
            Manage content visually, publish anywhere
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='h-full text-white flex items-center justify-center text-2xl font-bold'>
              Webflow’s visual-first, composable CMS is made for everyone who has a hand in crafting digital experiences — so you can ship high-impact content, faster
            </div>
            <div className='relative h-[500px] md:h-auto bg-white text-black'>
              <div className="w-full h-full rounded-lg overflow-hidden">
                <video
                  src={Videosecond}
                  autoPlay
                  muted
                  playsInline
                  loop
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='min-h-[100vh] w-full bg-[#f9f9f9] flex flex-col justify-center px-8 py-20'>
  <p className='w-full max-w-6xl text-6xl md:text-7xl lg:text-8xl font-bold font-serif text-black mb-16'>
    Drive real business results, fast
  </p>
  <div className='w-full flex justify-between gap-10 text-black  '>
    <div className=' rounded-xl shadow-md w-full text-center text-2xl'>Deliver web experiences that get results with built-in tools for analytics, A/B testing, AI-driven personalization, and SEO.</div>
    <div className='bg-white rounded-xl shadow-md p-10 w-full text-center'>
    <video
                  src={VideoThird}
                  autoPlay
                  muted
                  playsInline
                  loop
                  className="w-full h-full object-cover"
                />
    </div>
  </div>
</section>


    </>
  );
};

export default BestCompany;
