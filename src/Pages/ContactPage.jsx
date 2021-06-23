import { Container } from "react-bootstrap";
import ContactUs from "../Components/Contact Us/ContactUs";
import { useState } from "react";

const ContactPage = (props) => {
 const [display, setDisplay]=useState(true)


    return (
        
        <Container style={{ padding: '0px' }} fluid>
          { display &&  <ContactUs />}
        </Container>
    )
}

export default ContactPage