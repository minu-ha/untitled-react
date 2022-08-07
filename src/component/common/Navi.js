import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navi(props) {
  return (
    <div>
      <Navbar bg="right" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={'/'}>home</Link>
            <Link to={'/detail'}>detail</Link>
          </Nav>
        </Container>
      </Navbar>
      <div className={'main-bg'}></div>
    </div>
  );
}

export default Navi;
