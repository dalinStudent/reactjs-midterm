import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <LinkContainer to="/">
                <Navbar.Brand href="#home">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                        width="60"
                        height="50"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to="#home">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/contact">
                        <Nav.Link>Contact Us</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/feedback">
                        <Nav.Link>Feedback</Nav.Link>
                    </LinkContainer>
                    
                </Nav>

                <Nav className="justify-content-end">
                     <NavDropdown title="Account" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <LinkContainer to="/register">
                                <Nav.Link>Register</Nav.Link>
                            </LinkContainer>
                        </NavDropdown.Item>

                        <NavDropdown.Item>
                            <LinkContainer to="/Login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                        </NavDropdown.Item>

                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
            
        </Navbar>
    )
}

export default header;