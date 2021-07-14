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

export class Footer extends Component {
    constructor(props) {
        super(props);

    }

    // componentDidMount() {
    //     this.setState = {
    //         userName: ''
    //     };
    // }

    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <span className="text-muted">Place sticky footer content here.</span>
                </div>
            </footer>
        );
    }
}
export default Footer;