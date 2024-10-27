import React from 'react';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-blue-800 text-white py-10 mt-20 w-full">
    <div className="container mx-auto px-6 md:px-12 lg:px-20">
      <div className="">
        
        {/* Store Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Fashion & Electronics Hub</h3>
          <p className="text-gray-300">
            Your one-stop shop for the latest in fashion and electronics. Discover quality products at affordable prices.
          </p>
        </div>

     

      {/* Copyright */}
      <div className="text-center mt-6 text-gray-400 text-sm">
        © 2024 Fashion & Electronics Hub. All rights reserved.
      </div>
    </div>
    </div>
  </footer>
);

export default Footer;
