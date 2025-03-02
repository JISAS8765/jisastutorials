import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#06B6D4] text-white py-10">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Left Section - Logo & Description */}
        <div>
          <Image src="/jisas-tutorials.jpg" alt="AMA Logo" width={150} height={80} />
          <p className="mt-4 text-sm">
            Askmeassignment.com aims to provide affordable academic writing assistance to students worldwide, ensuring high-quality service at prices that align with our established criteria.
          </p>
        </div>

        {/* Middle Section - Company Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Our Services</a></li>
            <li><a href="#" className="hover:underline">Assignment Service</a></li>
            <li><a href="#" className="hover:underline">How We Work</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Right Section - Address & Social Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">ADDRESS</h3>
          <p className="text-sm">
            23, Near Central Bank, Bhikna Pahari, Nayatola, Patna 800004
          </p>
          <p className="mt-2"><strong>Contact Us:</strong></p>
          <p className="text-sm">+91-9508888477</p>
          <p className="text-sm">+91-9939212017</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="https://www.instagram.com/jisastutorials" className="text-white hover:text-gray-300"><FaInstagram size={20} /></a>
            <a href="https://wa.me/+919508888477" className="text-white hover:text-gray-300"><FaWhatsapp size={20} /></a>
            <a href="https://wa.me/+919508888477" className="text-white hover:text-gray-300"><FaLinkedin size={20} /></a>
          </div>

          {/* Google Map */}
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.669316461888!2d85.16151168591547!3d25.615339380178803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58e928ae7c39%3A0x1075cbd3bcde2244!2sCentral%20Bank%20of%20India!5e0!3m2!1sen!2sin!4v1740925455409!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-sm mt-8 border-t border-white pt-4">
        Jisastutorials.com © All Rights Reserved
      </div>
    </footer>
  );
}
