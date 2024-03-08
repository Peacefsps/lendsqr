import React from "react";
import './Dashboard.css';
import userfriends from "./userfriends.svg";
import Guarantor from "./Guarantor.svg";
import loans from "./loans.svg";
import decision from "./decision.svg";
import savings from "./savings.svg";
import loanrequest from "./loanrequest.svg";
import whitelist from "./whitelist.svg";
import karma from "./karma.svg";

export default function Customers() {
    return (
      <div className="UsersList">
        <div className="side-bar-list">
          <h2>CUSTOMERS</h2>
          <div className="side-bar-main">
            <img src={userfriends} alt="user" />
            <p>Users</p>
          </div>
          <div className="side-bar-main">
            <img src={Guarantor} alt="user" />
            <p>Guarantor</p>
          </div>
          <div className="side-bar-main">
            <img src={loans} alt="user" />
            <p>Loans</p>
          </div>
          <div className="side-bar-main">
            <img src={decision} alt="user" />
            <p>Decision Models</p>
          </div>
          <div className="side-bar-main">
            <img src={savings} alt="user" />
            <p>Savings</p>
          </div>
          <div className="side-bar-main">
            <img src={loanrequest} alt="user" />
            <p>Loan Requests</p>
          </div>
          <div className="side-bar-main">
            <img src={whitelist} alt="user" />
            <p>Whitelist</p>
          </div>
          <div className="side-bar-main">
            <img src={karma} alt="user" />
            <p>Karma</p>
          </div>
        </div>
      </div>
    );
}