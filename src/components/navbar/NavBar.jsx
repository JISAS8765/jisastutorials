import React from "react";

import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";


const NavBar = () => {
  return (
    <nav className="bg-[#06B6D4] text-white">
      {/* Top Contact Bar */}
      <div className="container mx-auto flex justify-between items-center py-2 px-6 text-sm">
        <div className="w-full flex justify-between md:justify-start md:gap-4 ">
          <div>
          <a href="https://wa.me/+919508888477" className="flex items-center space-x-1 hover:text-gray-300">
            <FaWhatsapp />
            <span>+919508888477</span>
          </a>

          </div>
          <div>
          <a href="https://wa.me/+919939212017" className="flex items-center space-x-1 hover:text-gray-300">
            <FaWhatsapp />
            <span>+919939212017</span>
          </a>

          </div>
          
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="https://www.instagram.com/jisastutorials/" className="hover:text-gray-300"><FaFacebookF /></a>
          <a href="https://www.instagram.com/jisastutorials/" className="hover:text-gray-300"><FaInstagram /></a>
          <a href="https://wa.me/+919508888477" className="hover:text-gray-300"><FaWhatsapp /></a>
          <a href="https://www.instagram.com/jisastutorials/" className="hover:text-gray-300"><FaLinkedinIn /></a>
        </div>
      </div>

  
      <div className="bg-white text-black shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
         
          <a href="/" className="text-2xl font-bold">
            <img src="/logo.png" alt="Logo" className="max-h-24" />
          </a>

          
          <ul className="hidden md:flex space-x-6 font-semibold">
          <li><a href="#" className="hover:text-[#06B6D4]">Home</a></li>
          <li><a href="#" className="hover:text-[#06B6D4]">About Us</a></li>
          <li><a href="#" className="hover:text-[#06B6D4]">Our Services</a></li>
          <li><a  href="https://wa.me/+919508888477" className="hover:text-[#06B6D4]">Assignment Service</a></li>
          <li><a href="#" className="hover:text-[#06B6D4]">Tutorials Services</a></li>
          <li><a href="#" className="hover:text-[#06B6D4]">Contact Us</a></li>
          </ul>




          
          <a  href="https://wa.me/+919508888477" className="bg-[#06B6D4] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#06b5d4a6]">
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
