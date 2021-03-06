import styles from './contact.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Flags from './FlagsInput'
import RightSide from './RightSide/RightSide'



const ContactUs = () => {

    return (
        <>
            <Container style={{ padding: '0px' }} fluid>
                <Row style={{ marginLeft: '0px', marginRight: '0px' }}>
                    <Col style={{ padding: '0px' }} >
                        <div className={styles.contactUs}>

                            <p className={styles.title}> CONTACT US</p>
                            <div>
                                <div className={styles.header}>
                                    <input className={styles.name} placeholder='Your name *' name='Name' type="text" />
                                    <input className={styles.lastName} placeholder='Last name *' name='LastName' type="text" />



                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <input placeholder='Email *' className={styles.inputs} type="email" />
                                    <Flags />
                                    <input placeholder='Company' className={styles.inputs} name='Company' type="text" />
                                </div>
                                <div className={styles.helpBox}>
                                    <span className={styles.help}>HOW CAN WE HELP?</span>

                                </div>

                                <div className={styles.messageBox}>
                                    <input className={styles.textArea} placeholder='Your Message ...*' type="text" />

                                </div>

                                <div style={{ display: 'flex'}}>
                                    <input className={styles.checkBox} type="checkbox" />

                                    <div className={styles.agreement}>
                                        <span className={styles.subscribe}>Yes I want to subscribe</span>
                                    </div>
                                </div>

                                <div style={{ marginTop: '58px' }}>
                                    <button className={styles.button}>SEND</button>
                                </div>

                                <div className={styles.bottomText}>
                                    <span>By clicking buton I agree with the collection
                                        and proscessing of my personal data as described in the
                                        <span style={{ color: '#04cfd2', marginLeft: '3px' }}>Privace policy</span>
                                    </span>
                                </div>


                            </div>
                        </div>


                    </Col>


                    <Col style={{ padding: '0px' }}>
                        <RightSide />

                    </Col>
                </Row>




            </Container>
        </>

    )
}



export default ContactUs