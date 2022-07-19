import React, { useEffect, useState } from "react";
import CircularLoadingIndicator from "../components/CircularLoadingIndicator";
import { BsListUl } from "react-icons/bs";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setProducts } from "../features/products/productsSlice";
import ProductCart from "../features/products/ProductCart";

const Categories = () => {
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((res) => {
        setCategories(res);
        setSelectedCategory(res[0]);
      });

    return () => {
      setCategories([]);
    };
  }, [setCategories]);

  useEffect(() => {
    if (selectedCategory === "") return;
    fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(setProducts(res.products));
      });
  }, [selectedCategory]);

  const capitalize = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <div className="container mx-auto flex flex-col gap-4 sm:flex-row">
      <div className="flex flex-col py-10">
        <div className="bg-sky-500 flex gap-2 whitespace-nowrap p-4 text-white">
          <BsListUl style={{ width: "24px", height: "24px" }} />
          Browse By Category
        </div>
        {categories === undefined || categories.length === 0 ? (
          <div className="bg-sky-100 p-4 border-t border-gray-300">
            <CircularLoadingIndicator />
          </div>
        ) : (
          categories.map((category: string, index: number) => (
            <div
              className={`p-4 border-t border-gray-300 ${
                selectedCategory === category
                  ? "bg-sky-500 text-white"
                  : "bg-sky-100 "
              }`}
              key={index}
            >
              <button
                className="hover:underline"
                onClick={() => setSelectedCategory(category)}
              >
                {capitalize(category)}
              </button>
            </div>
          ))
        )}
      </div>
      <div className="grid xl:grid-cols-2 2xl:grid-cols-3 py-10 gap-4">
        {products.map(({ id, title, thumbnail, price, rating }) => (
          <Link to={`/products/${id}`} key={id}>
            <ProductCart
              title={title}
              thumbnail={thumbnail}
              price={price}
              rating={rating}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
