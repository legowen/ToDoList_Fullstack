import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import api from "../utils/api";

const LoginPage = ({user, setUser}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Function for saving users data
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post("/user/login", { email, password });
      if (response.status === 200) {
        setUser(response.data.user);
        sessionStorage.setItem("token", response.data.token);
        // Save dataToken to "Session Storage".
        api.defaults.headers["authorization"] = "Bearer " + response.data.token;
        // When creating a token for authentication, 'Bearer' signifies the type of token being passed in the authorization header.
        setError("");
        navigate("/");
      }
      throw new Error(response.message);
    } catch (error) {
      setError(error.message);
    }
  };
  if(user){
    return <Navigate to="/"/> 
  }

  return (
    <div className="display-center">
      {error && <div className="red-error">{error}</div>}
      <Form className="login-box" onSubmit={handleLogin}>
        <h1>Sign In</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
        <div className="button-box">
          <Button type="submit" className="button-primary">
            Sign In
          </Button>
          <span>
            Register? <Link to="/register">Register!</Link>
          </span>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
