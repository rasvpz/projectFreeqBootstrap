import React from 'react'
import {Navbar, Nav, FormControl, InputGroup} from 'react-bootstrap'
import '../Header/Header.css'
import { BsSearch, BsHeart, BsPerson, BsCartDash } from "react-icons/bs";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
<>
<Navbar collapseOnSelect expand="lg" className="topNavBG" variant="dark">
  <Navbar.Brand className="brand">  <Link className="brnd" to ="/"><b>freeQ</b></Link> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <InputGroup>
      <InputGroup.Text id="btnGroupAddon"><BsSearch /></InputGroup.Text>
      <FormControl id="mrgn"
        type="text"
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
      />
    </InputGroup>
    </Nav>


    <Nav>
      <Nav.Link className='rightMenusTop' href="#features">Wishlist &nbsp; <BsHeart /></Nav.Link>
      <Nav.Link className='rightMenusTop' href="#pricing">SignIn &nbsp; <BsPerson /></Nav.Link>
      <Nav.Link className='rightMenusTop' href="#features">Cart &nbsp; <BsCartDash /> </Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
</>
  )
}

export default Header