import React, { useEffect, useState } from "react";
import CircularLoadingIndicator from "../components/CircularLoadingIndicator";
import { BsListUl } from "react-icons/bs";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then(setCategories);

    return () => {
      setCategories([]);
    };
  }, [setCategories]);

  const capitalize = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1);

  return (
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
          <div className="bg-sky-100 p-4 border-t border-gray-300" key={index}>
            <Link className="hover:underline" to="/">
              {capitalize(category)}
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Categories;
