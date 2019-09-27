import React from "react";

import {Navbar, Row} from 'react-materialize';

import {NavLink} from 'react-router-dom';

const Header = () => (
    <Row>
        <Navbar menuIcon={<a href="#!" class="brand-logo right"><img src="https://imgur.com/3meR5qu.png" alt="Icon navbar"/></a>} className="#01579b light-blue darken-4" alignLinks="right">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='shop'>Loja</NavLink></li>
            <li><NavLink to='news'>Noticias</NavLink></li>
            <li><NavLink to='contact'>Contato</NavLink></li>
        </Navbar>
    </Row>
);

export default Header;