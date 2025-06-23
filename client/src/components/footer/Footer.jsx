import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-white py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">


        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-red-500">OrganVital</h2>
          <p className="text-sm text-gray-300">
            Empowering lives through blood and organ donation. Join us in spreading awareness, hope, and compassion.
          </p>
        </div>

       
        <div className="space-y-2">
          <h3 className="text-lg font-semibold mb-2 text-red-400">Quick Links</h3>
          <ul className="text-sm space-y-1">
            <li><a href="/about" className="hover:text-red-400 transition-colors">About Us</a></li>
            <li><a href="/login" className="hover:text-red-400 transition-colors">Donate</a></li>
            <li><a href="/contact" className="hover:text-red-400 transition-colors">Get Involved</a></li>
            <li><a href="/faqs" className="hover:text-red-400 transition-colors">FAQs</a></li>
            <li><a href="/contact" className="hover:text-red-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-red-400">Legal</h3>
            <ul className="text-sm space-y-1">
              <li><a href="/privacy" className="hover:text-red-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-red-400 transition-colors">Terms of Use</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-red-400">Follow Us</h3>
            <div className="flex gap-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-blue-500">
                <FaFacebookF size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-pink-500">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-sky-400">
                <FaTwitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-300">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

   
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} OrganVital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
