import React from "react";

export function Navigation() {
  return (
    <nav className="d-flex navbar navbar-expand-lg navbar-light bg-light text-dark justify-content-between px-5">
      <div className="navbar-nav navbar-logo">
        <li className="navbar-brand">
          {/* Don't know hwo to insert an image */}
          <img src={"./logo.png"} alt="Company Logo" />
        </li>
      </div>
      <ul className="navbar navbar-nav navbar-expand-lg navbar-light bg-light">
        <li className="nav-item mx-3 current">
          <a className="nav-link active current-link" href="/home">
            Home
          </a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link active" href="/about">
            About
          </a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link active" href="/gallery">
            Gallery
          </a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link active" href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
