import React, { useState, useEffect } from 'react'
import styles from './Content.module.css'

const Content = ({ selectedCategory }) => {
    let [api_data, setApi_Data] = useState([]);



    useEffect(() => {
        let url = selectedCategory == 'all' ? `https://fakestoreapi.com/products` : `https://fakestoreapi.com/products/category/${selectedCategory}`;
        console.log(url);

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setApi_Data(data);


            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [selectedCategory]);
    return (
        <div className='content d-flex flex-wrap gap-3 justify-content-start'>
            {api_data.map((item) =>
                <div className="card " style={{ width: '18rem' }} key={item.id}>
                    <img className="card-img-top" src={item.image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Content;