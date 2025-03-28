import React, { useState } from "react";
import { Container, Form, Button, Message } from "semantic-ui-react";
import { registerUser } from "../../apis/authApi";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await registerUser(username, password);
      setSuccess("Registration successful! You can now log in.");
      setUsername("");
      setPassword("");
    } catch (err: any) {
      setError(err?.response?.data?.message || "Registration failed");
    }
  };

  return (
    <Container>
      <h2>Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Input
          label="Username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Form.Input
          label="Password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Message negative content={error} />}
        {success && <Message positive content={success} />}
        <Button type="submit" primary>
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
