import React from 'react'
import Layout from '../../layout/Layout'
import Header from "./components/Header.jsx";
import Promotions from "./components/Promotions.jsx";
import Products from "../../components/User/products/Proudcts.jsx"
import Category from "../../components/User/category/Category.jsx";
const Home = () => {
    return (

        <>
            <Header/>
            <Promotions/>
            <div>
                <h1 className="text-center">Products</h1>
                <div className="col-12">
                    <Category/>
                </div>
                <div className="col-12">
                    <Products/>
                </div>

            </div>


        </>



    )
}

export default Home