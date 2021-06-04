import React, { Component } from 'react'; // 1
import logo from '../Images/Just_Mechanical_Logo.png';

import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'; // 2
class AppHeader extends Component { // 3
    state = { // 4
        isOpen: false
    };
    toggle = this.toggle.bind(this); // 5
    toggle() { // 6
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() { // 7
        return <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">
                <img src={logo} width="128" className="d-inline-block align-top" alt="" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>                
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                           Employees
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem href="/">New Employee</DropdownItem>
                            <DropdownItem>Find Employee</DropdownItem>
                            <DropdownItem>Display All Employee</DropdownItem>
                            <DropdownItem>Delete Employee</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Customers
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem href="/">New Customer</DropdownItem>
                            <DropdownItem>Find Customer</DropdownItem>
                            <DropdownItem>Display All Customers</DropdownItem>
                            <DropdownItem>Delete Customer</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Locations
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem href="/">New Location</DropdownItem>
                            <DropdownItem>Find Location</DropdownItem>
                            <DropdownItem>Display All Locations</DropdownItem>
                            <DropdownItem>Delete Location</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Equipment
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href="/">New Equipment</DropdownItem>
                            <DropdownItem>Find Equipment</DropdownItem>
                            <DropdownItem>Display All Equipment</DropdownItem>
                            <DropdownItem>Delete Equipment</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink href="/">Hello Dave</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>;
    }
}
export default AppHeader; // 8