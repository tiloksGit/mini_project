import React from "react";
import SearchBar from "./SearchBar";

import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>logo</div>
      <div className="searchbar-container">
        <SearchBar />
      </div>
      <Link to="/profile">My Profile</Link>
    </nav>
  );
};

export default Navbar;
