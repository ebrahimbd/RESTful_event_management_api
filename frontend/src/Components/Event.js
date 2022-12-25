import React, { useState, useEffect, useRef } from "react";
import Create_event from "./Create_event";
import { useSelector, useDispatch } from "react-redux";
import {
  Get_event_info,
  POST_event_info,
  DELETE_event_info,
  PUT_event_info,
} from "../redux/request";
import { event_info_get } from "../redux/event_redux";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import BarLoader from "react-spinners/BarLoader";

export default function Event() {
  const [create, setcreate] = useState(false);
  const dispatch = useDispatch();
  const event_info = useSelector((state) => state.event.event_info);
  const [table, settable] = useState();
  const [pageCount, setpageCount] = useState();
  const [result, setresult] = useState();
  const [entries, setentries] = useState(5);
  const [delete_event, setdelete_event] = useState(false);
  const [isedit, setedit] = useState(false);
  const [editid, seteditid] = useState(0);
  const [loading, setloading] = useState(false);
  const assign_entries = useRef();
  const editevent = (id) => {
    setTimeout(() => {
      seteditid(id);
    }, 50);
    setTimeout(() => {
      setedit(true);
    }, 100);
    setTimeout(() => {
      setcreate(true);
    }, 150);
  };

  const goback = () => {
    setcreate(false);
  };

  const deltevent = (id) => {
    setloading(true);
    DELETE_event_info(id)
      .then((response) => {
        setdelete_event(delete_event ? false : true);
        toast.success("Sucessfully Delete Event");
        setloading(false);
      })
      .catch((error) => {});
  };

  const new_event = (data) => {
    setloading(true);
    POST_event_info(data)
      .then((response) => {
        toast.success("Submit sucessfully ");
        setloading(false);
      })
      .catch((error) => {});
  };

  const PUT_event = (data, id) => {
    setloading(true);
    PUT_event_info(data, id)
      .then((response) => {
        toast.success("Edit sucessfully ");
        setTimeout(() => {
          seteditid(0);
        }, 20);
        setTimeout(() => {
          setloading(false);
        }, 50);
      })
      .catch((error) => {});
  };

  const handlePageClick = (event) => {
  setloading(true);
  Get_event_info(event.selected, entries)
    .then((response) => {
      var val = [response.data];
      dispatch(event_info_get(val));
      setloading(false);
   
    })
    .catch((error) => {
      setloading(true);
        Get_event_info(event.selected, 1)
          .then((response) => {
            var val = [response.data];
            dispatch(event_info_get(val));
            setloading(false);
          })
          .catch((error) => {
            setloading(false);
          });
    });
  };

  const show_entries = (e) => {
    var sum = Math.abs(e.target.value);
    setentries(sum);
    setloading(true);
    Get_event_info(1, Math.abs(e.target.value))
      .then((response) => {
        var val = [response.data];
        dispatch(event_info_get(val));
        setloading(false);
      })
      .catch((error) => {setloading(false)});
  };

  useEffect(() => {
    try {
      var defult = entries;
      var entriesSelect = assign_entries.current;
      for (var i, j = 0; (i = entriesSelect.options[j]); j++) {
        if (i.value == defult) {
          entriesSelect.selectedIndex = j;
          break;
        }
      }
    } catch {}
  }, [entries]);

  useEffect(() => {
    setloading(true);
    Get_event_info(1, 5)
      .then((response) => {
        var val = [response.data];
        dispatch(event_info_get(val));
        setloading(false);
      })
      .catch((error) => {});
  }, [create, delete_event, editid]);

  useEffect(() => {
    setloading(true);
    var td = [];
    if (event_info[0]) {
      event_info[0].map((x, ind) => {
        if (ind == 0) {
          setresult(x.totall);
        }
        if (ind == 1) {
          setpageCount(x.totall_page);
        }
        if (ind > 1) {
          td.push(
            <tr>
              <td scope="row">{x.Name}</td>
              <td>{x.Location}</td>
              <td>
                {new Date(x.Date).toUTCString().replaceAll("GMT", "UTC")}{" "}
              </td>
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
          setloading(false);
        }
      });
      settable(td);
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
                    onClick={() => {
                      setcreate(create ? false : true);
                      setTimeout(() => {
                        setedit(false);
                      }, 100);
                      setTimeout(() => {
                        seteditid(0);
                      }, 200);
                    }}
                  >
                    {create ? "Back " : "Create"}
                  </span>
                </span>
              </div>
            </div>
          </div>
          {loading ? (
            <div class="card" style={{ transform: "translateY(2px)" }}>
              <BarLoader
                color={"#61dafb"}
                loading={true}
                height={4}
                width={"100%"}
              />
            </div>
          ) : (
            ""
          )}
          {create ? (
            <Create_event
              post={new_event}
              edit={isedit}
              goback={goback}
              put={PUT_event}
              id={editid}
            />
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
                      onChange={(e) => show_entries(e)}
                      ref={assign_entries}
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
                      <tbody>{table}</tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="card-body mytop p-2 pb-0">
                <div class="d-flex justify-content-between mt-1 ">
                  <span class="text-secondary ">
                    Showing 1 to {entries} of {result ? result : 0} result
                  </span>
                  <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount ? pageCount : 1}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
