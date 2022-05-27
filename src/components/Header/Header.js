import React from "react";
import headerImg from "../../assets/industrial-boilers.png";
import backgroundImg from "../../assets/background_img.png";
import { NavLink } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header d-flex">
      <div className="container">
        <div className="header_container d-flex justify-content-between align-items-center mt-1 h-100">
          <div className="header_text d-flex flex-column me-lg-3">
            <h1 className="header_h1 mb-3">
              <span>Sit</span> adipisicing nulla magna voluptate{" "}
              <span>consectetur.</span>
            </h1>
            <p className="header_p">
              Consectetur veniam esse eiusmod officia magna quis irure dolor
              consequat magna nostrud exercitation ad.
            </p>
            <div className="btn header_btn mt-2">
              <NavLink to="/contact" className="nav-link active">
                Contact Us
              </NavLink>
            </div>
          </div>
          <div
            className="w-auto header_img"
            style={{
              backgroundImage: `url(${backgroundImg})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <img
              max-width="655px"
              src={headerImg}
              alt="Industrial boilers"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
