import Link from "next/link"

//styles
import styles from "app/styles/min/Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <Link href={"/"}>next-weather</Link>
          <p>&copy; <Link href={"https://chris-cybersec.dev"}>chris-cybersec.dev</Link>. All rights reserved.</p>
        </div>
    )
}

export default Footer