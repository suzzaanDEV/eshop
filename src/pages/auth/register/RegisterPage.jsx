// RegisterPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from './register.module.css'; // Import CSS module for register page

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Replace with actual registration logic
    };

    return (
        <div className={styles['register-container']}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" {...register("name", { required: true })} />
                    {errors.name && <span className="text-danger">Name is required</span>}
                </div>
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
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <div className="text-center mt-3">
                Already have an account? <Link to="/login" className="text-decoration-none">Login here</Link>
            </div>
        </div>
    );
};

export default RegisterPage;
