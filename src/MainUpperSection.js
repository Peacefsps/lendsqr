import React from 'react';
import './Dashboard.css';
import iconuser from "./iconuser.svg";
import activeuser from "./activeuser.svg";
import loanuser from "./loanuser.svg";
import savingsuser from "./savingsuser.svg";

export default function MainUpperSection(props) {
    return (
      <div>
        <div className="d-flex justify-content-between">
          <div className="main-minibox">
            <img src={iconuser} alt="iconuser" />
            <p>USERS</p>
            {/* <h5>{props.tableData.length}</h5> */}
            <h5>100</h5>
          </div>
          <div className="main-minibox">
            <img src={activeuser} alt="activeuser" />
            <p>ACTIVE USERS</p>
            <h5>2,453</h5>
          </div>
          <div className="main-minibox">
            <img src={loanuser} alt="loanuser" />
            <p>USERS WITH LOANS</p>
            <h5>12,453</h5>
          </div>
          <div className="main-minibox">
            <img src={savingsuser} alt="savingsuser" />
            <p>USERS WITH SAVINGS</p>
            <h5>102,453</h5>
          </div>
        </div>
      </div>
    );
}