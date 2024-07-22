// src/layouts/UserLayout.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from '../nav/Nav.jsx';
import Footer from '../footer/Footer.jsx';
import Home from '../../../pages/home/Home.jsx';
import About from '../../../pages/about/About.jsx';
import Contact from '../../../pages/contact/Contact.jsx';
import CartPage from "../../../pages/Cart/CartPage.jsx";
import Details from "../details/Details.jsx";
import Layout from "../../../layout/Layout.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LoginPage from "../../../pages/auth/login/LoginPage.jsx";
import RegisterPage from "../../../pages/auth/register/RegisterPage.jsx";

const UserLayout = () => {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Layout />} />
                <Route path="/products/:category" element={<Layout />} />
                <Route path="/products/:category/:item" element={<Details />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default UserLayout;
