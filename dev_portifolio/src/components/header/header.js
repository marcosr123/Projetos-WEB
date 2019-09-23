import React from "react";

import {Navbar, NavItem, Row} from 'react-materialize';

const Header = () => (
    <Row>
        <Navbar className="#01579b light-blue darken-4">
            <NavItem href='/'>Home</NavItem>
            <NavItem href='/contact'>Contatos</NavItem>
        </Navbar>
    </Row>
);

export default Header;