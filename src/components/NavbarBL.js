import React from 'react'
import { Navbar, Nav,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import "./Login.css"
function NavbarBL() {
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
        <Link to="/register" className='L-underline L-margin'>REGISTER</Link>
        <Link to="/" className='L-underline ml-5'>LOGIN</Link>
        {/* <Link to="/home" className='L-underline ml-5'>HOME</Link> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavbarBL
