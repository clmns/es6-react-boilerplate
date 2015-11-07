import React from 'react';
import {Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

export default class NavBar extends React.Component {
    render(){
        return(
            <Navbar toggleNavKey={0}>
                <NavBrand><a href="#">es6-react-bootstrap-boilerplate</a></NavBrand>
                <Nav>
                  <NavItem href="#">Link</NavItem>
                  <NavDropdown title="Dropdown" id="collapsible-navbar-dropdown">
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">Separated link</MenuItem>
                  </NavDropdown>
                </Nav>
             </Navbar>
            );
    }
}