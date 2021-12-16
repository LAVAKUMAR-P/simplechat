import React from 'react'
import { Navbar, Nav,Container,FormControl,Form,Button} from 'react-bootstrap';
import {Link,useNavigate} from "react-router-dom"

function NavbarB() {
  const Navigate=useNavigate()
  let Logout = async () => {
    try {
      let check = window.confirm("Are you sure? Wanna Logout");
      if (check) {
        window.localStorage.removeItem("app_token");
        window.localStorage.removeItem("action");
        window.localStorage.removeItem("name");
        Navigate("/")
      }

    } catch (error) {
      window.alert("some thing went wrong try again");
    }
  };
    return (
      <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">SIMPLE CHAT</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
               <a
              className="L-underline L-margin"
              onClick={() => {
                Logout();
              }}
            >
              Logout
              </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavbarB
