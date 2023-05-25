import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import LoginContext from "../dataContext";

const Navbar = () => {
  const { handleLogout } = useContext(LoginContext);

  return (
    <nav>
      <div>logo</div>
      <div className="searchbar-container">
        <SearchBar />
      </div>
      <Link to="profile">My Profile</Link>
      <p>
        <button onClick={handleLogout}>logout</button>
      </p>
    </nav>
  );
};

export default Navbar;
