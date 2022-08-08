import * as React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-header">
        Cooking ninja
      </Link>
      <Link to="/create" className="navbar-btn">
        Create Recipe
      </Link>
    </div>
  );
};

export default Navbar;
