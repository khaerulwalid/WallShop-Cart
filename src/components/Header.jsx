import React from "react";
import { Container, Navbar, Form, Dropdown, DropdownButton } from "react-bootstrap";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Wall Tech</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <Form.Control type="text" placeholder="Search a product" className="m-auto" />
        </Navbar.Text>

        {/* DROPDOWN */}
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <FaCartShopping /> 0
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ padding: 15 }}>
            <Dropdown.Item href="#/action-1">Cart is empty</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};
