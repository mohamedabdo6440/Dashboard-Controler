import React from "react";
import { Container, Navbar } from "react-bootstrap";

export const NavbarCompo = () => {
  return (
    <>
      <Navbar variant="light" expand="md" style={{ position: "relative", backgroundColor: "#e9ecef" }}>
        <Container fluid>
          <Navbar.Brand href="/ ">Motiv</Navbar.Brand>

          <input className="form-control w-50 " type="search" placeholder="Search" aria-label="Search"></input>
          <div className="d-flex">
            <i className="fa-solid fa-bell mx-3"></i>
            <i className="fa-solid fa-user "></i>
          </div>
        </Container>

      </Navbar>

    </>
  );
};
export default NavbarCompo;
