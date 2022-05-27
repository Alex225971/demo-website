import React from "react";
import servicesImg from "./ServicesImgs";

export function Services() {
  return (
    <div className="services_container my-5">
      <h3 className="services_heading mt-5 text-center">Browse our services</h3>
      <h5 className="services_subheading text-secondary">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </h5>

      <div>
        <ul className="service_list row justify-content-center w-100">
          <li className="col-lg-2 col-md-5">
            <div className="card m-auto my-5 text-center">
              <img
                src={servicesImg[0]}
                className="my-3 m-auto"
                alt=""
                height="40%"
                width="40%"
              />
              <p className="fs-5">Service 1</p>
              <p>Sed ut perspiciatis unde omnis iste natus error</p>
            </div>
          </li>
          <li className="col-lg-2 col-md-5">
            <div className="card m-auto my-5 text-center">
              <img
                src={servicesImg[1]}
                className="my-3 m-auto"
                alt=""
                height="40%"
                width="40%"
              />
              <p className="fs-5">Service 1</p>
              <p>Sed ut perspiciatis unde omnis iste natus error</p>
            </div>
          </li>
          <li className="col-lg-2 col-md-5">
            <div className="card m-auto my-5 text-center">
              <img
                src={servicesImg[2]}
                className="my-3 m-auto"
                alt=""
                height="40%"
                width="40%"
              />
              <p className="fs-5">Service 1</p>
              <p>Sed ut perspiciatis unde omnis iste natus error</p>
            </div>
          </li>
          <li className="col-lg-2 col-md-5">
            <div className="card m-auto my-5 text-center">
              <img
                src={servicesImg[3]}
                className="my-3 m-auto"
                alt=""
                height="40%"
                width="40%"
              />
              <p className="fs-5">Service 1</p>
              <p>Sed ut perspiciatis unde omnis iste natus error</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
