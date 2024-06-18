import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../feature/products/productSlice';

const Nav = () => {

    const dispatch = useDispatch();
    const { searchTerm } = useSelector((state) => state.products);



    const searchHandler = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(e.target.value))
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">MyShop</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="d-flex" >
                        <input className="form-control me-2" onChange={searchHandler} name='searchString' type="search" placeholder="Search" aria-label="Search" />
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default Nav;
