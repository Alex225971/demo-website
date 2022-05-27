import React from "react";

export default function Contact() {
  return (
    <div className="col-lg-5 col-md-8 mx-auto my-5">
      <div className="p-4">
        <h3 className="text-center">Contact Us</h3>
        <p className="text-center">
          Fill in the form below with your enquiry and we will get back to you
          as soon as possible.
        </p>
      </div>

      <form className="mb-5 p-2">
        <div className="my-4 p-2">
          <label htmlFor="exampleInputEmail1" className="form-label text-start">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-4 p-2">
          <label for="exampleInputPassword1" className="form-label">
            Message
          </label>
          <textarea
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary m-2 ">
          Submit
        </button>
      </form>
    </div>
  );
}
