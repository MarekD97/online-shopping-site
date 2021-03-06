import React from "react";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import SearchBar from "./SearchBar";
import { useAppSelector } from "../app/hooks";

interface NavigationLink {
  name: string;
  to: string;
}

const navigation: NavigationLink[] = [
  { name: "Home", to: "/" },
  { name: "Products", to: "/products" },
  { name: "Categories", to: "/categories" },
  { name: "Posts", to: "/posts" },
];

const Navbar = (): JSX.Element => {
  const { totalQuantity } = useAppSelector((state) => state.cart);

  return (
    <nav>
      <div className="container mx-auto flex flex-col md:flex-row justify-between align-center p-2">
        <div className="text-2xl font-bold uppercase my-2 md:my-auto">
          Online shopping
        </div>
        <div className="flex align-center justify-end gap-2">
          <SearchBar />
          <Link
            className="relative p-4 transition-transform hover:scale-110"
            to="/cart"
          >
            <BsCart className="w-6 h-6" />
            {totalQuantity > 0 && (
              <span className="absolute bottom-1.5 -right-2 bg-sky-500 text-white text-xs font-semibold mr-2 px-1.5 py-0.5 rounded">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>
      </div>
      <div className="bg-sky-500 py-2">
        <div className="container mx-auto flex justify-center sm:justify-start flex-wrap gap-2 md:gap-8">
          {navigation.map((item: NavigationLink, i: number) => (
            <Link
              className="text-white text-lg font-bold hover:underline p-2"
              key={i}
              to={item.to}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
