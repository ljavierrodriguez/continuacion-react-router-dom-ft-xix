import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Menu = () => {
    const location = useLocation();

    console.log(location);

    return (
        <ul className="nav nav-pills justify-content-center my-3">
            <li className="nav-item">
                <Link className={"nav-link " + (location.pathname === '/' ? "active": "")} to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className={"nav-link " + (location.pathname === '/about' ? "active": "")} to="/about">About</Link>
            </li>
            <li className="nav-item">
                <Link className={"nav-link " + (location.pathname === '/contact' ? "active": "")} to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
                <Link className={"nav-link " + (location.pathname.includes('service') ? "active": "")} to="/services">Services</Link>
            </li>
        </ul>
    )
}

export default Menu