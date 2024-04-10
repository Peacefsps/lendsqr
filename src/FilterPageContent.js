import React from 'react';
import './Dashboard.css'

export default function FilterPageContent() {
    return (
      <div>
        <form className="filter-page d-flex flex-column">
          <label>Organization</label>
          <select>
            <option>Select</option>
            <option>Lendsqr</option>
            <option>Irorun</option>
            <option>Lendstar</option>
          </select>
          <label>Username</label>
          <input type="text" placeholder="User" />
          <label>Email</label>
          <input type="email" placeholder="Email" />
          <label>Date</label>
          <input type="date" placeholder="Date" />
          <label>Phone Number</label>
          <input type="tel" placeholder="Phone Number" />
          <label>Status</label>
          <select>
            <option>Select</option>
            <option>Inactive</option>
            <option>Pending</option>
            <option>Active</option>
            <option>Blacklisted</option>
          </select>
          <div className="d-flex filter-footer">
            <button>Reset</button>
            <button>Filter</button>
          </div>
        </form>
      </div>
    );
}