import React from "react";
import b from "../../assets/img/b.jpeg";
import SearchPage from "./SearchPage";
import { Link, NavLink } from "react-router-dom";
import "../../assets/css/Navbar.css";

const Navbar = () => {
  return (
    <div className="siri">
    <nav className="nav ">
      <NavLink exact to="/home">
        <img src={b} alt="bdroplogo" />
      </NavLink>
      <NavLink exact to="/donate">DONATE</NavLink>
      <NavLink exact to="/request">REQUEST</NavLink>
      <NavLink exact to="/reg/emp">EMPLOYEE REGISTER</NavLink>
      <NavLink exact to="/login/emp">EMPLOYEE LOGIN</NavLink>
      <NavLink exact to="/contact">CONTACT</NavLink>

      <br></br> <br></br>
      {/* <Search /> */}
      
      <SearchPage />
    </nav>
    </div>
  );
};

export default Navbar;




