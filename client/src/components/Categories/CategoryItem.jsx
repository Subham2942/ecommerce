import styles from "./Category.module.css"

const CategoryItem = ({item}) => {
  return (
    <div className={styles.category__container} >
        <img src={item.img} alt="categories" className={styles.image}/>
        <div className={styles.info} >
            <h1 className={styles.title} >{item.title}</h1>
            <button className={styles.button}> SHOP NOW </button>
        </div>
    </div>
  )
}

export default CategoryItem