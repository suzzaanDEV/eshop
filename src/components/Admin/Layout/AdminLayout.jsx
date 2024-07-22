// AdminLayout.jsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../Components/SideBar/Sidebar.jsx';
import Navbar from '../Components/NavBar/NavBar.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import Dashboard from '../Pages/Dashboard/Dashboard.jsx';
import Users from '../Pages/Users/Users.jsx';
import Products from '../Pages/Products/Products.jsx';
import Settings from '../Pages/Settings/Settings.jsx';
import styles from './Layout.module.css';
import MainContent from "../Pages/MainContent/MainContent.jsx"; // Import custom CSS for layout styling

const AdminLayout = () => {
    return (
        <div className={styles.layout}>
            <Sidebar />
            <div >
                <Navbar />

                <MainContent>
                    <Routes>
                        <Route exact path="/" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </MainContent>
                <Footer />
            </div>
        </div>
    );
};

export default AdminLayout;
