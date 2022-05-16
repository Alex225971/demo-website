import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import { Navigation } from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import { Services } from "./components/Services/Services";
import Reviews from "./components/Reviews/Reviews";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/about"
          element={
            <React.Fragment>
              <Navigation />
              <Header />
              <Services />
              <About />
              <Footer />
            </React.Fragment>
          }
        />
        <Route
          path="/gallery"
          element={
            <React.Fragment>
              <Navigation />
              <Header />
              <Gallery />
              <Footer />
            </React.Fragment>
          }
        />
        <Route
          path="/contact"
          element={
            <React.Fragment>
              <Navigation />
              <Header />
              <Reviews />
              <Footer />
            </React.Fragment>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
