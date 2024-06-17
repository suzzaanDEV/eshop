import React, { useState } from 'react'
import Nav from '../components/nav/Nav'
import Content from '../components/content/Content'
import Category from '../components/category/Category'
import styles from './Layout.module.css'

import Proudcts from '../components/products/Proudcts'

const Layout = () => {

    return (
        <div>
            <div className={styles.contentSection}>
                <div className="row">

                    <div className="col-md-3"><Category /></div>
                    <div className="col-md-9"><Proudcts /></div>
                </div>


                {/* <Form /> */}
            </div>

        </div>
    )
}

export default Layout