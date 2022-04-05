import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from "../CustomLink/CustomLink";
import './Header.css';

const Header = () => {
  return (
    <Navbar className='mb-5' bg="info" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://i.pcmag.com/imagery/reviews/07FMJxND7Ck3AGe97FaZOek-1.fit_scale.size_1028x578.v1640182987.jpg"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/reviews">Reviews</CustomLink>
            <CustomLink to="/dashBoard">DashBoard</CustomLink>
            <CustomLink to="/blogs">Blogs</CustomLink>
            <CustomLink to="/about">About</CustomLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
