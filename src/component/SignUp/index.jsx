import  { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const navigateTo = useNavigate();
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const handleRegister = () => {
    setIsRegister(true);
    if (email.trim().length && password.trim().length &&name.trim().length) {
      localStorage.setItem("userInfo", JSON.stringify([{ email, password }]));
      navigateTo("/login");
    }
  };

  return (
    <Form className="signup-container">
      <div>
        <h3 className="text-center mb-2">Register User</h3>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Name
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
            {!name.trim().length && isRegister && (
              <p className="error-message">Please enter valid name</p>
            )}
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="email"
              placeholder="email@example.com"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            {!email.trim().length && isRegister && (
              <p className="error-message">Please enter valid email id</p>
            )}
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            {!password.trim().length && isRegister && (
              <p className="error-message">Please enter valid password</p>
            )}
          </Col>
        </Form.Group>
      </div>
      <div>
        <Button
          className="loginBtn"
          variant="primary"
          onClick={() => {
            navigateTo("/login");
          }}
        >
          Back
        </Button>
        <Button
          className="registrationBtn"
          variant="primary"
          onClick={handleRegister}
        >
          Register
        </Button>
      </div>
    </Form>
  );
};

export default Signup;
