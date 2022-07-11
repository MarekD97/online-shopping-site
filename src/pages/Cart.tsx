import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";

import { BsTrash } from "react-icons/bs";
import { deleteProduct } from "../features/cart/cartSlice";
import PrimaryButton from "../components/PrimaryButton";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="container mx-auto my-8 flex flex-col px-2 md:px-0">
        {cart.totalQuantity > 0 ? (
          <div className="bg-gray-200 font-bold flex flex-col md:flex-row p-4 gap-4">
            <div className="flex-[2]">Product Details</div>
            <div className="flex-1">Price</div>
            <div className="flex-1">Quantity</div>
            <div className="flex-1">Total Price</div>
          </div>
        ) : (
          <div className="bg-gray-200 font-bold p-4 text-center">
            The Cart is Empty
          </div>
        )}
        {cart.products &&
          cart.products.map((product) => (
            <div className="flex flex-col md:flex-row p-4 border-b border-gray-300 md:items-center gap-4">
              <div className="flex-[2] flex items-center gap-4">
                <img
                  src={product.thumbnail}
                  alt=""
                  className="w-1/3 aspect-video object-contain"
                />
                <h3 className="font-bold text-lg">{product.title}</h3>
              </div>
              <div className="flex-1">${product.price.toFixed(2)}</div>
              <div className="flex-1">{product.quantity}</div>
              <div className="flex-1 flex gap-4">
                ${(product.price * product.quantity).toFixed(2)}
                <button
                  onClick={() => dispatch(deleteProduct({ id: product.id }))}
                >
                  <BsTrash />
                </button>
              </div>
            </div>
          ))}
      </div>
      {cart.totalQuantity > 0 && (
        <div className="container mx-auto flex flex-col sm:flex-row justify-between gap-4 px-2 md:px-0">
          <div className="flex-1 flex flex-col gap-4">
            <h4>Have a Promotion Code?</h4>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter Code and hit Submit"
                className="border border-gray-300 placeholder:text-gray-500 px-4 py-2 w-full"
              />
              <PrimaryButton>Submit</PrimaryButton>
            </div>
          </div>
          <div className="flex-1"></div>
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-lg font-bold">Order Summary</h3>
            <div className="h-px w-1/3 bg-gray-300"></div>
            <div className="flex justify-between">
              <span>Sub-total</span>
              <span>${cart.totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$50.00</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total Cost</span>
              <span>${(cart.totalPrice + 50).toFixed(2)}</span>
            </div>
            <PrimaryButton>Continue to Checkout</PrimaryButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
