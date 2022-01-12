import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import ScheduleProvider from "./hook/schedule-context";

ReactDOM.render(
  // <ScheduleProvider>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  // </ScheduleProvider>,
  document.getElementById("root")
);
