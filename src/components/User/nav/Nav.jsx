// Navbar.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../../feature/products/productSlice.jsx';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './Nav.module.css'; // Import CSS module

const Navbar = () => {
    const dispatch = useDispatch();
    const { searchTerm } = useSelector((state) => state.products);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const searchHandler = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(e.target.value));
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${isScrolled ? 'bg-light' : ''}`} style={{ borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
            <div className="container-fluid">
                <Link className={`navbar-brand ${styles['navbar-brand']}`} to="/">
                    MyShop
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${styles['nav-link']}`} to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${styles['nav-link']}`} to="/products">
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${styles['nav-link']}`} to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${styles['nav-link']}`} to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className={`d-flex align-items-center ${styles['navbar-right']}`}>
                        <input
                            className={`form-control ${styles['form-control']}`}
                            onChange={searchHandler}
                            name="searchString"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <Link to="/cart" className={`nav-link text-decoration-none mx-2 ${styles['nav-link']}`} style={{ color: '#FFF1DB' }}>
                            <FaShoppingCart className={`bi bi-cart-fill ${styles['bi-cart-fill']}`} />
                            <span className={`badge bg-light text-dark rounded-pill ${styles['badge']}`}>
                                {cartItems.length}
                            </span>
                        </Link>
                        {/* Login and Register Buttons */}
                        <div className="d-flex">
                            <Link to="/login" className={`btn btn-outline-primary me-2 ${styles['login-button']}`} style={{ borderColor: '#D4BDAC', color: '#D4BDAC' }}>
                                Login
                            </Link>
                            <Link to="/register" className={`btn btn-primary ${styles['register-button']}`} style={{ backgroundColor: '#536493' }}>
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom hover effect */}
            <div className={`bottom-hover ${styles['bottom-hover']}`} style={{ backgroundColor: '#EF5A6F', height: '5px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}></div>
        </nav>
    );
};

export default Navbar;
