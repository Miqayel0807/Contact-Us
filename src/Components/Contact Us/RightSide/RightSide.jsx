import styles from './rightside.module.css'
import facebook from './icons/facebook.svg'
import linkedin from './icons/linkedin.svg'
import twitter from './icons/twitter.svg'
import github from './icons/github.svg'
import instagram from './icons/instagram.svg'
import letter from './Images/contacts.png'



const RightSide = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.prefer}>
                    <p className={styles.prefer}>Prefer to email or phone</p>


                </div>
                <div className={styles.topTexts}>
                    <p className={styles.arnology}>info@arnology.am</p>

                </div>


                <div className={styles.numbers}>
                    <p className={styles.number1}>+374 77 06 53 03</p>
                    <p className={styles.number2}>+374 41 96 06 26</p>

                </div>


                <p className={styles.find}>Find Us</p>

                <div className={styles.icons}>

                    <img src={facebook} alt="facebook" />
                    <img src={linkedin} alt="linkedin" />
                    <img src={twitter} alt="twitter" />
                    <img src={github} alt="github" />
                    <img src={instagram} alt="instagram" />
                </div>

                <div className={styles.title}>
                    <p className={styles.yerevan}>Yerevan</p>
                    <p className={styles.adress}>49 Tigran Mets Avenue, 5th floor Armenia, Yerevan</p>
                </div>

                <div className={styles.textBlock} >
                    <div className={styles.texts}>
                        <div>
                            <p className={styles.leon}>LEON</p>
                            <p className={styles.adress}>49 Tigran Mets Avenue, 5th floor Armenia, Yerevan</p>
                        </div>

                        <div className={styles.laAdress}>
                            <p className={styles.la}>LA</p>
                            <p className={styles.adress}>49 Tigran Mets Avenue, 5th floor Armenia, Yerevan</p>




                        </div>

                    </div>


                    <div className={styles.image}>
                        <img className={styles.letter} src={letter} alt="Letter" />


                    </div>





                </div>




            </div>
        </>
    )
}

export default RightSide