import React, { useState, useEffect } from "react";
import Create_event from "./Create_event";
import { useSelector, useDispatch } from "react-redux";
import { Get_event_info } from "../redux/request";
import { event_info_get } from "../redux/event_redux";
export default function Event() {
  const [create, setcreate] = useState(false);
  const dispatch = useDispatch();
  const event_info = useSelector((state) => state.event.event_info);
  const [table, settable] = useState();

  const editevent = (id) => {};

  const deltevent = (id) => {};

  useEffect(() => {
    Get_event_info(1, 5)
      .then((response) => {
        var val = [response.data];
        dispatch(event_info_get(val));
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    var td = [];
    if (event_info[0]) {
      event_info[0].map((x, ind) => {
        if (ind > 2) {
          td.push(
            <tr>
              <td scope="row">{x.Name}</td>
              <td>{x.Location}</td>
              <td>{x.Date} UTC</td>
              <td>
                <span className="onclick" onClick={() => editevent(`${x.id}`)}>
                  Edit &#160;
                </span>
                <span className="onclick" onClick={() => deltevent(`${x.id}`)}>
                  Delete
                </span>
              </td>
            </tr>
          );
        }
      });
      settable(td)
    }
  }, [event_info]);

  return (
    <div>
      <div class="container w-75">
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
                      {table}
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
