import React from "react";
import './Dashboard.css';
import logo from "./logo.png";
import notification from "./notification.svg";
import avatar from "./avatar.svg";
import dropdown from "./dropdown.svg";
import vector from "./Vector.svg";

export default function NavBar() {
    return (
      <div className="NavBar">
        <div className="nav-bar d-flex justify-content-between align-items-center">
          <a href="/Homepage">
            <img src={logo} alt="logo" />
          </a>
          <div className="form">
            <input type="search" placeholder="Search for anything" />
            <button>
              <img src={vector} alt="searchicon" />
            </button>
          </div>
          <div className="right-bar">
            <a href="at.com" rel="noopener noreferrer" className="user-doc">
              Docs
            </a>
            <img src={notification} alt="notification" />
            <img src={avatar} alt="avatar" width={48} />
            <a href="/" rel="noopener noreferrer" className="user-name">
              Adedeji
            </a>
            <img src={dropdown} alt="dropdown" />
          </div>
        </div>
      </div>
    );
}