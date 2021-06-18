import { useState } from "react"
import { Container, Button,  Navbar,  Nav,  } from "react-bootstrap"
import logo from '../../Files/logo.png'
import HomeMenu from "../HomeMenu1024/HomeMenu"
import styles from './header.module.css'


const Header = (props) => {
  const [color, setColor] = useState(false)
  let width=window.innerWidth
  const a = () => {
    setColor(!color)
    props.display()
  }


  return (
    <>
      <Container style={{ padding: '0px' }} sm md fluid >
       <Navbar expand="xl" style={color ? { display: 'none' } : { display: 'flex' }}>
          <Navbar.Brand href="#"><img className={styles.logo} src={logo} alt="Logo" /></Navbar.Brand>
          <Navbar.Toggle onClick={() => a()} aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: '100px', marginLeft: '430px' }}
              navbarScroll
            >
              <Nav.Link style={width<=1024? {display:"none"}: {}} className={styles.about} href="#action1">About</Nav.Link>
              <Nav.Link style={width<=1024? {display:"none"}: {}} className={styles.services} href="#action2">Services</Nav.Link>
              <Nav.Link style={width<=1024? {display:"none"}: {}}className={styles.works} href="#action2">Works</Nav.Link>
              <Nav.Link style={width<=1024? {display:"none"}: {}} className={styles.career} href="#action2">Career</Nav.Link>
              <Nav.Link style={width<=1024? {display:"none"}: {}} className={styles.contact} href="#action2">Contact</Nav.Link> 

              <Button style={width<=1024? {display:"none"}: {}} className={styles.button}>Get an estimate</Button>

               <label style={width<=1024? {display:"none"}: {}} className={styles.dropDown} for="En">En</label>

              <select style={width>=1024? {display:"none"}: {}}className={styles.drop} name="cars" id="cars">
                <option value="HY">Armenian</option>
                <option value="Rus">Russian</option>

              </select>


            </Nav>

          </Navbar.Collapse>
        </Navbar>

        {color && <HomeMenu a={a} />}


      </Container>
    </>
  )
}


export default Header