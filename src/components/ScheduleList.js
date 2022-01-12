import React, { useContext } from "react";
import { Table, Container } from "react-bootstrap";
import Schedule from "./Schedule";
import { capitalized } from "../utils/utils";
import ScheduleContext from "../context/ScheduleContext";

const ScheduleList = ({ user }) => {
  //Acceso al estado del contexto
  const { schedules } = useContext(ScheduleContext);

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
