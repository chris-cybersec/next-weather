//styles
import styles from "app/styles/min/Home.module.css"


const Input = ({ register }) => {
    return (
        <input className={styles.InputItem} 
        placeholder="insert City ..." type="text" name="cityName" autoComplete="off" 
        { ...register("cityName") }
        />
           
    )
}

export default Input