import React, { Component } from 'react'; // 1
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

import logo from '../images/logo.png';

class AppHeader extends Component { 
    state = { 
        isOpen: false
    };
    toggle = this.toggle.bind(this); 
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
                            <DropdownItem href="/employee-add-new">Add New Employee</DropdownItem>
                            <DropdownItem href="/employee-search">Find Employee</DropdownItem>
                            <DropdownItem href="/employee-display-all">Display All Employee</DropdownItem>
                            <DropdownItem href="/employee-delete">Delete Employee</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Customers
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem href="/customer-add-new">Add New Customer</DropdownItem>
                            <DropdownItem href="/customer-search">Find Customer</DropdownItem>
                            <DropdownItem href="/customer-display-all">Display All Customers</DropdownItem>
                            <DropdownItem href="/customer-delete">Delete Customer</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Locations
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem href="/location-add-new">Add New Location</DropdownItem>
                            <DropdownItem href="/location-search">Find Location</DropdownItem>
                            <DropdownItem href="/location-display-all">Display All Locations</DropdownItem>
                            <DropdownItem href="/location-delete">Delete Location</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Equipment
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href="/equipment-add-new">Add New Equipment</DropdownItem>
                            <DropdownItem href="/equipment-search">Find Equipment</DropdownItem>
                            <DropdownItem href="/equipment-display-all">Display All Equipment</DropdownItem>
                            <DropdownItem href="/equipment-delete">Delete Equipment</DropdownItem>
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
export default AppHeader; 