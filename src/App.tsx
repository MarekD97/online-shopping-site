import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./app/store";

import Layout from "./components/Layout";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import Posts from "./pages/Posts";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="categories" element={<Categories />} />
            <Route path="posts" element={<Posts />} />
            <Route path="posts/:id" element={<PostDetails />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetails />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
