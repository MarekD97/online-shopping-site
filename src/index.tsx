import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./app/store";

import { Counter } from "./features/counter/Counter";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="products" element={<div>products</div>} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
