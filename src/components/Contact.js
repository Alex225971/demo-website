import React from "react";

export function Contact() {
  return (
    <div class="col-lg-5 mx-auto my-5">
      <form class="my-5">
        <div class="my-3">
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
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Message
          </label>
          <textarea
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
