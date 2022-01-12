// import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/sandstone/bootstrap.min.css";
import ScheduleList from "./components/ScheduleList";
import { Container } from "react-bootstrap";

import React, { useContext, useState } from "react";
import Login from "./components/Login";
import ScheduleContext from "./context/ScheduleContext";
// const user = "Patricio";
// let user = prompt("Please enter your name");

function App() {
  const { user, schedules, getCustomerList } = useContext(ScheduleContext);
  getCustomerList();
  /** 
  const bookingBike = (selectedSchedule) => {
    //busco la hora
    const isCurrentUser = selectedSchedule.customers.includes(user);
    const index = schedules.findIndex(
      (schedule) => schedule.time === selectedSchedule.time
    );
    const clone = schedules;

    //en caso de que el usuario ya haya reservado una moto a esta hora
    if (!isCurrentUser) {
      if (clone[index].available === 0) return;

      clone[index].available -= 1;
      clone[index].customers.push(user);
      setSchedules([...clone]);
    } else {
      clone[index].available += 1;
      clone[index].customers.pop();

      setSchedules([...clone]);
    }
  };
  /** */
  return (
    <Container>{user ? <ScheduleList user={user} /> : <Login />}</Container>
  );
}

export default App;
