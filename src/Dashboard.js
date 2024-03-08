import React, { useState } from "react";
import "./Dashboard.css";
import axios from 'axios';
import iconuser from "./iconuser.svg";
import activeuser from "./activeuser.svg";
import loanuser from "./loanuser.svg";
import savingsuser from "./savingsuser.svg";
import filter from "./filter.svg";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

export default function Dashboard() {
    const [tableData, setTableData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [selectedOption, setSelectedOption] = useState(10)

    function userData(response) {
        setTableData(response.data);
        setLoaded(true);
    }
    function apiCall() {
        const apiURL = "https://65e9adc2c9bf92ae3d39df37.mockapi.io/users";
        axios.get(apiURL).then(userData);
    }

    function handleSelectChange(event) {
        setSelectedOption(parseInt(event.target.value))
    }
    if(loaded) {
        return (
          <div className="Dashboard mt-3">
            <NavBar />
            <div className="section">
              <SideBar />
              <div className="main">
                <h1>Users</h1>
                <div className="d-flex justify-content-between">
                  <div className="main-minibox">
                    <img src={iconuser} alt="iconuser" />
                    <p>USERS</p>
                    <h5>{tableData.length}</h5>
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
                <div className="table-row">
                  <table>
                    <thead>
                      <tr>
                        <th>
                          ORGANIZATION <img src={filter} alt="filter" />
                        </th>
                        <th>
                          USERNAME <img src={filter} alt="filter" />
                        </th>
                        <th>
                          EMAIL <img src={filter} alt="filter" />
                        </th>
                        <th>
                          PHONE NUMBER <img src={filter} alt="filter" />
                        </th>
                        <th>
                          DATE JOINED <img src={filter} alt="filter" />
                        </th>
                        <th>
                          STATUS <img src={filter} alt="filter" />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData
                        .slice(0, selectedOption)
                        .map((tabledata, index) => (
                          <tr key={index}>
                            <td>{tabledata.organization}</td>
                            <td>{tabledata.username}</td>
                            <td>{tabledata.email}</td>
                            <td>{tabledata.phone}</td>
                            <td>{tabledata.date}</td>
                            <td>{tabledata.status}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <footer className="d-flex justify-content-between mt-4">
                  <form>
                    <label>
                      Showing{" "}
                      <select
                        value={selectedOption}
                        onChange={handleSelectChange}
                      >
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                      </select>{" "}
                      Out of 100
                    </label>
                  </form>
                  <div>
                    <span>1 2 3</span>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        );
    }
    else {
        apiCall();
        return 'Loading....'
}
}
