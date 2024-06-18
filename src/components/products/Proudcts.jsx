import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Category from '../category/Category';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../../feature/products/productSlice';


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
                <div className="card " style={{ width: '18rem' }} key={item.id}>
                    <Link to={`/products/${item.category}/${item.id}`}><img className="card-img-top" src={item.image} alt="Card image cap" /></Link>

                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <div className="d-flex justify-content-between">
                            <Link to={`/products/${item.category}/${item.id}`} className="btn btn-primary">Details</Link>
                            <a href="#" className="btn btn-outline-primary">Add to cart</a>
                        </div>

                    </div>
                </div>
            )}

        </div>
    )
}

export default Proudcts;