import { Container } from "react-bootstrap";
import ContactUs from "../Components/Contact Us/ContactUs";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useState } from "react";
import WorksHeader from "../Components/Works/Header";

const ContactPage = () => {
 const [display, setDisplay]=useState(true)

 const changeDisplay=()=>{
     setDisplay(!display)
 }
    return (
        
        <Container style={{ padding: '0px' }} fluid>
            <Header display={changeDisplay} />
          { display &&  <ContactUs />}
          {/* <WorksHeader/> */}
          { display &&   <Footer/>}


        </Container>
    )
}

export default ContactPage