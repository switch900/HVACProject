import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import './App.css';
import Phone from './images/phone.png';


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

            <div className="footerContainer">
                <footer className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center fixed-bottom">
                    <div className="footerStyle">


                        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li>
                                    <Link className="nav-link" to="/about">About This Project</Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/about">Other Cool Things</Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/contact">Contact Me</Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/contact">Contact Me</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footDivide" style={{ textalign: "center" }} >__________________________________________________________________</div>
                        {/* <h3>Andrew Hewitson 2021</h3> */}
                        <div class="grid-container">
                            <div class="grid-item"><SocialIcon url="mailto:webmaster@example.com" style={{ height: 25, width: 25 }} /> </div>
                            <div class="grid-item"> <SocialIcon url="https://github.com/switch900" style={{ height: 25, width: 25 }} /></div>
                            <div class="grid-item"> <SocialIcon url="https://www.linkedin.com/in/andrew-hewitson/" style={{ height: 25, width: 25 }} /></div>
                            <div class="grid-item"> <a href="tel:778-228-2070"><img src={Phone} alt="Phone" style={{ height: 25, width: 25 }} /></a></div>
                        </div>
                    </div>
                </footer>
            </div >
        );
    }
}
export default Footer;