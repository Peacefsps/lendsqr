import React from 'react';
import './Dashboard.css';
import briefcase from "./briefcase.svg";
import nexticon from "./nexticon.svg";
import home from "./home.svg";
import savingsproduct from './savingsproduct.svg';
import fees from './fees.svg';
import transactions from './transactions.svg';
import services from './services.svg';
import serviceacct from './serviceacct.svg';
import settlements from './settlements.svg';
import report from './reports.svg';
import preferences from './preferences.svg';
import badge from './badge.svg';
import audit from './audit.svg';
import Customers from './Customers.js';
import loanrequest from "./loanrequest.svg";


export default function SideBar() {
    return (
      <div className="SideBar">
        <div className="side-bar">
          <div className="side-bar-main">
            <img src={briefcase} alt="briefcase" />
            <p>Switch Organization</p>
            <img src={nexticon} alt="dropdown" />
          </div>
          <div className="side-bar-main">
            <img src={home} alt="home" />
            <p>Dashboard</p>
          </div>
          <Customers />
          <div className="side-bar-list">
            <h2>BUSINESSES</h2>
            <div className="side-bar-main">
              <img src={briefcase} alt="user" />
              <p>Organization</p>
            </div>
            <div className="side-bar-main">
              <img src={loanrequest} alt="user" />
              <p>Loan Products</p>
            </div>
            <div className="side-bar-main">
              <img src={savingsproduct} alt="user" />
              <p>Savings Products</p>
            </div>
            <div className="side-bar-main">
              <img src={fees} alt="user" />
              <p>Fees and Charges</p>
            </div>
            <div className="side-bar-main">
              <img src={transactions} alt="user" />
              <p>Transactions</p>
            </div>
            <div className="side-bar-main">
              <img src={services} alt="user" />
              <p>Services</p>
            </div>
            <div className="side-bar-main">
              <img src={serviceacct} alt="user" />
              <p>Service Account</p>
            </div>
            <div className="side-bar-main">
              <img src={settlements} alt="user" />
              <p>Settlements</p>
            </div>
            <div className="side-bar-main">
              <img src={report} alt="user" />
              <p>Reports</p>
            </div>
          </div>
          <div className="side-bar-list">
            <h2>SETTINGS</h2>
            <div className="side-bar-main">
              <img src={preferences} alt="user" />
              <p>Preferences</p>
            </div>
            <div className="side-bar-main">
              <img src={badge} alt="user" />
              <p>Fees and Pricing</p>
            </div>
            <div className="side-bar-main">
              <img src={audit} alt="user" />
              <p>Audit Logs</p>
            </div>
          </div>
        </div>
      </div>
    );
}
