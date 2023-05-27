import Link from "next/link"


//fonts
import { Zen_Dots, Playfair_Display } from "next/font/google"
const zenDots = Zen_Dots({weight:"400", subsets:["latin"]})
const playFairDisplay = Playfair_Display({weight:"400", subsets:["latin"]})

//styles
import styles from "app/styles/min/Header.module.css"

const HeaderTop = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link href={"https://chris-cybersec.dev"} className={styles.logo}><div className={zenDots.className}>chris-cybersec.dev</div></Link>
                <div className={styles.title}>next-weather</div>
            </div>
            <div className={styles.description}>
              <div className={playFairDisplay.className}>This is my Weather App using</div>
              <Link href={"https://nextjs.org/"}>Next JS 13.4</Link>&nbsp;-&nbsp;
              <Link href={"https://open-meteo.com/"}>open-meteo API</Link>
            </div>
        </div>
    )
}

export default HeaderTop