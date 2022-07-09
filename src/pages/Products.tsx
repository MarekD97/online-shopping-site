import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Card from "../components/Card";
import CategoryList from "../components/CategoryList";
import CircularLoadingIndicator from "../components/CircularLoadingIndicator";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { setProducts } from "../features/products/productsSlice";

const Products = () => {
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const [limit, setLimit] = useState<number>(24);
  const [skip, setSkip] = useState<number>(0);

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=id,title,thumbnail,price,rating`
    )
      .then((res) => res.json())
      .then((res) => dispatch(setProducts(res.products)));
  }, [limit]);
  return (
    <div>
      <Navbar />
      <div className="flex flex-col sm:flex-row gap-4">
        <CategoryList />
        {products === undefined || products.length == 0 ? (
          <div className="grid justify-center my-8">
            <CircularLoadingIndicator />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 container mx-auto py-10 gap-4">
            {products.map(({ id, title, thumbnail, price, rating }) => (
              <Link to={`/products/${id}`} key={id}>
                <Card
                  title={title}
                  thumbnail={thumbnail}
                  price={price}
                  rating={rating}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="container my-4 flex justify-center">
        <div className="flex flex-wrap gap-4 mt-8">
          <div className="border border-gray-400">
            <span className="px-4 py-2">Products on page</span>
            {[...Array(3)].map((element: null, index: number) => {
              const num = (index + 1) * 12;
              return (
                <button
                  key={index}
                  className={`px-4 py-2 border-l border-gray-400 ${
                    limit === num ? "bg-sky-500 text-white font-bold" : ""
                  }`}
                  onClick={() => setLimit(num)}
                >
                  {num}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
