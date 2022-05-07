import React from "react";
import headerImg from "../assets/industrial-boilers.png";
import backgroundImg from "../assets/background_img.png";
import { Navigation } from "./Navigation/Navigation";
import "./Header.scss";

export default function Header() {
  return (
    <div className=" header">
      <div className="container">
        <Navigation></Navigation>
        <div className="d-flex flex-row justify-content-between align-items-center mt-1">
          <div className="d-flex flex-column align-items-start me-3">
            <h1 className="header_h1 mb-3">
              <span>Sit</span> adipisicing nulla magna voluptate{" "}
              <span>consectetur.</span>
            </h1>
            <p className="header_p">
              Consectetur veniam esse eiusmod officia magna quis irure dolor
              consequat magna nostrud exercitation ad.
            </p>
            <div className="btn header_btn mt-2">Contact Us</div>
          </div>
          <div
            className="w-auto"
            style={{
              backgroundImage: `url(${backgroundImg})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <img width="655px" src={headerImg} alt="Industrial boilers"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
