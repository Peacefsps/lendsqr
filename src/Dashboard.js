import React from "react";
import "./Dashboard.css";
import SideBar from "./SideBar.js";
import NavBar from "./NavBar.js";
import MainPage from "./MainPage.js";

export default function Dashboard() {
        return (
          <div className="Dashboard mt-3">
            <NavBar />
            <div className="section">
              <SideBar />
              <MainPage />
            </div>
          </div>
        );
}
