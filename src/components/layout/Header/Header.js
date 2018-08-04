import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/images/logo.png';

export class Header extends PureComponent {
    render() {
        return (
            <header className="header">
                <nav className="navbar navbar-default">
                    <div className="container">
                        <Link activeClassName="active" onlyActiveOnIndex={true} className="nav-link logo" to="/">
                            <img alt="" src={logo} />
                        </Link>
                        <Link className="nav-link" to="/test">
                            test
                        </Link>
                    </div>
                </nav>
            </header>
        );
    }
}