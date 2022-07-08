import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { setProducts, deleteProduct } from "../features/products/productsSlice";

const Products = () => {
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((res) => dispatch(setProducts(res.products)));
  }, []);
  return (
    <div>
      <Navbar />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.title}</span>
            <img src={product.images[0]} alt="" />
            <button onClick={() => dispatch(deleteProduct(product.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default Products;
