import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import ProductCart from "../components/ProductCart";
import CircularLoadingIndicator from "../components/CircularLoadingIndicator";

import { setProducts } from "../features/products/productsSlice";
import Pagination from "../components/Pagination";

const Products = (): JSX.Element => {
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);

  const skip = (currentPage - 1) * 24;

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?limit=24&skip=${skip}&select=id,title,thumbnail,price,rating`
    )
      .then((res) => res.json())
      .then((res) => {
        dispatch(setProducts(res.products));
        setTotal(res.total);
      });
  }, [currentPage]);
  return (
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        {products === undefined || products.length == 0 ? (
          <div className="grid justify-center my-8 mx-auto">
            <CircularLoadingIndicator />
          </div>
        ) : (
          <div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 container mx-auto py-10 gap-4">
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
            <Pagination
              currentPage={currentPage}
              totalCount={total}
              pageSize={24}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
