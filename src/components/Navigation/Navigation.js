import React from "react";

export function Navigation() {
  return (
    <nav class="d-flex navbar navbar-expand-lg navbar-light bg-light text-dark justify-content-between px-5">
      <div class="navbar-nav navbar-logo">
        <li class="navbar-brand">
          <img src="img/logo" alt="Company Logo" />
        </li>
      </div>
      <ul class="navbar navbar-nav navbar-expand-lg navbar-light bg-light">
        <li class="nav-item">
          <a class="nav-link active" href="/home">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/about">
            About
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/gallery">
            Gallery
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
