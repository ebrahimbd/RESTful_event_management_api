import { configureStore } from "@reduxjs/toolkit";

import event_redux from "./redux/event_redux";

export default configureStore({
  reducer: {
    event: event_redux,
  },
});
