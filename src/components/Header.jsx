import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated} = useAuth0();
  
  return (
    <div>
        {<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="./" className="text-danger">MOVIES</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="./tvshows">TV Shows</Nav.Link>
            <Nav.Link href="./popular">New and Popular</Nav.Link>
            <Nav.Link href="./mylist">My List</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
          <form className="d-flex" role="search">
        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-secondary" type="submit">Search</button>
      </form>
      {isAuthenticated ? (<span className='px-2'><button className='btn btn-outline-primary ' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>)</span> ): ( <span className='px-2'><button className='btn btn-outline-primary ' onClick={() => loginWithRedirect()}>Log In</button></span>)}
     

          </Nav>
        </Container>
      </Navbar>}
    </div>
  )
}

export default Header
