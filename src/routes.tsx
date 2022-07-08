import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Counter } from "./features/counter/Counter";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="products" element={<div>products</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
