//styles
import styles from "app/styles/min/Result.module.css"

const Daily = ({myData}) => {
    console.log(myData.daily)

    const dailyTime = myData.daily.time.map((item, index) => {
        return(
            <div className={styles.timeDaily} key={index}>
                <div className={styles.item}>{item}</div>
            </div>
        )
    })
    return (
        <>
            <div className={styles.daily}>
                {dailyTime}
            </div>
        </>
    )
}

export default Daily