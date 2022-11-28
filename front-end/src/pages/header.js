import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class Header extends React.Component{
    render(){
        return(
            <header>
              <title>Marcae</title>
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="py-4">
      <Container>
        <Navbar.Brand to="/" className="px-lg-5 px-sm-3 px-1">Marcaê</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" className="px-lg-5 px-sm-3 px-1">Inicio</Nav.Link>
            <Nav.Link href="#pricing" className="px-lg-5 px-sm-3 px-1" >Aulas</Nav.Link>
            <Nav.Link href="#pricing" className="px-lg-5 px-sm-3 px-1" >Professores</Nav.Link>
            <Nav.Link href="#pricing" className="px-lg-5 px-sm-3 px-1" >Sobre</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="login">Entrar</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Cadastro
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </header>
        );
    }
}

export default Header;