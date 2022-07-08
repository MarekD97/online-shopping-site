import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

import "./Navbar.css";

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
    <nav className="navbar">
      <div className="navbar__top">
        <div className="navbar__brand">Fake Shop</div>
        <div className="navbar__search">
          <input type="text" />
          <button>
            <BsSearch style={{ width: "24px", height: "24px" }} />
          </button>
        </div>
      </div>
      <div className="navbar__main">
        {navigation.map((item, i) => (
          <Link key={i} to={item.to} className="navbar__link">
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
