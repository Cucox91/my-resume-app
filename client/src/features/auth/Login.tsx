import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Message } from "semantic-ui-react";
import { loginUser } from "../../apis/authApi";
import { useUser } from "../../context/useUser";
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "../../context/userContextTypes";

const Login: React.FC = () => {
  const { setUser } = useUser();

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await loginUser(username, password);
      const token = localStorage.getItem("token");
      if (token) {
        const decoded = jwtDecode<JwtPayload>(token);
        setUser(decoded);
        setSuccess("Login successful!");
        navigate("/admin");
      }
    } catch (err: any) {
      console.log(err);
      setError(err?.message || "Login failed");
    }
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Input label="Username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Form.Input label="Password" type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <Message negative content={error} />}
        {success && <Message positive content={success} />}
        <Button type="submit" primary>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
