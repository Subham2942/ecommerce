import { MdSend } from "react-icons/md"

import styles from './Newsletter.module.css'

const formSubmitHandler = (e)=>{
  e.preventDefault();
}

const Newsletter = () => {
  return (
    <div className={styles.container} >
      <h1 className={styles.title} >Newsletter</h1>

      <div className={styles.desc} > Get updates for your favorite products and upcoming sales... </div>

      <form className={styles.inputContainer} onSubmit={formSubmitHandler}>
        <input className={styles.input} type="text" placeholder="Enter Your Email"/>
        <button className={styles.btn}  type='submit' >
          <MdSend/>
        </button>
      </form>

    </div>
  )
}

export default Newsletter