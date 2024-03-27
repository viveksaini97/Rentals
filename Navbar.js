import React from "react";
import logo from "../Images/logo.jpg";
import { FaRegCircleUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between">
      <nav className="flex gap-5 items-center">
        <img src={logo} className="w-25 h-16 rounded-full" alt="Logo" />
        <h3>Student</h3>
      </nav>

      <div className="flex items-center gap-2">
      
        <NavLink exact to="/" activeClassName="active-link">
          <button>Home</button>
        </NavLink>

        <NavLink to="/form-room" activeClassName="active-link">
          <button>Form Room</button>
        </NavLink>
      </div>

      <div className="flex gap-6">
        <select>
          <option value="CAD">CAD - Canadian Dollar</option>
          <option value="USA">USD - US Dollar</option>
          <option value="INR">INR - Indian Rupee</option>
        </select>

        <div className="flex items-center gap-2">
          <FaRegCircleUser />
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
