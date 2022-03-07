import React from 'react'
import { Container, Nav, Navbar, NavbarBrand} from 'react-bootstrap'
import {signOut} from 'firebase/auth';
import { auth } from "../firebase-config"

const AppNavbar = ({user}) => {

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
       <Navbar bg='primary' variant='dark' style={{minWidth:"100"}}>
        <Container>
          <NavbarBrand>E-commerce</NavbarBrand>

          {user && <>
            <Nav className="me-auto">
            <Nav.Link href='/Dashboard'>Home</Nav.Link>
            <Nav.Link href='/Cart'>Cart</Nav.Link>
          </Nav>
          <Nav>
          <strong><Nav.Link disabled='true' style={{color:"white"}}>{user}</Nav.Link></strong>
          <Nav.Link href='/Login' onClick={logout}>Logout</Nav.Link>
          </Nav>
          </>}

          {!user && <>
            <Nav className="me-auto">
            <Nav.Link href='/Dashboard'>Home</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href='/Login'>Login</Nav.Link>
          <Nav.Link href='/Register'>Register</Nav.Link>
          </Nav>
          </>}
        </Container>
      </Navbar>
    </div>
  )
}

export default AppNavbar
