import React, { useState } from "react";
import Create_event from "./Create_event";

export default function Event() {
  const [create, setcreate] = useState(false);

  return (
    <div>
      <div class="container">
        <div class="card">
          <div class="card-body">
            <div style={{ textAlign: "left" }}>
              <h5 class="card-title text-left">Events</h5>
              <div class="d-flex justify-content-start">
                <span class="text-secondary ">
                  List of Events - &#160;
                  <span
                    className="onclick"
                    onClick={() => setcreate(create ? false : true)}
                  >
                    {create ? "Back " : "Create"}
                  </span>
                </span>
              </div>
            </div>
          </div>
          {create ? (
            <Create_event />
          ) : (
            <>
              <div class="card-body mytop ">
                <div style={{ textAlign: "left" }}>
                  <div class="d-flex justify-content-start mt-4 mb-3">
                    <span style={{ padding: "10px" }}> Show</span>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      style={{ width: "70px" }}
                    >
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5" selected>
                        5
                      </option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                    <span style={{ padding: "10px" }}>entries</span>
                  </div>
                  <div class="d-flex justify-content-start">
                    <table class="table table-borderless">
                      <thead>
                        <tr>
                          <th class="text-secondary " scope="col">
                            NAME
                          </th>
                          <th class="text-secondary " scope="col">
                            LOCATION
                          </th>
                          <th class="text-secondary " scope="col">
                            TIME
                          </th>
                          <th class="text-secondary" scope="col">
                            ACTION
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td scope="row">USER SDH DSFHKSDJFH KJ</td>
                          <td>RUSSIA</td>
                          <td>May 19 2921 -398 UTC</td>
                          <td>
                            <span className="onclick">Edit &#160;</span>
                            <span className="onclick">Delete</span>
                          </td>
                        </tr>

                        <tr>
                          <td scope="row">USER SDH DSFHKSDJFH KJ</td>
                          <td>RUSSIA</td>
                          <td>May 19 2921 -398 UTC</td>
                          <td>
                            <span className="onclick">Edit &#160;</span>
                            <span className="onclick">Delete</span>
                          </td>
                        </tr>
                        <tr>
                          <td scope="row">USER SDH DSFHKSDJFH KJ</td>
                          <td>RUSSIA</td>
                          <td>May 19 2921 -398 UTC</td>
                          <td>
                            <span className="onclick">Edit &#160;</span>
                            <span className="onclick">Delete</span>
                          </td>
                        </tr>
                        <tr>
                          <td scope="row">USER SDH DSFHKSDJFH KJ</td>
                          <td>RUSSIA</td>
                          <td>May 19 2921 -398 UTC</td>
                          <td>
                            <span className="onclick">Edit &#160;</span>
                            <span className="onclick">Delete</span>
                          </td>
                        </tr>
                        <tr>
                          <td scope="row">USER SDH DSFHKSDJFH KJ</td>
                          <td>RUSSIA</td>
                          <td>May 19 2921 -398 UTC</td>
                          <td>
                            <span className="onclick">Edit &#160;</span>
                            <span className="onclick">Delete</span>
                          </td>
                        </tr>
                        <tr>
                          <td scope="row">USER SDH DSFHKSDJFH KJ</td>
                          <td>RUSSIA</td>
                          <td>May 19 2921 -398 UTC</td>
                          <td>
                            <span className="onclick">Edit &#160;</span>
                            <span className="onclick">Delete</span>
                          </td>
                        </tr>
                        <tr>
                          <td scope="row">USER SDH DSFHKSDJFH KJ</td>
                          <td>RUSSIA</td>
                          <td>May 19 2921 -398 UTC</td>
                          <td>
                            <span className="onclick">Edit &#160;</span>
                            <span className="onclick">Delete</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="card-body mytop p-2 pb-0">
                <div class="d-flex justify-content-between mt-1 ">
                  <span class="text-secondary ">
                    Showing 1 to 5 of 100 result{" "}
                  </span>
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item">
                        <a class="page-link" href="#">
                          Previous
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          3
                        </a>
                      </li>{" "}
                      <li class="page-item">
                        <a class="page-link" href="#">
                          ...
                        </a>
                      </li>{" "}
                      <li class="page-item">
                        <a class="page-link" href="#">
                          3
                        </a>
                      </li>{" "}
                      <li class="page-item">
                        <a class="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
