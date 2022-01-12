// import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/sandstone/bootstrap.min.css";
import ScheduleList from "./components/ScheduleList";
import { Container } from "react-bootstrap";
import React, { useContext } from "react";
import Login from "./components/Login";
import ScheduleContext from "./context/ScheduleContext";

function App() {
  const { user } = useContext(ScheduleContext);

  return <Container>{user ? <ScheduleList /> : <Login />}</Container>;
}

export default App;
