import React, { useState, useEffect } from "react";
import Location from "./location";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Get_event_by_id } from "../redux/request";
export default function Create_event(props) {
  const [name, setname] = useState();
  const [location, setlocation] = useState();
  const [date, setdate] = useState();
  const event_info = useSelector((state) => state.event.event_info);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (location === undefined) {
      toast.error("Please enter a Location");
    } else {
      await props.post({
        Name: name,
        Location: location,
        Date: date,
      });
      await props.goback();
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
    
    if (props.id) {
      console.log(props.id)
        Get_event_by_id(props.id)
          .then((response) => {
            var val = [response.data];
               if (val[0]) {
                 setname(val[0].Name);
                 setdate(val[0].Date);
                 setlocation(val[0].Location);
               }
          })
          .catch((error) => {});
   
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
