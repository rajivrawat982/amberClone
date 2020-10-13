import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './Css/Navigation.css';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Button from '@material-ui/core/Button';


function Navigation(){
    return (
        <div className="siteTop">
        <Navbar expand="lg">
        <Navbar.Brand href="#home"><img src="https://static-assets-amberstudent.imgix.net/images/logo/amber_logo_full.png"
                                        alt="amber logo"
                                        className="amberlogo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="#home" className="navItem">Home</Nav.Link>
            <Nav.Link href="#link" className="navItem">Features</Nav.Link>
            <Nav.Link href="#link" className="navItem"><HelpOutlineIcon/> How it Works</Nav.Link>
            <Nav.Link href="#link" className="navItem">Help</Nav.Link>
            <Nav.Link href="#link" className="navItem">Login</Nav.Link>
            </Nav>    
        </Navbar.Collapse>
        </Navbar>
        <div className="topMiddle">
            <h1>HOME AWAY FROM HOME</h1>
            <h3>Book your student accommodation near top universities across the globe.</h3>
            <input></input>
            <Button variant="contained" color="secondary">Search</Button>
        </div>
        </div>
    )
}

export default Navigation;