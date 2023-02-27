import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CloseButton from 'react-bootstrap/CloseButton';


export default function ProgramPath1() {
  return (
    <>
    <div className="box1" style={{backgroundColor:' #9494cc'}}>
        
            <Navbar  expand="lg">
            <Container>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Program Path Inspection Form</Nav.Link>
                    
                
                </Nav>
                </Navbar.Collapse>
            </Container>
            <CloseButton />
            </Navbar>
            
  
    </div>
    </>
  );
}
