import React from "react";
import servicesImg from "./ServicesImgs";

export function Services() {
  return (
    <div className="services_container my-5">
      <h3 className="services_heading mt-5">Browse our services</h3>
      <h5 className="services_subheading text-secondary">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </h5>

      <div>
        <ul className="service_list d-flex flew-row justify-content-center">
          <li className="mx-3">
            <div className="card d-flex align-items-center">
              <img src={servicesImg[0]} className="w-50 m-3" />
              <p className="fs-5">Service 1</p>
              <p>Sed ut perspiciatis unde omnis iste natus error</p>
            </div>
          </li>
          <li className="mx-3">
            <div className="card d-flex align-items-center">
              <img src={servicesImg[1]} className="w-50 m-3" />
              <p className="fs-5">Service 1</p>
              <p>Sed ut perspiciatis unde omnis iste natus error</p>
            </div>
          </li>
          <li className="mx-3">
            <div className="card d-flex align-items-center">
              <img src={servicesImg[2]} className="w-50 m-3" />
              <p className="fs-5">Service 1</p>
              <p>Sed ut perspiciatis unde omnis iste natus error</p>
            </div>
          </li>
          <li className="mx-3">
            <div className="card d-flex align-items-center">
              <img src={servicesImg[3]} className="w-50 m-3" />
              <p className="fs-5">Service 1</p>
              <p>Sed ut perspiciatis unde omnis iste natus error</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
