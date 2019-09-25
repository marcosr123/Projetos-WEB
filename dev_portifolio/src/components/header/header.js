import React from "react";

import {Navbar, Row} from 'react-materialize';

import {NavLink} from 'react-router-dom';

const Header = () => (
    <Row>
        <Navbar className="#01579b light-blue darken-4">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='contact'>Contact</NavLink></li>
        </Navbar>
    </Row>
);

export default Header;