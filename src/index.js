import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScheduleState from "./context/ScheduleState";
ReactDOM.render(
  <ScheduleState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ScheduleState>,
  document.getElementById("root")
);
