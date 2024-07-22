import React, { useState, useEffect } from 'react'
import styles from './Category.module.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFilterCategory } from '../../../feature/products/productSlice.jsx';

const Category = () => {
    let [category, setCategory] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((res) => res.json())
            .then((data) => {
                setCategory(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [])

    const handleCategoryClick = (category) => {
        dispatch(setFilterCategory(category));
    };


    return (
        <div className={styles.category}>
            <p className={styles.categoryTitle} >CATEGORY</p>
            <ul className={styles.listGroupItem}>
                <Link to={'/products/all'} onClick={() => handleCategoryClick('all')} className="nav-link"><li className={styles.listItem} >all</li></Link>
                {category.map((item, index) =>
                    <Link to={`/products/${item}`} onClick={() => handleCategoryClick(item)} className="nav-link" key={index}><li className={styles.listItem} >{item}</li></Link>
                )}
            </ul>
        </div >
    )
}

export default Category