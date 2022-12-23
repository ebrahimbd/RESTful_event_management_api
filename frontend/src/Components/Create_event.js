import React, { useState, useEffect } from "react";
import Location from "./location";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export default function Create_event(props) {
  const [name, setname] = useState();
  const [location, setlocation] = useState();
  const [date, setdate] = useState();
  const event_info = useSelector((state) => state.event.event_info);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (location === undefined) {
      toast.error("Please enter a Location");
    } else {
      props.post({
        Name: name,
        Location: location,
        Date: date,
      });
      props.goback();
    }
  };

  const sendedit = (event) => {
    event.preventDefault();

    if (location === undefined) {
      toast.error("Please enter a Location");
    } else {
      props.put(
        {
          Name: name,
          Location: location,
          Date: date,
        },
        props.id
      );
      props.goback();
    }
  };

  useEffect(() => {
    if (event_info[0]) {
      event_info[0].map((x, ind) => {
        if (x.id == props.id) {
          setname(event_info[0][ind].Name);
          setdate(event_info[0][ind].Date);
          setlocation(event_info[0][ind].Location);
        }
      });
    }
  }, [event_info]);

  return (
    <div>
      <div class="card-body mytop "></div>
      <div>
        <form
          class="row g-3"
          style={{ textAlign: "left" }}
          onSubmit={props.edit ? sendedit : handleSubmit}
        >
          <div class="col-sm-12 tree">
            <label for="validationDefault01" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="validationDefault01"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
              required
            />
          </div>

          <div class="col-sm-6 tree1">
            <label for="validationDefault04" class="form-label">
              Location
            </label>
            <Location change={setlocation} location_name={location} />
          </div>
          <div class="col-sm-6 tree1">
            <label for="validationDefault05" class="form-label">
              Date
            </label>
            <input
              type="datetime-local"
              class="form-control"
              id="validationDefault05"
              value={date ? new Date(date).toISOString().slice(0, 16) : date}
              onChange={(e) => setdate(e.target.value)}
              required
            />
          </div>

          <div>
            <div class="card-footer d-flex justify-content-end mt-4">
              <button type="submit" class="btn btn-primary">
                {props.edit ? "Edit" : "Create"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
