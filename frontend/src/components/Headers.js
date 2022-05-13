import React from "react";
import {Container, Navbar } from 'react-bootstrap';
import { ReactComponent as Logo } from "../images/Logo.svg";

const navbarStyle = {
    backgroundColor:"lightblue"
}

const Header = ({title}) => {
    return(
        <Navbar style={navbarStyle} variant="light">
            <Container>
                <Logo alt={title} style={{maxWidth: '10rem', maxHeight: '4rem'}} />
            </Container>
        </Navbar>
    )
}

export default Header;