import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen); 
    };

    return (
        <>
        <button className={styles.toggleBtn} onClick={toggleSidebar}>
            <span></span>
            <span></span>
            <span></span>
        </button>
        <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
            <div className={styles.logo}>
                <h2>Admin Panel</h2>
            </div>

            <ul className={styles.nav}>
                <li>
                    <Link to="/dashboard" className={styles.link}>Dashboard</Link>
                </li>
                <li>
                    <Link to="/users" className={styles.link}>Users</Link>
                </li>
                <li>
                    <Link to="/products" className={styles.link}>Products</Link>
                </li>
                <li>
                    <Link to="/settings" className={styles.link}>Settings</Link>
                </li>
            </ul>
        </div>
        </>
    );
};

export default Sidebar;
