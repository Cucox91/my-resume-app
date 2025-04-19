import React from "react";
import { Menu, Container, Dropdown, DropdownMenu, DropdownItem } from "semantic-ui-react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/useUser";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();

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
              {!user ? (
                <DropdownItem as={Link} to="/login">
                  Admin Login
                </DropdownItem>
              ) : (
                <DropdownItem
                  onClick={() => {
                    localStorage.removeItem("token");
                    setUser(null);
                    navigate("/");
                  }}
                >
                  Logout
                </DropdownItem>
              )}

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
