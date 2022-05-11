import React from "react";
import { icons } from "./FooterIcons";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer_container  d-flex flex-column justify-content-center">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div>
            <ul className="navbar navbar-nav navbar-dark d-flex flex-row justify-content-start">
              <li className="nav-item mx-3">
                <a className="nav-link active" href="/home">
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
            <p className="text-start mx-3 footer_copyright">
              © Excepteur ea aliquip labore non enim non cillum incididunt magna
              quis.
            </p>
          </div>
          <div className="pt-3 footer_icons w-25 text-end">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={icons[0]} alt="" className="me-5" />
            </a>
            <a
              href="https://web.whatsapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={icons[1]} alt="" className="me-5" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={icons[2]} alt="" className="me-5" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <img src={icons[3]} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
