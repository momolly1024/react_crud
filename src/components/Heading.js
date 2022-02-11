import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";
function Heading() {
    return (
        <Navbar color="dark" dark>
            <Container>
                <Nav>
                    <NavItem>
                        <NavbarBrand href="/">Molly</NavbarBrand>
                        <Link className="btn btn-primary" to="/add">
                            Add User
                        </Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Heading;
