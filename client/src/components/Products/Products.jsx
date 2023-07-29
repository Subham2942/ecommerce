import React from 'react'
import styles from './Products.module.css'
import {popularProducts} from '../../assets/data'
import Product from './Product'

const Products = () => {
  return (
    <div className={styles.container}>
        {popularProducts.map(product=>(
            <div className={styles.product} >
                <Product item={product} key={product.id} />
            </div>
        ))}
    </div>
  )
}

export default Products