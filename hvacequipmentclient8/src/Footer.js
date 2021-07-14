import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

// import {
//     NavItem,
//     // NavLink,
//     // UncontrolledDropdown,
//     // DropdownToggle,
//     // DropdownMenu,
//     // DropdownItem
// } from 'reactstrap';

export class Footer extends Component {
    // constructor(props) {
    //     super(props);

    // }

    // componentDidMount() {
    //     this.setState = {
    //         userName: ''
    //     };
    // }

    render() {
        return (


            <footer className="navbar fixed-bottom navbar-expand-sm bg-dark navbar-dark justify-content-center">
                <div className="footerStyle">
                    <h3>Andrew Hewitson 2021</h3>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li>
                                <Link className="nav-link" to="/about">About This Project</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/about">Other Cool Things</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/about">Contact Me</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

        );
    }
}
export default Footer;