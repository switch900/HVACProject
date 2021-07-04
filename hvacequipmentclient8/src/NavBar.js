import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png'

const NavBar = () => (
    <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="/"><img src={logo} width="128" className="d-inline-block align-top" alt="" /></a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/list">Equipment List</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
);
export default NavBar;
