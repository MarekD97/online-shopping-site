import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setCart } from "../features/cart/cartSlice";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const [cookies, setCookies] = useCookies(["cart"]);

  // Runs only once
  useEffect(() => {
    if (cookies.cart === undefined) return;
    dispatch(setCart(cookies.cart));
  }, []);

  useEffect(() => {
    setCookies("cart", cart);
  }, [cart]);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
