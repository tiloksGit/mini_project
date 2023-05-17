import React from "react";
import { Outlet } from "react-router-dom";
import Notification from "../Notification";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";

import "../styles/layout.css";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="App-parent">
        <div className="App">
          <div>
            <Sidebar />
          </div>
          <main className="layout-main-section">
            <Outlet />
          </main>
          <div className="right-layout">
            We will have some notification in here
            <Notification />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
