import { useState } from "react"
import { Container, Button, Navbar, Nav, } from "react-bootstrap"
import logo from '../../Files/logo.png'
import HomeMenu from "../HomeMenu1024/HomeMenu"
import styles from './header.module.css'


const Header = (props) => {
  const [color, setColor] = useState(false)
  const [title, setTitle] = useState('En')
  let width = window.innerWidth
  const colorChange = () => {
    setColor(!color)
    props.display()
  }




  const changeLanguage = (value) => {
    setTitle(value.target.value)
  }


  return (
    <>
      <Container className={styles.container} sm md fluid >
        <Navbar className={styles.navBar} expand="xl" style={color ? { display: 'none' } : { display: 'flex' }}>
          <Navbar.Brand href="/"><img className={styles.logo} src={logo} alt="Logo" /></Navbar.Brand>
          <Navbar.Toggle onClick={() => colorChange()} aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: '100px', marginLeft: '454px' }}
              navbarScroll
            >
              <Nav.Link style={width <= 1024 ? { display: "none" } : {}} className={styles.about} href="#action1">About</Nav.Link>
              <Nav.Link style={width <= 1024 ? { display: "none" } : {}} className={styles.services} href="#action2">Services</Nav.Link>
              <Nav.Link style={width <= 1024 ? { display: "none" } : {}} className={styles.works} href="/works">Works</Nav.Link>
              <Nav.Link style={width <= 1024 ? { display: "none" } : {}} className={styles.career} href="#action2">Career</Nav.Link>
              <Nav.Link style={width <= 1024 ? { display: "none" } : {}} className={styles.contact} href="#action2">Contact</Nav.Link>

              <Button style={width <= 1024 ? { display: "none" } : {}} className={styles.button}>Get an estimate</Button>

              <label style={width <= 1024 ? { display: "none" } : {}} className={styles.dropDown} for="En">{title}</label>

              <select onChange={(value) => changeLanguage(value)} style={width <= 1024 ? { display: "none" } : {}} className={styles.drop} name="languages" id="languages">
                <option value="EN">English</option>
                <option value="HY">Armenian</option>
                <option value="RU">Russian</option>

              </select>


            </Nav>

          </Navbar.Collapse>
        </Navbar>

        {color && <HomeMenu colorChange={colorChange} />}

      </Container>
    </>
  )
}


export default Header