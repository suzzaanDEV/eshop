import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Admin Dashboard</Link>
                <button className={`navbar-toggler ${styles.navbarToggler}`} type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${styles.navbarCollapse}`} id="navbarNav">
                    <ul className={`navbar-nav ms-auto ${styles.nav}`}>
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/users" className="nav-link">Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/settings" className="nav-link">Settings</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
