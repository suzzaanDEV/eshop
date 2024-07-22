import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Category from '../category/Category.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../../../feature/products/productSlice.jsx';
import {addToCart} from "../../../feature/products/cartSlice.jsx";


const Proudcts = () => {

    const { products, searchTerm, filteredCategory } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    // const { category } = useParams();



    useEffect(() => {
        let url = `https://fakestoreapi.com/products`;
        console.log(url);

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                dispatch(setProduct(data));
            })
            .catch((error) => console.error('Error fetching data:', error));



    }, [dispatch]);

    const filteredProducts = products
        .filter((product) => {
            const titleMatch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) || product.category.toLowerCase().includes(searchTerm.toLowerCase());

            const categoryMatch = filteredCategory === 'all' || product.category === filteredCategory;
            return titleMatch && categoryMatch;
        }
        );




    return (
        <div className='content d-flex flex-wrap gap-3 '>
            {filteredProducts && filteredProducts.map((item) =>
                <div key={item.id} className="card mb-3 shadow-sm" style={{ maxWidth: '18rem' }}>
                    <Link to={`/products/${item.category}/${item.id}`}>
                        <img className="card-img-top" src={item.image} alt={item.title} />
                    </Link>
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text h6 fw-light">{item.description.length > 50 ? `${item.description.substring(0, 50)}...` : item.description}</p>
                        <div className="mt-auto">
                            <div className="d-flex justify-content-between align-items-center">
                                <small className="text-muted">${item.price}</small>
                                <div className="btn-group">
                                    <Link to={`/products/${item.category}/${item.id}`} className="btn btn-sm btn-outline-primary">View Details</Link>
                                    <button type="button" className="btn btn-sm btn-outline-primary" onClick={()=>dispatch(addToCart(item))}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Proudcts;