import { createSlice } from "@reduxjs/toolkit";

const event_info = {
 
};

export const Eventapi = createSlice({
  name: "Eventapi",
  initialState: { event_info: event_info },
  reducers: {
    event_info_get: (state, action) => {
      state.event_info = action.payload;
    },
  },
});

export const { event_info_get } = Eventapi.actions;

export default Eventapi.reducer;
