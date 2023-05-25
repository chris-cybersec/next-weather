

//styles
import styles from "app/styles/min/Result.module.css"

//fonts
import { Playfair_Display, Raleway } from "next/font/google"
const playFairDisplay = Playfair_Display({weight: "400", subsets: ["latin"]})
const raleway = Raleway({weight:"400", subsets: ["latin"]})


const Current = ({ currentData }) => {
    // const data = currentData.map(item => {
    //     console.log(item)
    // })
    const time = currentData.time
    // console.log(currentData)
    return (
        <div className={styles.current}>
            <div className={styles.time}><span className={raleway.className}>{time.slice(0, -6)}</span></div>
            <div className={styles.content}>
            <div className={styles.icon}>icon</div>{/*  //todo */}
                <div className={styles.temp}>
                    <div className={playFairDisplay.className}>10.3°C</div>{/* {currentData.temperature}°C */} 
                </div>
            </div>
        </div>
    )
}

export default Current