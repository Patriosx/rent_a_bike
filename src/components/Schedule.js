import useData from "../hook/useData";
import React, { useState } from "react";

const Schedule = ({ schedule, index, bookingBike, user }) => {
  function onBookingBike(time) {
    bookingBike(time);
  }
  return (
    <tr style={{ cursor: "pointer" }} onClick={() => onBookingBike(schedule)}>
      <td>{index + 1}</td>
      <td>{schedule.time}</td>
      <td
        className={
          (schedule.customers.includes(user) &&
            // schedule.available !== 0 &&
            "bg-success") ||
          (schedule.available === 0 && "bg-danger")
        }
      >
        {schedule.available}
      </td>
    </tr>
  );
};

export default Schedule;
