// import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/sandstone/bootstrap.min.css";
import ScheduleList from "./components/ScheduleList";
import { Container } from "react-bootstrap";

import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";

// const user = "Patricio";
// let user = prompt("Please enter your name");

function App() {
  const [schedules, setSchedules] = useState([
    {
      time: "8:30",
      available: 1,
      customers: [],
    },
    {
      time: "9:30",
      available: 8,
      customers: [],
    },
    {
      time: "10:00",
      available: 8,
      customers: [],
    },
    {
      time: "10:30",
      available: 8,
      customers: [],
    },
    {
      time: "11:00",
      available: 8,
      customers: [],
    },
    {
      time: "11:30",

      available: 8,
      customers: [],
    },
    {
      time: "12:00",
      available: 8,
      customers: [],
    },
    {
      time: "12:30",
      available: 8,
      customers: [],
    },
    {
      time: "13:00",
      available: 8,
      customers: [],
    },
    {
      time: "13:30",
      available: 8,
      customers: [],
    },
    {
      time: "14:00",
      available: 8,
      customers: [],
    },
    {
      time: "14:30",
      available: 8,
      customers: [],
    },
    {
      time: "15:00",
      available: 8,
      customers: [],
    },
    {
      time: "15:30",
      available: 8,
      customers: [],
    },
    {
      time: "16:00",
      available: 0,
      customers: [],
    },
  ]);
  const [user, setUser] = useState("");
  console.log("user", user);
  console.log(schedules);
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
  return (
    <Container>
      {user ? (
        <ScheduleList
          schedules={schedules}
          bookingBike={bookingBike}
          user={user}
        />
      ) : (
        <Login setUser={setUser} />
      )}
    </Container>
  );
}

export default App;
