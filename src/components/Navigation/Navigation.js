import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

export function Navigation() {
  let activeStyle = {
    borderBottom: "solid 1px #2C599A",
    color: "#2C599A",
  };
  return (
    <nav className="d-flex navbar navbar-expand-lg navbar-light text-dark justify-content-between px-5">
      <div className="navbar-nav navbar-logo">
        <li className="navbar-brand">
          <img src={logo} alt="Company Logo" />
        </li>
      </div>
      <ul className="navbar navbar-nav navbar-expand-lg navbar-light">
        <li className="nav-item mx-3">
          <NavLink
            to="/"
            className="nav-link active"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink
            to="/about"
            className="nav-link active"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink
            to="/gallery"
            className="nav-link active"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Gallery
          </NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink
            to="/contact"
            className="nav-link active"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
