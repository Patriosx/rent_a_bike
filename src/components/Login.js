import React, { useContext, useState } from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Form,
  Card,
} from "react-bootstrap";
import ScheduleContext from "../context/ScheduleContext";

const Login = () => {
  const [inputUser, setInputUser] = useState("");

  const { getCurrentUser } = useContext(ScheduleContext);
  const onLogin = (e) => {
    e.preventDefault();
    getCurrentUser(inputUser.toLocaleLowerCase());
  };

  const inputHandler = (e) => {
    setInputUser(e.target.value);
  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card className="text-center p-5">
        <h1 className="m-4">Motorcycles for rent</h1>
        <Container>
          <Form onSubmit={onLogin}>
            <InputGroup>
              <FormControl
                type="text"
                name="user"
                id=""
                placeholder="enter your username..."
                onChange={inputHandler}
              />
              <button type="submit" className="btn btn-success">
                Login
              </button>
            </InputGroup>
          </Form>
        </Container>
      </Card>
    </Container>
  );
};

export default Login;
