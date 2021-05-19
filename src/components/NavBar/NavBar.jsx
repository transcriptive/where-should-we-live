import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user && <p>sup?</p>}
      <ul>
      
      {user ?
        <>
          <li>Welcome, {user.name}</li>
          <li><NavLink to="/users">Users</NavLink></li>
          <NavLink to="" onClick={handleLogout}>LOG OUT</NavLink> 
        </>
      :
        <>
          <li><NavLink to="/login">Log In</NavLink></li>
          {user && <li><NavLink to="/users">Users</NavLink></li>}
          <li><NavLink to="/signup">Sign Up</NavLink></li>
        </>
      }
      </ul>
    </nav>
  )
}

export default NavBar;
