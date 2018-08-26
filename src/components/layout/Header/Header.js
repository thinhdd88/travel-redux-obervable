import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/images/logo.png';

export function Header() {
    return (
        <header className="header">
            <nav className="navbar navbar-default">
                <div className="container">
                    <Link className="nav-link logo" to="/">
                        <img alt="" src={logo}/>
                    </Link>
                    <Link className="nav-link" to="/test"> test </Link>
                </div>
            </nav>
        </header>
    );
}