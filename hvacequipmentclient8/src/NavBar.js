import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import { authenticationService } from './_services/authentication.service';
import { history } from './_helpers/history';

import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.setState
            ({
                currentUser: localStorage.getItem('currentUser')
            });
    }
    // login() {
    //     const id = localStorage.getItem('id')
    //     const fetchData = async () => {
    //         const result = await fetch(`https://localhost:44349/api/employees/${id}`);
    //         const body = await result.json();
    //         this.state.userName = body.username;
    //     };
    //     fetchData();
    //     // }, [id]);
    // }

    logout() {
        authenticationService.logout();
        history.push('/login');
    }

    render() {
        return (


            <nav className="navbar fixed-top navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand" href="/"><img src={logo} width="128" className="d-inline-block align-top" alt="" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        {localStorage.getItem('currentUser') ? (
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
                            </UncontrolledDropdown>) : (<div></div>)}
                        {localStorage.getItem('currentUser') ? (
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
                        ) : (<div></div>)}
                        {localStorage.getItem('currentUser') ? (
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
                        ) : (<div></div>)}
                        {localStorage.getItem('currentUser') ? (
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
                        ) : (<div></div>)}
                        {localStorage.getItem('currentUser') ? (
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle onClick={this.logout} nav>
                                    Log Out
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={this.logout}>Log Out</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        ) : (<div></div>)}
                    </ul>
                </div>
            </nav>
        );
    }
}
export default NavBar;