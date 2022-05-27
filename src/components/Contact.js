import React from "react";

export default function Contact() {
  return (
    <div class="col-lg-5 col-md-8 mx-auto my-5">
      <div class="p-4">
        <h3>Contact Us</h3>
        <p>
          Fill in the form below with your enquiry and we will get back to you
          as soon as possible.
        </p>
      </div>

      <form class="mb-5 p-2">
        <div class="my-4 p-2">
          <label for="exampleInputEmail1" class="form-label text-start">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-4 p-2">
          <label for="exampleInputPassword1" class="form-label">
            Message
          </label>
          <textarea
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" class="btn btn-primary m-2">
          Submit
        </button>
      </form>
    </div>
  );
}
