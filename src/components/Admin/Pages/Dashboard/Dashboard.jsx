import React from 'react';
import MainContent from '../../Pages/MainContent/MainContent.jsx';

const Dashboard = () => {
    return (
        <MainContent>
            <div className="dashboard">
                <h2>Dashboard</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Total Orders</h5>
                                <p className="card-text">Today: 20</p>
                                <p className="card-text">This Week: 150</p>
                                <p className="card-text">This Month: 620</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Revenue</h5>
                                <p className="card-text">Today: $2000</p>
                                <p className="card-text">This Week: $15000</p>
                                <p className="card-text">This Month: $62000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Top Selling Products</h5>
                                <ul className="list-group">
                                    <li className="list-group-item">Product A - 150 units</li>
                                    <li className="list-group-item">Product B - 120 units</li>
                                    <li className="list-group-item">Product C - 100 units</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Recent Orders</h5>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <strong>Order #1234</strong> - Product A, Product B
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Order #1233</strong> - Product C
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Order #1232</strong> - Product A, Product C
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainContent>
    );
};

export default Dashboard;
