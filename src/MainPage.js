import React, { useState } from "react";
import "./Dashboard.css";
import axios from "axios";

import filter from "./filter.svg";
import eyes from "./eyes.svg";
import blacklist from "./blacklist.svg";
import activate from "./activate.svg";
import MainUpperSection from "./MainUpperSection";
import FilterPageContent from "./FilterPageContent";

export default function MainPage() {
  const [tableData, setTableData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [selectedOption, setSelectedOption] = useState(10);
  const [activeBtn, setactiveBtn] = useState(null);
  const [filterBtn, setFilterBtn] = useState(false);


  function userData(response) {
    setTableData(response.data);
    setLoaded(true);
  }

  function apiCall() {
    const apiURL = "https://65e9adc2c9bf92ae3d39df37.mockapi.io/users";
    axios.get(apiURL)
    .then(userData)
    .catch(error => {
      console.log('error fetching data:', error)
    })
  }

  function handleSelectChange(event) {
    setSelectedOption(parseInt(event.target.value));
  }

  function handleButtonClick(index) {
    setactiveBtn(index === activeBtn ? null : index);
  }

  function handleFilter(filterId) {
    setFilterBtn(!filterBtn)
  }
  
  if (loaded) {
    return (
      <div className="main">
        <h1>Users</h1>
        <MainUpperSection />
        <div className="table-row">
          <table>
            <thead>
              <tr>
                <th>
                  ORGANIZATION{" "}
                  <button className="filter-btn" onClick={handleFilter}>
                    <img src={filter} alt="filter" />
                  </button>
                  {filterBtn && <FilterPageContent />}
                </th>
                <th>
                  USERNAME
                  <button className="filter-btn" onClick={handleFilter}>
                    <img src={filter} alt="filter" />
                  </button>
                </th>
                <th>
                  EMAIL
                  <button className="filter-btn" onClick={handleFilter}>
                    <img src={filter} alt="filter" />
                  </button>
                </th>
                <th>
                  PHONE NUMBER
                  <button className="filter-btn" onClick={handleFilter}>
                    <img src={filter} alt="filter" />
                  </button>
                </th>
                <th>
                  DATE JOINED
                  <button className="filter-btn" onClick={handleFilter}>
                    <img src={filter} alt="filter" />
                  </button>
                </th>
                <th>
                  STATUS
                  <button className="filter-btn" onClick={handleFilter}>
                    <img src={filter} alt="filter" />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.slice(0, selectedOption).map((tabledata, index) => (
                <tr key={index}>
                  <td>{tabledata.organization}</td>
                  <td>{tabledata.username}</td>
                  <td>{tabledata.email}</td>
                  <td>{tabledata.phone}</td>
                  <td>{tabledata.date}</td>
                  <td className="status-style">{tabledata.status}</td>
                  <td>
                    <button
                      className="dot"
                      onClick={() => handleButtonClick(index)}
                    ></button>
                    {activeBtn === index && (
                      <div className="dot-option">
                        <div>
                          <span>
                            <img src={eyes} alt="eyes" /> View Details
                          </span>
                        </div>
                        <div>
                          <span>
                            <img src={blacklist} alt="blacklist" /> Blacklist
                            User
                          </span>
                        </div>
                        <div>
                          <span>
                            <img src={activate} alt="activate" /> Activate User
                          </span>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <footer className="d-flex justify-content-between mt-4">
          <form>
            <label>
              Showing{" "}
              <select value={selectedOption} onChange={handleSelectChange}>
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
    );
  } else {
    apiCall();
    return "Loading....";
  }
}
