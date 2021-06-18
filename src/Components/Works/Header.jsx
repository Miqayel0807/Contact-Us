import { Container, Row, Col, Card } from "react-bootstrap"
import styles from './header.module.css'


const WorksHeader = () => {

    // const arr=[]
    // const [filter, setFilter]

    // const all=(id)=>{
    //     console.log(id);

    // }
    return (
        <>
            <Container fluid style={{ padding: '0px' }}>
                <Row style={{ padding: '0px' }} >
                    <div className={styles.title}>
                        <p>Our Works</p>
                    </div>

                </Row>

                <Row style={{ padding: '0px' }}>
                    <Col>
                        <div className={styles.links}>
                            <p  className={styles.all}>All</p>
                            <p className={styles.otherLinks}>Social</p>
                            <p className={styles.otherLinks}>Eccomerce</p>
                            <p className={styles.otherLinks}>Travel</p>
                            <p className={styles.otherLinks}>Booking</p>
                            <p className={styles.otherLinks}>Apps</p>
                            <p className={styles.otherLinks}>Other</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xl={4}>
                        <Card className={styles.card}>
                            <p className={styles.live}>Live Penalty</p>
                            <p className={styles.apps}>Apps, Web, Ios, Android</p>
                        </Card>
                    </Col>
                    <Col  xl={4}>
                        <Card className={styles.card}>
                            <p className={styles.live}>Live Penalty</p>
                            <p className={styles.apps}>Apps, Web, Ios, Android</p>
                        </Card>
                    </Col>
                    <Col xl ={4}>
                        <Card className={styles.card}>
                            <p className={styles.live}>Live Penalty</p>
                            <p className={styles.apps}>Apps, Web, Ios, Android</p>
                        </Card>
                    </Col>
                    <Col xl ={4}>
                        <Card className={styles.card}>
                            <p className={styles.live}>Live Penalty</p>
                            <p className={styles.apps}>Apps, Web, Ios, Android</p>
                        </Card>
                    </Col>
                    <Col xl ={4}>
                        <Card className={styles.card}>
                            <p className={styles.live}>Live Penalty</p>
                            <p className={styles.apps}>Apps, Web, Ios, Android</p>
                        </Card>
                    </Col>
                    <Col xl ={4}>
                        <Card className={styles.card}>
                            <p className={styles.live}>Live Penalty</p>
                            <p className={styles.apps}>Apps, Web, Ios, Android</p>
                        </Card>
                    </Col>
                    <Col xl ={4}>
                        <Card className={styles.card}>
                            <p className={styles.live}>Live Penalty</p>
                            <p className={styles.apps}>Apps, Web, Ios, Android</p>
                        </Card>
                    </Col>
                    <Col xl ={4}>
                        <Card className={styles.card}>
                            <p className={styles.live}>Live Penalty</p>
                            <p className={styles.apps}>Apps, Web, Ios, Android</p>
                        </Card>
                    </Col>
                    <Col xl ={4}>
                        <Card className={styles.card}>
                            <p className={styles.live}>Live Penalty</p>
                            <p className={styles.apps}>Apps, Web, Ios, Android</p>
                        </Card>
                    </Col>
                    <Col xl ={4}>
                        <Card className={styles.card}>
                            <p className={styles.live}>Live Penalty</p>
                            <p className={styles.apps}>Apps, Web, Ios, Android</p>
                        </Card>
                    </Col>
                    <Col xl ={4}>
                        <Card className={styles.card}>
                            <p className={styles.live}>Live Penalty</p>
                            <p className={styles.apps}>Apps, Web, Ios, Android</p>
                        </Card>
                    </Col>
                    <Col xl ={4}>
                        <Card className={styles.card}>
                            <p className={styles.live}>Live Penalty</p>
                            <p className={styles.apps}>Apps, Web, Ios, Android</p>
                        </Card>
                    </Col>
                </Row>



            </Container>

        </>
    )
}

export default WorksHeader