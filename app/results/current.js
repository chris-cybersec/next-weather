import Image from "next/image"

//styles
import styles from "app/styles/min/Result.module.css"

//fonts
import { Playfair_Display, Raleway } from "next/font/google"
const playFairDisplay = Playfair_Display({weight: "400", subsets: ["latin"]})
const raleway = Raleway({weight:"400", subsets: ["latin"]})


const Current = ({ currentData }) => {
    // const data = currentData.weathercode.map(item => {
    //     console.log(item)
    // })
    const [time, code, isDay] = [currentData.time, currentData.weathercode, currentData.is_day]
    // console.log(currentData)
    return (
        <div className={styles.current}>
            <div className={styles.time}><span className={raleway.className}>{time.slice(0, -6)}</span></div>
            <div className={styles.content}>
            <div className={styles.icon}>
                <Image src={`http://localhost:1122/icons/${code}_isday_${isDay}.svg`} width={50} height={50} alt="icon"/>
            </div>{/*  //todo */}
                <div className={styles.temp}>
                    <div className={playFairDisplay.className}>{`${currentData.temperature}°C`}</div>
                </div>
            </div>
        </div>
    )
}

export default Current