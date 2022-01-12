import React, { useEffect, useState } from "react";

export function bookingBike(time, schedules) {
  console.log("");
}

const useData = (timeBooked) => {
  console.log(timeBooked);
  const [schedules, setSchedules] = useState([
    {
      time: "8:30",
      available: 8,
      customers: [],
    },
    {
      time: "9:00",
      available: 8,
      customers: [],
    },
  ]);
  /**/

  useEffect(() => {
    if (timeBooked?.time) {
      console.log("entra");
      const clone = schedules;
      const index = clone.findIndex(
        (schedule) => schedule.time === timeBooked.time
      );
      if (clone[index].available === 0) return;
      clone[index].available -= 1;

      setSchedules(clone);
    } else {
      setSchedules(schedules);
    }
  }, [schedules, timeBooked]);
  /**/
  return schedules;
};

export default useData;
