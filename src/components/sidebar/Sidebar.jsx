import React from 'react';
import "./sidebar.scss";

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className='logo'>dashboard</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        coś tam
      </div>
    </div>
  )
}

export default Sidebar