import React from 'react'
import { Link } from 'react-router-dom'

import Authentication from '../../helpers/Authentication';

const authentication = new Authentication();
const isAuthenticated = authentication.isAuthenticated();

const Header = () => (
    <header>
        <div className="header-nav-logo">
            <Link to='/'>React RH Todo App</Link>
        </div>

        <div className="header-nav">
            <Link className={ isAuthenticated ? '' : 'hide-nav-item-auth' } to='/logout'>Logout</Link>

            <Link className={ isAuthenticated ? 'hide-nav-item-auth' : '' } to='/login'>Login</Link>
            <Link className={ isAuthenticated ? 'hide-nav-item-auth' : '' } to='/register'>Register</Link>
        </div>
    </header>
);

export default Header
