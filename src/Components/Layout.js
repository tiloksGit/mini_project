import React from "react";
import { Outlet } from "react-router-dom";
import AuthenticateUser from "./AuthenticateUser";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState, useEffect } from "react";

const Layout = () => {
  const [name, setName] = useState("");
  const [passwd, setPasswd] = useState("");
  useEffect(() => {
    console.log(name, passwd);
  }, [name, passwd]);
  return (
    <div>
      <div className="App">
        <AuthenticateUser
          name={name}
          passwd={passwd}
          setName={setName}
          setPasswd={setPasswd}
        />

        <main>
          <Outlet />
        </main>
        <Navbar />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
