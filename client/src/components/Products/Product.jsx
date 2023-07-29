import React from 'react'
import styles from './Product.module.css'
import {AiOutlineSearch, AiOutlineShoppingCart, AiOutlineHeart} from 'react-icons/ai'

const Product = ({item}) => {
  return (
    <div className={styles.container} >
        <div className={styles.circle} />
        <img className={styles.image} src={item.img} alt="products"/>
        <div className={styles.info} >
            <div className={styles.icon}>
                <AiOutlineShoppingCart/>
            </div>
            <div className={styles.icon}>
                <AiOutlineSearch/>
            </div>
            <div className={styles.icon}>
                <AiOutlineHeart/>
            </div>
        </div>
    </div>
  )
}

export default Product