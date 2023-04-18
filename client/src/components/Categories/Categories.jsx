import { categories } from "../../assets/data"
import CategoryItem from './CategoryItem'
import styles from "./Category.module.css"

const Categories = () => {
  return (
    <div className={styles.container}>
        {categories.map(item=>(
            <CategoryItem  item={item}/>
        ))}
    </div>
  )
}

export default Categories