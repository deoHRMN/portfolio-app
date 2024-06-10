import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
    const [expanded, setExpanded] = useState(false);

    const handleNavLinkClick = () => {
        setExpanded(false);
    };

    return (
        <Navbar expand='lg' className='bg-dark w-100 fixed-top z-1' data-bs-theme='dark' expanded={expanded}>
            <Container>
                <Navbar.Brand href='#' className='fs-4'>DEO.H</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' onClick={() => setExpanded(!expanded)} />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto w-100 d-flex justify-content-end'>
                        <Nav.Link href='#header' className='text-primary' onClick={handleNavLinkClick}>Home</Nav.Link>
                        <Nav.Link href='#about' className='text-primary' onClick={handleNavLinkClick}>About</Nav.Link>
                        <Nav.Link href='#projects' className='text-primary' onClick={handleNavLinkClick}>Projects</Nav.Link>
                        <Nav.Link href='#contact' className='text-primary' onClick={handleNavLinkClick}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;
