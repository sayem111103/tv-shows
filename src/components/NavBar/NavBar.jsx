import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand fw-bold">TvShows</Link>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/bookings'  className="nav-link" >Bookings</Link>
                            </li>
                        </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;