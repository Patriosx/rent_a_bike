import React, { createContext, useState } from "react";

const ScheduleContext = createContext({
  schedules: [
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
  ],
});

export function ScheduleProvider(props) {
  const [schedulesUpdated, setSchedulesUpdated] = useState([]);

  const context = {
    schedules: schedulesUpdated,
    customers: [],
  };
  function bookBike(time) {
    const index = schedulesUpdated.findIndex(
      (schedule) => schedule.time === time
    );
    // schedulesUpdated[index].available -= 1;
  }
  return (
    <ScheduleContext.Provider value={context}>
      {props.children}
    </ScheduleContext.Provider>
  );
}

export default ScheduleContext;
