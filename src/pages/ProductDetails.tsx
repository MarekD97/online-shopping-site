import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <Navbar />
      {product && <Details product={product} />}
      <Footer />
    </div>
  );
};

export default ProductDetails;
