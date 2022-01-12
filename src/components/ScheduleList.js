import React, { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import Schedule from "./Schedule";
import useData from "../hook/useData";
import { capitalized } from "../utils/utils";

const ScheduleList = ({ schedules, bookingBike, user }) => {
  return (
    <Container className="m-2">
      <div className="p-2">
        <h2>Welcome {capitalized(user)}</h2>
      </div>
      <Table bordered hover className="text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Time</th>
            <th>Bikes Available</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule, i) => {
            return (
              <Schedule
                key={schedule.time}
                schedule={schedule}
                index={i}
                bookingBike={bookingBike}
                user={user}
              />
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default ScheduleList;
