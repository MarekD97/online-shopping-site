import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Card from "../components/Card";
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
      <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 container mx-auto py-10 gap-4">
        {products.map(({ id, title, thumbnail, price, rating }) => (
          <Link to={`/products/${id}`}>
            <Card
              title={title}
              thumbnail={thumbnail}
              price={price}
              rating={rating}
            />
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
