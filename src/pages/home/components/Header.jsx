// Header.js

import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {setSearchTerm} from "../../../feature/products/productSlice.jsx";
import {set} from "react-hook-form"; // Import if you need to access Redux state

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const [searchStr, setSearchStr] = useState("");
    const searchHandler = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchStr));
    navigate("/products")
    };
    return (
        <header className="py-4" style={{ backgroundColor: '#6C5CE7' }}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center gap-5">

                    <div className="flex-grow-1 text-center">
                        <form className="form-inline my-2 my-lg-0 d-flex justify-content-center gap-2" onSubmit={searchHandler}>
                            <input className="form-control form-control-lg mr-sm-2" onChange={(e)=>setSearchStr(e.target.value)}  type="search" placeholder="Search" id={"searchStr"} aria-label="Search" style={{ minWidth: '300px' }} />
                            <button className="btn btn-light btn-lg my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="d-flex">
                        <Link to="/cart" className="text-white">
                            <i className="fas fa-shopping-cart mr-2"></i> Cart ({cartItems.length})
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
