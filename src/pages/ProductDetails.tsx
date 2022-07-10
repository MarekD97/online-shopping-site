import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularLoadingIndicator from "../components/CircularLoadingIndicator";

import Details from "../components/Details";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ProductState } from "../features/products/productsSlice";

const ProductDetails = () => {
  const [product, setProduct] = useState<ProductState>();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
    return () => {
      setProduct(undefined);
    };
  }, [setProduct]);
  return (
    <div>
      {product === undefined ? (
        <div className="grid justify-center my-8">
          <CircularLoadingIndicator />
        </div>
      ) : (
        <Details product={product} />
      )}
    </div>
  );
};

export default ProductDetails;
