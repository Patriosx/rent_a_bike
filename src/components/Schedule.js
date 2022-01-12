import React, { useContext } from "react";
import ScheduleContext from "../context/ScheduleContext";

const Schedule = ({ schedule, index, user }) => {
  const { toggleBookingBike } = useContext(ScheduleContext);

  function onBookingBike(time) {
    toggleBookingBike(time);
  }
  return (
    <tr style={{ cursor: "pointer" }} onClick={() => onBookingBike(schedule)}>
      <td>{index + 1}</td>
      <td>{schedule.time}</td>
      <td
        className={
          (schedule.customers?.includes(user) ? "bg-success" : "") ||
          (schedule.available === 0 ? "bg-danger" : "")
        }
      >
        {schedule.available}
      </td>
    </tr>
  );
};

export default Schedule;
