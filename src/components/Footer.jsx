// Footer.js
import React from 'react';
import logo from './../forever-assets/assets/frontend_assets/logo.png'
const Footer = () => {
  return (
    <footer className="bg-gray-200 w-[100%] py-10">
      <div className="container mx-auto flex flex-wrap justify-between">
        
        {/* Logo and Description */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
          <img
            src={logo}// Replace with your logo path
            alt="Company Logo"
            className="mx-auto md:mx-0 mb-4 w-24"
          />
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam ulpa rem distinctio a? Quis sapiente</p>
        </div>

        {/* Navigation Links */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
          <h3 className="font-bold mb-4">Company</h3>
          <ul>
            <li className="mb-2">
              <a href="/" className="text-gray-600 hover:text-gray-800">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="/about" className="text-gray-600 hover:text-gray-800">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="/collection" className="text-gray-600 hover:text-gray-800">
                Collection
              </a>
            </li>
            <li className="mb-2">
              <a href="/delivery" className="text-gray-600 hover:text-gray-800">
                Delivery
              </a>
            </li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h3 className="font-bold mb-4">Get in Touch</h3>
          <p className="text-gray-600 mb-2">Phone: 03047602914</p>
          <p className="text-gray-600">Email: hamzamalhi127@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
