import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addProduct } from "../features/cart/cartSlice";
import { ProductState } from "../features/products/productsSlice";
import PrimaryButton from "./PrimaryButton";
import QuantityButtons from "./QuantityButtons";
import RatingStars from "./RatingStars";

interface DetailsProps {
  product: ProductState;
}

const Details = ({ product }: DetailsProps): JSX.Element => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const [activeImage, setActiveImage] = useState<string>(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((state: number) => state + 1);
  const handleDecrement = () =>
    setQuantity((state: number) => (state > 1 ? state - 1 : state));

  const handleAddToCart = () => {
    dispatch(addProduct({ ...product, quantity: quantity }));
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row py-10">
      <div className="flex-1 p-2">
        <img src={activeImage} alt="" className="md:h-96" />
        <div className="flex justify-between mt-4 cursor-pointer">
          {product.images.map((image: string, index: number) => (
            <img
              key={index}
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
          <div className="my-4">
            <RatingStars rating={product.rating} />
          </div>
          <div className="flex items-center">
            <span className="text-2xl font-bold mr-4">
              ${product.price.toFixed(2)}
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
          <QuantityButtons
            quantity={quantity}
            onDecrement={handleDecrement}
            onIncrement={handleIncrement}
          />
          <PrimaryButton onClick={handleAddToCart}>Add to cart</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Details;
