import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import "../styles/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import LoginContext from "../dataContext";

const Navbar = () => {
  const { accessToken } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:4000/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("jwt"),
        },
      });
      const responseData = await response.json();
      // console.log(responseData.message);
      if (responseData) {
        localStorage.removeItem("jwt");
        localStorage.removeItem("name");
        localStorage.removeItem("id");

        navigate("/");
      }
    } catch (err) {
      console.log(err);
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
