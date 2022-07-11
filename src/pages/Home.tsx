import React from "react";

import {
  BsTruck,
  BsFillCartXFill,
  BsCreditCardFill,
  BsHeadset,
} from "react-icons/bs";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-4 p-2 my-8">
        <div className="flex-1">
          <img
            className="w-full object-cover bg-gray-800 aspect-video"
            src="https://dummyjson.com/image/i/products/1/thumbnail.jpg"
            alt=""
          />
        </div>
        <div className="flex-1">
          <img
            className="w-full object-cover bg-gray-800 aspect-video"
            src="https://dummyjson.com/image/i/products/4/thumbnail.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-evenly m-2 p-2 border border-gray-300">
        <div className="flex p-4 lg:justify-center items-center gap-8">
          <BsTruck
            className="text-sky-500"
            style={{ width: "32px", height: "32px" }}
          />
          <span>
            <h3 className="text-lg font-bold mb-2">Free Shipping</h3>
            <p className="text-gray-500">Order over $99</p>
          </span>
        </div>
        <div className="flex p-4 lg:justify-center items-center gap-8">
          <BsFillCartXFill
            className="text-sky-500"
            style={{ width: "32px", height: "32px" }}
          />
          <span>
            <h3 className="text-lg font-bold mb-2">30 Days Return</h3>
            <p className="text-gray-500">If goods have problem</p>
          </span>
        </div>
        <div className="flex p-4 lg:justify-center items-center gap-8">
          <BsCreditCardFill
            className="text-sky-500"
            style={{ width: "32px", height: "32px" }}
          />
          <span>
            <h3 className="text-lg font-bold mb-2"> Secure Payment</h3>
            <p className="text-gray-500">100% secure payment</p>
          </span>
        </div>
        <div className="flex p-4 lg:justify-center items-center gap-8">
          <BsHeadset
            className="text-sky-500"
            style={{ width: "32px", height: "32px" }}
          />
          <span>
            <h3 className="text-lg font-bold mb-2">24h Support</h3>
            <p className="text-gray-500">Dedicated Support</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
