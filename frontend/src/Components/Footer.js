import React from "react";

export default function Footer() {
  return (
    <div style={{ marginBottom: "-3%" }}>
      <nav class="navbar navbar-light bg-light mt-5 w-100">
        <div class="container-fluid d-flex justify-content-center">
          <a href="https://www.linkedin.com/in/ebrahimbd/">
            Developed by &nbsp;
            <img
              src="data:image/png;base64,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"
              height={21}
              alt=""
            />
            &nbsp; Mohammad Saleh
          </a>
        </div>
      </nav>
    </div>
  );
}
