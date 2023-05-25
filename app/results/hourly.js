//fonts
import { Raleway, Playfair_Display } from "next/font/google"
const raleway = Raleway({weight: "100", subsets:["latin"]})
const playFairDisplay = Playfair_Display({weight: "400", subsets:["latin"]})

//styles
import styles from "app/styles/min/Result.module.css"

const Hourly = ({myData}) => {
    
    // console.log(myData.hourly.weathercode.slice(-2))
    // console.log(myData.hourly)
    
    const timeHourly = myData.hourly.time.slice(102).map((item, index) => {
        // console.log(item)
        return(
            <div key={index} className={styles.timeHourly}>
               <div className={styles.test}><span className={raleway.className}>{item.slice(-5)}</span></div>
            </div>
        )
    })
    
    const codeHourly = myData.hourly.weathercode.slice(-10).map((item, index) => {
        // console.log(item)
        return(
            <div key={index} className={styles.timeHourly}>
               <div className={styles.test}>{item}</div>
            </div>
        )
    })
    
    const tempHourly = myData.hourly.temperature_2m.slice(-10).map((item, index) => {
        // console.log(item)
        return(
            <div key={index} className={styles.timeHourly}>
               <div className={styles.test}><span className={playFairDisplay.className}>{`${item}°C`}</span></div>
            </div>
        )
    })





    return (
        <>
            <div className={styles.hourly}>
                {timeHourly}
            </div>
            <div className={styles.hourly}>
                {codeHourly}
            </div>
            <div className={styles.hourly}>
                {tempHourly}
            </div>
        </>
    )
}

export default Hourly