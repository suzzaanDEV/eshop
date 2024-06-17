import React, { useState, useEffect } from 'react'
import styles from './Category.module.css'
import { Link } from 'react-router-dom';

const Category = () => {
    let [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((res) => res.json())
            .then((data) => {
                setCategory(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [])



    return (
        <div className={styles.category}>
            <p className={styles.categoryTitle} >CATEGORY</p>
            <ul className={styles.listGroupItem}>
                {category.map((item, index) =>
                    <Link to={`/products/${item}`} className="nav-link" key={index}><li className={styles.listItem} >{item}</li></Link>
                )}
            </ul>
        </div >
    )
}

export default Category