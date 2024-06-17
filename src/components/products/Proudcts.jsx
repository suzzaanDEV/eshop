import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Category from '../category/Category';

const Proudcts = () => {


    let [api_data, setApi_Data] = useState([]);
    const { category } = useParams();
    // const regex = new RegExp(searchstr, "ig");





    useEffect(() => {
        let url = category === undefined ? `https://fakestoreapi.com/products` : `https://fakestoreapi.com/products/category/${category}`;
        console.log(url);

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setApi_Data(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [category]);
    // if (searchstr !== '') {
    //     const searchedData = api_data.filter((item) => item.title.match(regex))

    //     setApi_Data(searchedData);
    //     setSearchstr('');

    //     console.log(searchstr);
    // }
    return (
        <div className='content d-flex flex-wrap gap-3 justify-content-center'>
            {api_data.map((item) =>
                <div className="card " style={{ width: '18rem' }} key={item.id}>
                    <Link to={`/products/${item.category}/${item.id}`}><img className="card-img-top" src={item.image} alt="Card image cap" /></Link>

                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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