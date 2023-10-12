import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

function NavbarHeader() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink className='navbrand' to="/">Ecommerce</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="item" to="/">HOME</NavLink>
            <NavLink className='item' to="/about">ABOUT</NavLink>
            <NavLink className='item' to="/products">Products</NavLink>
            <NavLink className='item' to="/contact">Contact</NavLink>
          </Nav>
          <NavLink to={`/cart`} className='bell-notification' current-count='8'>
                <i className="fa-solid fa-cart-shopping" ></i>
              </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarHeader
