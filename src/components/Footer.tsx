import React from "react";

import { SiVisa, SiMastercard } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white mt-12">
      <div className="container px-4 md:px-2 py-8 md:py-16 mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-32">
          <div className="flex flex-col gap-2">
            <h5 className="text-xl font-bold">Company</h5>
            <div className="w-10 h-0.5 my-2 bg-sky-500"></div>
            <ul className="text-gray-300">
              <li className="my-2">About Us</li>
              <li className="my-2">partner Sign In</li>
              <li className="my-2">Contact</li>
              <li className="my-2">Affiliate Program</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-xl font-bold">Support</h5>
            <span className="w-10 h-0.5 my-2 bg-sky-500"></span>
            <ul className="text-gray-300">
              <li className="my-2">How It Works</li>
              <li className="my-2">Live Chat</li>
              <li className="my-2">Request Product</li>
              <li className="my-2">Return Policy</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-xl font-bold">Newsletter</h5>
            <span className="w-10 h-0.5 my-2 bg-sky-500"></span>
            <input
              type="text"
              className="text-black px-4 py-2 text-sm w-60"
              placeholder="Enter your email to subscribe"
            />
            <div className="flex gap-4 mt-auto">
              <SiVisa className="w-8 h-8" />
              <SiMastercard className="w-8 h-8" />
            </div>
          </div>
        </div>
        <div className="w-full h-px my-8 bg-gray-500"></div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-2xl font-bold uppercase my-2 md:my-auto">
            Online shopping
          </div>
          <div className="flex flex-col md:flex-row gap-4 font-light text-gray-500">
            <div>Terms and Conditions</div>
            <div>Privacy Policy</div>
            <div>&copy; 2022 All rights reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
