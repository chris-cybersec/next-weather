//fonts
import { Raleway, Playfair_Display } from "next/font/google"
const raleway = Raleway({weight:"100", subsets:["latin"]})
const playFairDisplay = Playfair_Display({weight:"400", subsets:["latin"], style:"normal"})

//styles
import styles from "app/styles/min/Result.module.css"

const Daily = ({myData}) => {
    // console.log(myData.daily)

    const dailyTime = myData.daily.time.map((item, index) => {
        return(
            <div className={styles.timeDaily} key={index}>
                <div className={styles.test}><span className={raleway.className}>{item.slice(-5)}</span></div>
            </div>
        )
    })

    const dailyCode = myData.daily.weathercode.map((item, index) => {
        return(
            <div className={styles.timeDaily} key={index}>
                <div className={styles.test}>{item}</div>
            </div>
        )
    })

    const maxTemp = myData.daily.temperature_2m_max.map((item, index) => {
        return(
            <div className={styles.timeDaily} key={index}>
                <div className={styles.temp}><p className={playFairDisplay.className}>{`${item}°C`}</p></div>
            </div>
        )
    })

    const minTemp = myData.daily.temperature_2m_min.map((item, index) => {
        return(
            <div className={styles.timeDaily} key={index}>
                <div className={styles.temp}><p className={playFairDisplay.className}>{`${item}°C`}</p></div>
            </div>
        )
    })

    const sunriseData = myData.daily.sunrise.map((item, index) => {
        return(
            <div className={styles.sunrise} key={index}>
                <div className={styles.test}><p className={raleway.className}>sunrise&nbsp;{item.slice(-5)}</p></div>
            </div>
        )
    })

    const sunsetData = myData.daily.sunset.map((item, index) => {
        return(
            <div className={styles.sunrise} key={index}>
                <div className={styles.test}><p className={raleway.className}>sunset&ensp;{item.slice(-5)}</p></div>
            </div>
        )
    })

    return (
        <>
            <div className={styles.daily}>
                {dailyTime}
            </div>
            <div className={styles.daily}>
                {dailyCode}
            </div>
            <div className={styles.minTemp}>
                <span>{minTemp}</span> 
            </div>
            <div className={styles.maxTemp}>
                <span>{maxTemp}</span> 
            </div>
            <div className={styles.daily}>
                {sunriseData}
            </div>
            <div className={styles.daily}>
                {sunsetData}
            </div>
        </>
    )
}

export default Daily