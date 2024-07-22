import React, { useState } from 'react'
import Nav from '../components/User/nav/Nav'
import Content from '../components/User/content/Content'
import Category from '../components/User/category/Category'
import styles from './Layout.module.css'

import Proudcts from '../components/User/products/Proudcts'

const Layout = () => {

    return (
        <div>

            <div className={styles.contentSection}>
                <div className="row w-100">
                    <div className="col-md-3"><Category /></div>
                    <div className="col-md-9"><Proudcts /></div>

                </div>


                {/* <Form /> */}
            </div>

        </div>
    )
}

export default Layout