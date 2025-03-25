import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Menu stackable inverted>
      <Container fluid>
        <Menu.Item as={Link} to="/" header>
          My Resume
        </Menu.Item>
        <Menu.Item as={Link} to="/login">
          Login
        </Menu.Item>
        <Menu.Item as={Link} to="/register">
          Register
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Header;