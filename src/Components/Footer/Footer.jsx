import styles from './footer.module.css'
import whiteLogo from '../../Files/whiteLogo.png'
import { Container, Row, Col } from 'react-bootstrap'
import map from './Images/world_map.png'
import facebook from './FooterIcons/facebook.svg'
import twitter from './FooterIcons/twitter.svg'
import insta from './FooterIcons/instagram.svg'
import github from './FooterIcons/github.svg'
import linkedin from './FooterIcons/linkedin.svg'





const Footer = () => {
    return (
        <>
            <Container className={styles.container} fluid>
                <Row>
                    <Col>
                        <img className={styles.footerLogo} src={whiteLogo} alt="" />
                    </Col>
                </Row>

                <Row style={{  display: 'flex', flexDirection: 'row' }}>
                    <div className={styles.contactBlock} >
                        <span className={styles.contactService}>Contact</span>
                        <span className={styles.arnology}>arnologyllc@gmail.com</span>
                        <span className={styles.number}>374 90 00 00</span>
                        <span className={styles.number2}>374 90 00 00</span>
                    </div>

                    <div className={styles.companyBlock} >
                        <span className={styles.company}>Company</span>
                        <span className={styles.about}>About</span>
                        <span className={styles.works}>Works</span>
                        <span className={styles.career}>Career</span>
                        <span className={styles.team}>Team</span>
                        <span className={styles.estimate}>Get Estimate</span>
                        <span className={styles.policy}>Privace policy</span>
                        <span className={styles.faq}>Faq</span>
                    </div>

                    <div className={styles.services} >
                        <span className={styles.contactService}>Services</span>
                        <span className={styles.backend}>Backend Web Development</span>
                        <span className={styles.text}>Api Development Services</span>
                        <span className={styles.text}>Devops Consulting </span>
                        <span className={styles.text}>Django Development</span>
                        <span className={styles.text}>Frontend Web Development</span>
                        <span className={styles.text}>React Development</span>
                        <span className={styles.text}>Angular Development</span>
                        <span className={styles.text}>Mobile Development</span>
                        <span className={styles.text}>Python Development</span>
                        <span className={styles.text}>Product Design</span>
                    </div>


                    <div className={styles.textbox} sm={2} >

                        <span className={styles.ui}>User Interface design</span>
                        <span className={styles.text}>UX design Services</span>
                        <span className={styles.text}>Software Product Development </span>
                        <span className={styles.text}>Data Warehouse Consulting</span>                         <span className={styles.text}>Case Studies</span>
                        <span className={styles.text}>Dove Med</span>
                        <span className={styles.text}>Best Egg</span>
                        <span className={styles.text}>Pet Dialog</span>
                        <span className={styles.text}>Product Design</span>
                        <span className={styles.text}>Cloud Velox</span>


                    </div>
                    <img className={styles.map} src={map} alt="Map" />







                </Row>

                <hr className={styles.line} />

                <div className={styles.footer}>
                    <span className={styles.copyright}>Copyright 2021</span>

                    <div className={styles.icons}>
                        <img className={styles.facebook} src={facebook} alt="Facebook" />
                        <img className={styles.otherIcons} src={linkedin} alt="Linkedin" />
                        <img className={styles.otherIcons} src={twitter} alt="Twitter" />
                        <img className={styles.otherIcons} src={github} alt="GitHub" />
                        <img className={styles.otherIcons} src={insta} alt="Instagram" />

                    </div>

                </div>









            </Container>

        </>
    )
}


export default Footer