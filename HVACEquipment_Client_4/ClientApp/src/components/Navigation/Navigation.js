import React from 'react';
import './Navigation.css';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
    Navbar,

    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,

    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'

const navigation = (props) => {
    return (
        <Col md={12} >
            <Navbar inverse collapseOnSelect>
               
                    <NavbarBrand>
                        <NavLink to={'/'} exact >Account-Owner</NavLink>
                    </NavbarBrand>
                    <NavbarToggler />
               
                <Collapse>
                    <Nav>
                        <LinkContainer to={'/owner-list'} exact>
                            <NavItem eventKey={1}>
                                Owner Actions
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/account-list'}>
                            <NavItem eventKey={2}>
                                Account Actions
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </Collapse>
            </Navbar>
        </Col>
    )
}

export default navigation;