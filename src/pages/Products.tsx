import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Card from "../components/Card";
import CategoryList from "../components/CategoryList";
import CircularLoadingIndicator from "../components/CircularLoadingIndicator";

import { setProducts } from "../features/products/productsSlice";

const Products = () => {
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const [limit, setLimit] = useState<number>(24);
  const [skip, setSkip] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=id,title,thumbnail,price,rating`
    )
      .then((res) => res.json())
      .then((res) => {
        dispatch(setProducts(res.products));
        setTotal(res.total);
      });
  }, [limit, skip]);
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4">
        <CategoryList />
        {products === undefined || products.length == 0 ? (
          <div className="grid justify-center my-8">
            <CircularLoadingIndicator />
          </div>
        ) : (
          <div>
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
            <div className="flex justify-center gap-4 bg-white p-8 sticky bottom-0">
              <div className="flex flex-wrap gap-4">
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
              <div className="flex flex-wrap gap-4">
                <div className="border border-gray-400">
                  <span className="px-4 py-2">Page</span>
                  {skip > 0 && (
                    <button
                      className="px-4 py-2 border-l border-gray-400"
                      onClick={() =>
                        setSkip((prev) => (prev >= limit ? prev - limit : prev))
                      }
                    >
                      &lt;
                    </button>
                  )}
                  {[...Array(Math.ceil(total / limit))].map(
                    (element: null, index: number) => {
                      return (
                        <button
                          key={index}
                          className={`px-4 py-2 border-l border-gray-400 ${
                            Math.ceil(skip / limit) === index
                              ? "bg-sky-500 text-white font-bold"
                              : ""
                          }`}
                          onClick={() => setSkip(index * limit)}
                        >
                          {index + 1}
                          {/* {skip} */}
                        </button>
                      );
                    }
                  )}
                  {skip + limit < total && (
                    <button
                      className="px-4 py-2 border-l border-gray-400"
                      onClick={() =>
                        setSkip((prev) =>
                          prev + limit < total ? prev + limit : prev
                        )
                      }
                    >
                      &gt;
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
