import React, { useState } from 'react';
import { LuArrowUpRight } from "react-icons/lu";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white">
      {/* Top Bar */}
      <div className="bg-[#146ef5] h-12 md:h-16 flex items-center justify-between px-4 md:px-10 text-sm md:text-base font-semibold">
        <p className="w-full md:w-auto">
          Join us in NYC or online on September 17-18 for Webflow Conf 2025.
        </p>
        <a
          href="#"
          className="hidden md:flex items-center font-bold"
        >
          Register Now
          <LuArrowUpRight className="ml-1 text-lg" />
        </a>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 md:px-10 py-4 md:py-6">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <img src={Logo} alt="logo" className="w-8 h-8" />
          <ul className="hidden md:flex gap-6 text-base">
            <li><a href="#" className="hover:underline decoration-blue-500">Webflow</a></li>
            <li><a href="#" className="hover:underline decoration-blue-500">Platform</a></li>
            <li><a href="#" className="hover:underline decoration-blue-500">Solutions</a></li>
            <li><a href="#" className="hover:underline decoration-blue-500">Resources</a></li>
            <li><a href="#" className="hover:underline decoration-blue-500">Enterprise</a></li>
            <li><a href="#" className="hover:underline decoration-blue-500">Pricing</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="hover:underline decoration-blue-500 text-base">Login</a>
          <a href="#" className="hover:underline decoration-blue-500 text-base">Contact Sales</a>
          <a href="/signup" className="bg-[#146ef5] text-white px-4 py-2 rounded-sm text-sm font-semibold">
            Get Started For Free
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-6">
          <ul className="flex flex-col gap-4 text-base">
            <li><a href="#">Webflow</a></li>
            <li><a href="#">Platform</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Enterprise</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Contact Sales</a></li>
            <li>
              <a href="/signup" className="bg-[#146ef5] text-white px-4 py-2 rounded-sm text-sm font-semibold">
                Get Started For Free
              </a>
            </li>
          </ul>
        </div>
      )}

      <hr className="border-t border-gray-700" />
    </nav>
  );
};

export default Navbar;
