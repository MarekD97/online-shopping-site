import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/couterSlice";
import productsReducer from "../features/products/productsSlice";
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
