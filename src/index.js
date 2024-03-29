import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import { Navigation } from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import GalleryFullVersion from "./components/Gallery/GalleryFullVersion";
import { Services } from "./components/Services/Services";
import Contact from "./components/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/about"
          element={
            <div class="page__container">
              <Navigation />
              <div class="body__flex-grow">
                <Services />
                <About />
              </div>
              <Footer />
            </div>
          }
        />
        <Route
          path="/gallery"
          element={
            <div class="page__container">
              <Navigation />
              <div class="body__flex-grow">
                <GalleryFullVersion/>
              </div>
              <Footer />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div class="page__container">
              <Navigation />
              <div class="body__flex-grow">
                <Contact/>
              </div>
              <Footer />
            </div>
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
