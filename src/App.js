import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LogIn from "./LogIn.js";
import Dashboard from './Dashboard.js';
import './App.css';
import GeneralPage from './GeneralPage.js';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/LogIn">Home</Link>
            </li>
            <li>
              <Link to="/Dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/GeneralPage">User General Detail</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/GeneralPage" element={<GeneralPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
