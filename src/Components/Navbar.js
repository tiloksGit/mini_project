import React, { useContext } from "react";
import SearchBar from "./SearchBar";

import "../styles/navbar.css";
import { Link } from "react-router-dom";
import LoginContext from "../LoginContext";

const Navbar = () => {
  const { accessToken } = useContext(LoginContext);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:4000/auth/logout", {
        method: "POST",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const responseData = await response.json();
      console.log(responseData.message);
    } catch (err) {
      alert(err.message);
    }
  };
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
