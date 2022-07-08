import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

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

const Navbar = () => {
  return (
    <nav>
      <div className="container mx-auto flex flex-col md:flex-row justify-between align-center p-2">
        <div className="text-2xl font-bold uppercase my-2 md:my-auto">
          Fake Shop
        </div>
        <div className="flex align-center border border-black my-2">
          <input className="outline-none w-full md:w-64 p-2" type="text" />
          <button className="p-2 transition-transform hover:scale-110">
            <BsSearch style={{ width: "24px", height: "24px" }} />
          </button>
        </div>
      </div>
      <div className="bg-sky-500">
        <div className="container mx-auto flex justify-center sm:justify-start flex-wrap gap-2 md:gap-8">
          {navigation.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className="text-white font-bold hover:underline px-4 py-2"
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
