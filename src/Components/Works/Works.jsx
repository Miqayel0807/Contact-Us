import { useState } from "react"
import { Container, Row, Col, Card} from "react-bootstrap"
import styles from './header.module.css'


const WorksHeader = () => {

    const [filter, setFilter] = useState({
        cards: [
            { name: 'Live Penalty', text: 'Apps, Web, Ios Android', id: 'social', className:styles.cardOne},
            { name: 'Live Penalty', text: 'Apps, Web, Ios Android', id: 'social', className:styles.cardTwo },
            { name: 'Live Penalty', text: 'Apps, Web, Ios Android', id: 'other', className:styles.cardThree },
            { name: 'Live Penalty', text: 'Apps, Web, Ios Android', id: 'other', className:styles.cardFour },
            { name: 'Live Penalty', text: 'Apps, Web, Ios Android', id: 'eccomerce', className:styles.cardFive },
            { name: 'Live Penalty', text: 'Apps, Web, Ios Android', id: 'eccomerce', className:styles.cardSix },
            { name: 'Live Penalty', text: 'Apps, Web, Ios Android', id: 'travel', className:styles.cardSeven },
            { name: 'Live Penalty', text: 'Apps, Web, Ios Android', id: 'travel', className:styles.cardEight },
            { name: 'Live Penalty', text: 'Apps, Web, Ios Android', id: 'booking',className:styles.cardNine },
            { name: 'Live Penalty', text: 'Apps, Web, Ios Android', id: 'booking', className:styles.cardTen },
            { name: 'Live Penalty', text: 'Apps, Web, Ios Android', id: 'apps', className:styles.cardEleven },
            { name: 'Live Penalty', text: 'Apps, Web, Ios Android', id: 'booking', className:styles.cardTwelve }
        ],
        all:[],
        showAll:true,
        social:[],
        showSocial:false,
        eccomerce:[],
        showEccomerce:false,
        travel:[],
        showTravel:false,
        booking:[],
        showBooking:false,
        apps:[],
        showApps:false,
        other:[],
        showOther:false

    })
    const filterChange = (id) => {
        const all = [...filter.cards]
        if (id === 'all') {
            console.log(all);
            setFilter({
                ...filter,
                all,
                showAll:true,
                showSocial:false,
                showEccomerce:false,
                showTravel:false,
                showBooking:false,
                showApps:false,
                showOther:false,
            })
        } else if (id === 'social') {
            console.log(all.filter(index => index.id === id));
            setFilter({
                ...filter,
                social:all.filter(index => index.id === id),
                showAll:false,
                showSocial:true,
                showEccomerce:false,
                showTravel:false,
                showBooking:false,
                showApps:false,
                showOther:false
            })
        } else if (id === 'eccomerce') {
            console.log(all.filter(index => index.id === id));
            setFilter({
                ...filter,
                eccomerce:all.filter(index => index.id === id),
                showAll:false,
                showSocial:false,
                showEccomerce:true,
                showTravel:false,
                showBooking:false,
                showApps:false,
                showOther:false,
            })
        } else if (id === 'travel') {
            console.log(all.filter(index => index.id === id));
            setFilter({
                ...filter,
                travel:all.filter(index => index.id === id),
                showAll:false,
                showTravel:true,
                showSocial:false,
                showEccomerce:false,
                showBooking:false,
                showApps:false,
                showOther:false,
            })
        } else if (id === 'booking') {
            console.log(all.filter(index => index.id === id));
            setFilter({
                ...filter,
                booking:all.filter(index => index.id === id),
                showAll:false,
                showBooking:true,
                showSocial:false,
                showEccomerce:false,
                showTravel:false,
                showApps:false,
                showOther:false,
            })
        } else if (id === 'apps') {
            console.log(all.filter(index => index.id === id));
            setFilter({
                ...filter,
                apps:all.filter(index => index.id === id),
                showAll:false,
                showApps:true,
                showSocial:false,
                showEccomerce:false,
                showTravel:false,
                showBooking:false,
                showOther:false,

            })
        } else if (id === 'other') {
            console.log(all.filter(index => index.id === id));
            setFilter({
                ...filter,
                other:all.filter(index => index.id === id),
                showAll:false,
                showOther:true,
                showSocial:false,
                showEccomerce:false,
                showTravel:false,
                showBooking:false,
                showApps:false,
            })
        }
    }

    const card = filter.cards.map(index => {
        return (
            <Col sm={12} lg={2} xl={4} className={styles.col} key={index}>
                <Card  className={index.className}>
                    <p className={styles.live}>{index.name}</p>
                    <p className={styles.apps}>{index.text}</p>
                </Card>
            </Col>
        )
    })

    const social = filter.social.map(index => {
        return (
            <Col style={{padding:'0px', marginLeft:'10px', marginRight:'0px'}} key={index} xl={4}>
                <Card  style={{marginTop:'95px', marginBottom:'161px'}}  className={index.className}>
                    <p className={styles.live}>{index.name}</p>
                    <p className={styles.apps}>{index.text}</p>
                </Card>
            </Col>
        )
    })

    const eccomerce = filter.eccomerce.map(index => {
        return (
            <Col style={{padding:'0px'}} key={index} xl={4}>
                <Card  style={{marginTop:'95px', marginBottom:'161px'}} className={index.className}>
                    <p className={styles.live}>{index.name}</p>
                    <p className={styles.apps}>{index.text}</p>
                </Card>
            </Col>
        )
    })

    const travel = filter.travel.map(index => {
        return (
            <Col style={{padding:'0px'}} key={index} xl={4}>
                <Card  style={{marginTop:'95px', marginBottom:'161px'}} className={index.className}>
                    <p className={styles.live}>{index.name}</p>
                    <p className={styles.apps}>{index.text}</p>
                </Card>
            </Col>
        )
    })

    const booking = filter.booking.map(index => {
        return (
            <Col  style={{padding:'0px'}} key={index} xl={4}>
                <Card  style={{marginTop:'95px', marginBottom:'161px', marginLeft:'0px'}} className={index.className}>
                    <p className={styles.live}>{index.name}</p>
                    <p className={styles.apps}>{index.text}</p>
                </Card>
            </Col>
        )
    })

    const apps = filter.apps.map(index => {
        return (
            <Col style={{padding:'0px'}} key={index} xl={4}>
                <Card  style={{marginTop:'95px', marginBottom:'161px'}} className={index.className}>
                    <p className={styles.live}>{index.name}</p>
                    <p className={styles.apps}>{index.text}</p>
                </Card>
            </Col>
        )
    })

    const other = filter.other.map(index => {
        return (
            <Col style={{padding:'0px'}} key={index} xl={4}>
                <Card style={{marginTop:'95px',  marginBottom:'161px'}} className={index.className}>
                    <p className={styles.live}>{index.name}</p>
                    <p className={styles.apps}>{index.text}</p>
                </Card>
            </Col>
        )
    })

    return (
        <>
            <Container fluid style={{ padding: '0px' }}>
                <Row style={{ padding: '0px', margin:'0px' }} >
                    <div className={styles.title}>
                        <p>Our Works</p>
                    </div>
                </Row>

                <Row style={{ padding: '0px', margin:'0px' }}>
                    <Col>
                        <div className={styles.links}>
                            <p onClick={() => filterChange('all')} className={styles.all}>All</p>
                            <p onClick={() => filterChange('social')} className={styles.otherLinks}>Social</p>
                            <p onClick={() => filterChange('eccomerce')} className={styles.otherLinks}>Eccomerce</p>
                            <p onClick={() => filterChange('travel')} className={styles.otherLinks}>Travel</p>
                            <p onClick={() => filterChange('booking')} className={styles.otherLinks}>Booking</p>
                            <p onClick={() => filterChange('apps')} className={styles.otherLinks}>Apps</p>
                            <p onClick={() => filterChange('other')} className={styles.otherLinks}>Other</p>
                        </div>
                    </Col>
                </Row>
              
              
               { 
               filter.showAll && <Row style={{margin:'0px', padding: '0px', justifyContent:'center'}}>
                {card}
                </Row>
                }

                <Row style={{margin:'0px', marginLeft:'250px', padding: '0px', justifyContent:'center'}}>
                    {filter.showSocial && social}
                    {filter.showEccomerce && eccomerce}
                    {filter.showTravel && travel}
                    {filter.showBooking && booking}
                    {filter.showApps && apps}
                    {filter.showOther && other}
                </Row>

            </Container>
        </>
    )
}

export default WorksHeader