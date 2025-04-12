import React from "react";
import { Menu, Container, Dropdown, DropdownMenu, DropdownItem } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <Menu stackable inverted>
      <Container fluid>
        <Menu.Item as={Link} to="/" header>
          My Resume
        </Menu.Item>
        <Dropdown item text="More about me.">
          <DropdownMenu>
            <DropdownItem as={Link} to="/hobby">
              Hobbies
            </DropdownItem>
            <DropdownItem as={Link} to="/learning">
              Currently Learning
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Menu.Menu position="right">
          <Dropdown item text="Account">
            <DropdownMenu>
              <DropdownItem as={Link} to="/login">
                Admin Login
              </DropdownItem>
              {/* <DropdownItem as={Link} to="/register">
                Register
              </DropdownItem> */}
            </DropdownMenu>
          </Dropdown>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Header;
