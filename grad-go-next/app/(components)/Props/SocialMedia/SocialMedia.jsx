"use client"
import React from 'react';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

const SocialMedia = () => {
  return (
    <div className="m-5 flex justify-center items-center">
      <div className="w-72 h-72 bg-[#1a1a2e] rounded-2xl shadow-[10px_10px_20px_rgba(0,0,0,0.8),-5px_-5px_10px_rgba(255,255,255,0.1)] flex flex-col gap-2 justify-start p-4">
        {/* Search Input */}
        <div className="relative mb-4">
          <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white opacity-50" />
          <input
            type="text"
            placeholder="Search App"
            className="w-full py-2 pl-10 pr-3 text-sm bg-[#161624] text-white rounded-lg shadow-[inset_4px_4px_8px_rgba(0,0,0,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.05)] placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#6948fe] transition"
          />
        </div>

        {/* Social Media Icons */}
        <div className="grid grid-cols-2 gap-4 px-5">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/gradgo/"
            className="flex justify-center items-center w-full h-20 bg-[#161624] rounded-xl text-[#161624] text-3xl shadow-[4px_4px_8px_rgba(0,0,0,0.6),-4px_-4px_8px_rgba(255,255,255,0.05)] hover:bg-[#2b2b39] transition-all"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className='w-[65%] h-[65%]  text-white' />
          </a>
          {/* Facebook */}
          <a
            href="#"
            className="flex justify-center items-center w-full h-20 bg-[#6948fe] rounded-xl text-white text-3xl shadow-[4px_4px_8px_rgba(0,0,0,0.6),-4px_-4px_8px_rgba(255,255,255,0.05)] hover:bg-[#8062ff] transition-all"
            aria-label="Facebook"
          >
            <FaFacebookF className='w-[65%] h-[65%] text-white'  />
          </a>
          {/* Instagram */}
          <a
            href=""
            className="flex justify-center items-center w-full h-20 bg-[#6948fe] rounded-xl text-white text-3xl shadow-[4px_4px_8px_rgba(0,0,0,0.6),-4px_-4px_8px_rgba(255,255,255,0.05)] hover:bg-[#8062ff] transition-all"
            aria-label="Instagram"
          >
            <FaInstagram className='w-[65%] h-[65%] text-white'  />
          </a>
          {/* Twitter */}
          <a
            href="#"
            className="flex justify-center items-center w-full h-20 bg-[#161624] rounded-xl text-white text-3xl shadow-[4px_4px_8px_rgba(0,0,0,0.6),-4px_-4px_8px_rgba(255,255,255,0.05)] hover:bg-[#2b2b39] transition-all"
            aria-label="Twitter"
          >
            <FaTwitter  className='w-[65%] h-[65%]  text-[#6948fe]' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
