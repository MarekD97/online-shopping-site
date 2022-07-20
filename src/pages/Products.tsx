import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import ProductCart from "../features/products/ProductCart";
import CircularLoadingIndicator from "../components/CircularLoadingIndicator";

import { setProducts } from "../features/products/productsSlice";
import Pagination from "../components/Pagination";

const Products = (): JSX.Element => {
  const { products, total } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [loaded, setLoaded] = useState(false);

  const skip = (currentPage - 1) * 24;

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=24&skip=${skip}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(setProducts(res));
        setLoaded(true);
      });
  }, [currentPage]);
  return (
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        {products === undefined || products.length == 0 ? (
          <div className="grid justify-center my-8 mx-auto">
            {!loaded ? (
              <CircularLoadingIndicator />
            ) : (
              <h3 className="text-lg font-semibold">No products found</h3>
            )}
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
