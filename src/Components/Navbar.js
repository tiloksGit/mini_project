import React from "react";
import SearchBar from "./SearchBar";

import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div>logo</div>
      <div className="searchbar-container">
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
