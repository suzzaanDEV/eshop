// Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social icons
import styles from './footer.module.css'; // Import your module CSS for the footer

const Footer = () => {
    return (
        <footer className={`footer py-5 ${styles.footer}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <h5 className="mb-4">Quick Links</h5>
                        <ul className={`list-unstyled ${styles.footerList}`}>
                            <li><Link to="/" className={`text-decoration-none ${styles.footerLink}`}>Home</Link></li>
                            <li><Link to="/products" className={`text-decoration-none ${styles.footerLink}`}>Products</Link></li>
                            <li><Link to="/about" className={`text-decoration-none ${styles.footerLink}`}>About</Link></li>
                            <li><Link to="/contact" className={`text-decoration-none ${styles.footerLink}`}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <h5 className="mb-4">Social Media</h5>
                        <ul className={`list-unstyled ${styles.footerList}`}>
                            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={`text-decoration-none ${styles.footerLink}`}><FaFacebook className={`me-2 ${styles.socialIcon}`} /> Facebook</a></li>
                            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className={`text-decoration-none ${styles.footerLink}`}><FaTwitter className={`me-2 ${styles.socialIcon}`} /> Twitter</a></li>
                            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={`text-decoration-none ${styles.footerLink}`}><FaInstagram className={`me-2 ${styles.socialIcon}`} /> Instagram</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <h5 className="mb-4">Contact Us</h5>
                        <ul className={`list-unstyled ${styles.footerList}`}>
                            <li><span className={styles.contactInfo}>Address:</span> Chapppagaun, Lalitpur, Nepal</li>
                            <li><span className={styles.contactInfo}>Phone:</span> +977 9800000000</li>
                            <li><span className={styles.contactInfo}>Email:</span> info@eshope.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`text-center p-3 ${styles.footerBottom}`}>
                &copy; {new Date().getFullYear()} MyShop. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
