// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLayout from './components/User/Layout/UserLayout.jsx';
import AdminLayout from './components/Admin/Layout/AdminLayout.jsx';
import Footer from './components/User/footer/Footer';

const App = () => {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path={"/*"} element={<UserLayout />} />
            <Route path="/admin/*" element={<AdminLayout />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
};

export default App;
