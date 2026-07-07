/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../components/bimg.png';

function Header() {
    return (
        <div className='Header' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', background: 'white', width: 'auto' }}>
            <img src={logo} alt='Logo' className='logo' style={{ width: "100px", height: 'auto', background: 'red' }} />
            <nav className="navb navbar-expand-lg" style={{ display: 'flex', justifyContent: 'flex-start', flexGrow: 1, width: 'auto' }}>
                <Link to="/" style={{ fontSize: '18px', color: 'black', fontWeight: 600, margin: '0 10px', textDecoration: 'none' }}>Home</Link>
                <Link to="/help" style={{ fontSize: '18px', color: 'black', fontWeight: 600, margin: '0 10px', textDecoration: 'none' }}>Help</Link>
                <Link to="/about" style={{ fontSize: '18px', color: 'black', fontWeight: 600, margin: '0 10px', textDecoration: 'none' }}>About</Link>
            </nav>

            <div className="navb" style={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/login" style={{ fontSize: '18px', color: 'black', fontWeight: 600, margin: '0 10px', textDecoration: 'none' }}>Log In</Link>
                <Link to="/SignUp" style={{ fontSize: '18px', color: 'black', fontWeight: 600, margin: '0 10px', textDecoration: 'none' }}>Sign Up</Link>
            </div>
        </div>
    );
}

export default Header;
