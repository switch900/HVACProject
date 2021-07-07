import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png'

import {
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'

const NavBar = () => (
    <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="/"><img src={logo} width="128" className="d-inline-block align-top" alt="" /></a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li>
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
                    </li>
                    <li>
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
                    </li>
                    <li>
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
                    </li>
                    <li>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Equipment
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href="/equipment-add-new">Add New Equipment</DropdownItem>
                                <DropdownItem href="/equipment-search">Find Equipment</DropdownItem>
                                <DropdownItem href="/list">Display All Equipment</DropdownItem>
                                <DropdownItem href="/equipment-delete">Delete Equipment</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li>
                        <NavItem>
                            <NavLink href="/">Log In</NavLink>
                        </NavItem>
                    </li>
                    {/* <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li> */}

                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/list">Equipment List</Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    </>
);
export default NavBar;
