import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

import {
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'Andrew'
        };
    }

    // componentDidMount() {
    //     this.setState = {
    //         userName: ''
    //     };
    // }

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand" href="/"><img src={logo} width="128" className="d-inline-block align-top" alt="" /></a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Employees
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="/addEmployee">Add New Employee</DropdownItem>
                                {/* <DropdownItem href="/employee-search">Find Employee</DropdownItem> */}
                                <DropdownItem href="/displayAllEmployees">Display All Employee</DropdownItem>
                                {/* <DropdownItem href="/employee-delete">Delete Employee</DropdownItem> */}
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Customers
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="/addCustomer">Add New Customer</DropdownItem>
                                {/* <DropdownItem href="/customer-search">Find Customer</DropdownItem> */}
                                <DropdownItem href="/displayAllCustomers">Display All Customers</DropdownItem>
                                {/* <DropdownItem href="/customer-delete">Delete Customer</DropdownItem> */}
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Locations
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="/addLocation">Add New Location</DropdownItem>
                                {/* <DropdownItem href="/location-search">Find Location</DropdownItem> */}
                                <DropdownItem href="/displayAllLocations">Display All Locations</DropdownItem>
                                {/* <DropdownItem href="/location-delete">Delete Location</DropdownItem> */}
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Equipment
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href="/addEquipment">Add New Equipment</DropdownItem>
                                {/* <DropdownItem href="/equipment-search">Find Equipment</DropdownItem> */}
                                <DropdownItem href="/displayAllEquipment">Display All Equipment</DropdownItem>
                                {/* <DropdownItem href="/equipment-delete">Delete Equipment</DropdownItem> */}
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <NavItem>
                            <Link className="nav-link" to="/about">About</Link>
                        </NavItem>

                        <NavItem>
                            {this.state.userName === '' ? (
                                <NavLink href="/login"><div onClick={() => this.setState({ userName: 'Andrew' })}>Log In</div></NavLink>
                            ) : (
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Hello {this.state.userName}!
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem onClick={() => this.setState({ userName: '' })}>Log Out</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>

                                // <NavLink><div onClick={() => this.setState({ userName: '' })}>Hello {this.state.userName}!</div></NavLink>
                            )}
                        </NavItem>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default NavBar;