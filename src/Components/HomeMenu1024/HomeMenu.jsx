import { Container, Modal, Button } from 'react-bootstrap'
import styles from './homemenu.module.css'
import logo from '../../Files/whiteLogo.png'
import facebook from './icons/facebook.svg'
import twitter from './icons/twitter.svg'
import instagram from './icons/instagram.svg'
import github from './icons/github.svg'
import linkedin from './icons/linkedin.svg'



const HomeMenu = (props) => {

    return (
        <>
            <Container fluid className={styles.container}>

                <Modal.Header className={styles.close} onClick={() => props.colorChange()} closeButton>
                    <a className={styles.logo} href="/home"><img className={styles.image} src={logo} alt="Logo" /></a>
                </Modal.Header>

                <div className={styles.links}>
                    <a className={styles.about} href="/about">About</a>
                    <a className={styles.otherLinks} href="/services">Services</a>
                    <a className={styles.otherLinks} href="/works">Works</a>
                    <a className={styles.otherLinks} href="/career">Career</a>
                    <a className={styles.otherLinks} href="/contact">Contact</a>
                </div>

                <div className={styles.languages}>
                    <a className={styles.en} href="/en">En</a>
                    <a className={styles.otherLanguages} href="/ru">RU</a>
                    <a className={styles.otherLanguages} href="/hy">HY</a>
                </div>

                <div className={styles.footer}>


                    <div className={styles.icons}>
                        <img className={styles.facebook} src={facebook} alt="Facebook Logo" />
                        <img className={styles.otherIcons} src={linkedin} alt="LinkedIn Logo" />
                        <img className={styles.otherIcons} src={twitter} alt="Twitter Logo" />
                        <img className={styles.otherIcons} src={github} alt="GiHhub Logo" />
                        <img className={styles.otherIcons} src={instagram} alt="Instagram Logo" />
                    </div>

                    <Button className={styles.button}>GET AN ESTIMATE </Button>

                </div>


            </Container>

        </>
    )

}

export default HomeMenu