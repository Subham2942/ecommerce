import styles from './Slider.module.css';
import { useEffect, useState } from 'react';

import {MdOutlineArrowLeft, MdOutlineArrowRight} from 'react-icons/md';

import { sliderItems } from '../../assets/data';




const Slider = () => {


    const [slideIdx, setSlideIdx] = useState(0);
    console.log(slideIdx);
    useEffect(() =>{
        setInterval(()=>{
            setSlideIdx(slideIdx => slideIdx > 0 ? slideIdx - 1 : 2);
            
        }, 10000)
    }, [])

    const handleClick = (direction) =>{
        if(direction === "left")
        {
            setSlideIdx(slideIdx => slideIdx > 0 ? slideIdx - 1 : 2);
        }else{
            setSlideIdx(slideIdx => slideIdx < 2 ? slideIdx + 1 : 0);
        }

    }

  return (
    <div className={styles.container}>
        
        

        <div className={styles.wrapper} style={{transform: `translateX(${slideIdx*-100}vw)`, transition: 'all 1.5s ease'}}>

                {sliderItems.map(item =>(

                    
                <div key={item.id} className={styles.slide} style={{backgroundColor: `#${item.bg}`}} >

                    {/* IMAGE CONTAINER */}
                    <div className={styles.imgContainer} >
                        <img className={styles.image} src={item.img} alt="Slider"/>
                    </div>

                    {/* INFO CONTAINER */}
                    <div className={styles.infoContainer} >
                        <h1 className={styles.title} >
                            {item.title}
                        </h1>
                        <p className={styles.desc} >
                            {item.desc}
                        </p>
                        <button className={styles.button} >
                            SHOP NOW
                        </button>
                    </div>

                </div>
            ))}

          

        </div>

        <div className={`${styles.arrows} ${styles.left}`} onClick={()=> handleClick("left")}>
            <MdOutlineArrowLeft/>
        </div>

        <div className={`${styles.arrows} ${styles.right}`} onClick={()=> handleClick("right")}>
            <MdOutlineArrowRight/>
        </div>
    </div>
  )
}

export default Slider