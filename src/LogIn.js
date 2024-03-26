import React from 'react';
import homeicon from './homeicon.svg';
import lendsqr from './lendsqr.svg';
import './homepage.css';

export default function LogIn() {
    return (
      <div className="LogIn">
        <a href="/Homepage">
          <img src={lendsqr} alt="Icon" />
        </a>
        <div className="d-flex mt-5">
          <div>
            <img src={homeicon} alt="Homepage" />
          </div>
          <div className="formpage">
            <h1>Welcome</h1>
            <p>Enter details to login.</p>
            <form className="d-flex flex-column">
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="/">FORGOT PASSWORD?</a>
              <input type="Submit" value="LOG IN" />
            </form>
          </div>
        </div>
      </div>
    );
}