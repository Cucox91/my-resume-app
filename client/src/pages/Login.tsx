import React, { useState } from 'react';
import { Container, Form, Button, Message } from 'semantic-ui-react';
import axios from 'axios';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // Adjust the URL as needed (e.g., http://localhost:5001)
      const response = await axios.post('/api/auth/login', {
        username,
        password,
      });
      // Extract token from response
      const { token } = response.data;

      // Store token in localStorage (or sessionStorage)
      localStorage.setItem('token', token);

      setSuccess('Login successful!');
      // Optionally redirect, e.g.:
      // navigate('/dashboard');
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Login failed');
    }
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
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
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;