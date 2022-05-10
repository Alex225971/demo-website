import React from "react";
import "./About.scss";
import aboutImg from "../../assets/CEO.png";

export default function About() {
  return (
    <div className="container about_container">
      <div className="row">
        <div className="col-md d-flex flex-column justify-content-center align-items-start">
          <h3 className="about_header">Johnathan Doe</h3>
          <h5 className="about_subheader">CEO</h5>
          <p className="about_info">
            Nostrud pariatur exercitation esse laboris ullamco occaecat
            cupidatat qui commodo ullamco. Laborum deserunt nisi aute est est
            tempor sunt enim aliquip esse excepteur nulla. Ea cillum ipsum in
            sit nisi. Minim et quis veniam reprehenderit consectetur amet
            occaecat Lorem in quis ipsum exercitation voluptate Lorem.
          </p>
          <div className="btn about_btn">Learn More</div>
        </div>
        <div className="col-md">
          <img src={aboutImg} alt="Johnathan Doe" width={"400px"} />
        </div>
      </div>
    </div>
  );
}
