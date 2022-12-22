import React, { useState } from "react";
import Location from "./location";
import { toast } from "react-toastify";

export default function Create_event() {
  const [name, setname] = useState();
  const [location, setlocation] = useState();
  const [date, setdate] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(date);
    if (location ===undefined){
    toast.error("Please enter a Location");
    }else{
      toast.success('submit sucessfully ')
    }
  };

  return (
    <div>
      <div class="card-body mytop "></div>
      <div>
        <form
          class="row g-3"
          style={{ textAlign: "left" }}
          onSubmit={handleSubmit}
        >
          <div class="col-sm-12 tree">
            <label for="validationDefault01" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="validationDefault01"
              onChange={(e) => setname(e.target.value)}
              required
            />
          </div>

          <div class="col-sm-6 tree1">
            <label for="validationDefault04" class="form-label">
              Location
            </label>
            <Location change={setlocation} />
          </div>
          <div class="col-sm-6 tree1">
            <label for="validationDefault05" class="form-label">
              Date
            </label>
            <input
              type="datetime-local"
              class="form-control"
              id="validationDefault05"
              onChange={(e) => setdate(e.target.value)}
              required
            />
          </div>

          <div>
            <div class="card-footer d-flex justify-content-end mt-4">
              <button type="submit" class="btn btn-primary">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
