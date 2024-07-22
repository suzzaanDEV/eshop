// LoginPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from './login.module.css'; // Import CSS module for login page

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Replace with actual login logic
    };

    return (
        <div className={styles['login-container']}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" {...register("email", { required: true })} />
                    {errors.email && <span className="text-danger">Email is required</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" {...register("password", { required: true })} />
                    {errors.password && <span className="text-danger">Password is required</span>}
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <div className="text-center mt-3">
                Don't have an account? <Link to="/register" className="text-decoration-none">Register here</Link>
            </div>
        </div>
    );
};

export default LoginPage;
