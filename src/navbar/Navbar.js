import React from 'react';
import CoolButton from '../coolbutton/CoolButton.js';

function Navbar() {
    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a href=" " className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="bulma logo"/>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a href=" " className="navbar-item">
                        Home
                    </a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <CoolButton >Login</CoolButton>                                
                            <CoolButton different>Signup</CoolButton>
                        </div>
                    </div>
                </div>
            </div>
            </nav>
        </div>
    );
}

export default Navbar;