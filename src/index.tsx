import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./app/store";
import "./index.css";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Layout from "./components/Layout";
import Cart from "./pages/Cart";
import Posts from "./pages/Posts";
import PostDetails from "./pages/PostDetails";
import Categories from "./pages/Categories";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<PostDetails />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </Provider>
);
