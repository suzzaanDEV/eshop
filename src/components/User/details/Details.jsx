import React, { useEffect, useState } from 'react'
import { useOutlet, useParams } from 'react-router-dom'
import styles from "./Details.module.css"
import {useDispatch} from "react-redux";
import {addToCart} from "../../../feature/products/cartSlice.jsx";


const Details = () => {
    let { item } = useParams();
    const dispatch = useDispatch();

    let [details, setDetails] = useState({});


    useEffect(() => {
        let url = `https://fakestoreapi.com/products/${item}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setDetails(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [item])


    console.log(details);
    return (
        <>
            <div className="d-flex justify-content-center container mt-5 w-100">
                <div className="card p-3 bg-white mb-5 w-75 ">
                    <i className="fa fa-apple" />
                    <div className="about-product text-center mt-2">
                        <img src={details.image} width={300} />
                        <div>
                            <h4>{details.title}</h4>
                            <h6 className="mt-0 text-black-50">{details.category}</h6>
                        </div>
                    </div>
                    <div className="stats mt-2">
                        <div className="d-flex justify-content-center ">
                            <p>{details.description}</p>
                        </div>
                    </div>
                    <div className=" mt-2">
                        <div className="d-flex justify-content-between p-price">
                            <span>Price</span>
                            <strong >${details.price}</strong>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-2 ">
                        <button onClick={() => history.back()} type="button" className="btn btn-secondary">Back</button>
                        <div className='d-flex gap-4'>
                            <button type="button" className="btn btn-primary">Buy Now</button>
                            <button type="button" className="btn btn-outline-primary" onClick={()=> dispatch(addToCart(details))}>Add to cart</button>
                        </div>


                    </div>

                </div>

            </div>



        </>
    )
}

export default Details