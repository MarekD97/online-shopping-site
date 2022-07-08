import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductState } from "../features/products/productsSlice";

interface DetailsProps {
  product: ProductState;
}

const Details = ({ product }: DetailsProps) => {
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((state) => state + 1);
  const decrement = () =>
    setQuantity((state) => (state > 1 ? state - 1 : state));

  return (
    <div className="container mx-auto flex flex-col md:flex-row py-10">
      <div className="flex-1 p-2">
        <img src={activeImage} alt="" className="md:h-96" />
        <div className="flex justify-between mt-4 cursor-pointer">
          {product.images.map((image: string) => (
            <img
              src={image}
              alt=""
              className="h-16"
              onClick={() => setActiveImage(image)}
            />
          ))}
        </div>
      </div>
      <div className="flex-1 p-2">
        <div className="mb-2">
          <h2 className="text-4xl font-bold uppercase">{product.title}</h2>
          {/* Stars */}
          {product.rating}
          <div className="flex items-center">
            <span className="text-2xl font-bold mr-4">
              ${(product.price / 100).toFixed(2)}
            </span>
            <span className="text-lg font-semibold text-red-600">
              -{product.discountPercentage}%
            </span>
          </div>
        </div>
        <div className="w-full h-px bg-gray-200 my-2"></div>
        <div className="my-2">
          <p className="text-gray-600">{product.description}</p>
        </div>
        <div className="flex flex-wrap gap-4 mt-8">
          <div className="border border-gray-400">
            <button className="px-4 py-2" onClick={decrement}>
              -
            </button>
            <span className="px-4 py-2 border-x border-gray-400">
              {quantity}
            </span>
            <button className="px-4 py-2" onClick={increment}>
              +
            </button>
          </div>
          <button className="bg-sky-500 px-8 py-2 text-white font-bold transition-colors hover:bg-sky-400">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
