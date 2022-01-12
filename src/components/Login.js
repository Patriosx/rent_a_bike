import React, { useState } from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Form,
  Card,
} from "react-bootstrap";

const Login = ({ setUser }) => {
  const [inputUser, setInputUser] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    setUser(inputUser.toLocaleLowerCase());
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
        <h1 className="m-4">Renting a bike</h1>

        <Container>
          <Form onSubmit={onLogin}>
            <InputGroup>
              <FormControl
                type="text"
                name="user"
                id=""
                placeholder="enter your username..."
                onChange={inputHandler}
                //   value={inputUser}
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
