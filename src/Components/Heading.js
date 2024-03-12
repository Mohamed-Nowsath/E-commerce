import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { PiGooglePodcastsLogoBold } from "react-icons/pi";
import { Link, Outlet } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaShoppingBag } from "react-icons/fa";
import { IoUnlinkSharp } from "react-icons/io5";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { MdOutlineShareLocation } from "react-icons/md";
import { useSelector } from "react-redux";


function Heading() {

  let productCount=useSelector(state=>state.cart)
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary ps-5">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            Nowsath $hOpPErz <PiGooglePodcastsLogoBold />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 ps-5 my-lg-0 "
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/about">
                About <MdOutlineShareLocation />
              </Nav.Link>
              <Nav.Link as={Link} to="/link">
                Link <IoUnlinkSharp />
              </Nav.Link>
              <Nav.Link as={Link} to="/order">
                Order <MdOutlineShoppingCartCheckout />
              </Nav.Link>
              <Nav.Link as={Link} to="/myOrder">
                My Order <FaShoppingBag />{productCount.length}
              </Nav.Link>
              <Nav.Link as={Link} to="/service">
                Services <MdOutlineMiscellaneousServices />
              </Nav.Link>

              {/* ------------------------ */}

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>


            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Heading;
