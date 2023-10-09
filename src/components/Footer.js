import React from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import MailChimpForm from './MailChimpForm'
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

function Footer() {
  return (
   <footer className="footer">   
    <Container>
      <Row className='align-items-center'>    
          <MailChimpForm/>
          <Col sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
            <h1>Sankar</h1>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
              <div className="social-icon">
              <a href="https://www.linkedin.com/in/harikrishnan-h-298127282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/profile.php?id=100007952883669&mibextid=LQQJ4d"><img  src={navIcon2} alt="" /></a>
                <a href="https://instagram.com/_hariie._?igshid=NGVhN2U2NjQ0Yg=="><img src={navIcon3} alt="" /></a>
              </div>
              <p>CopyRight 2022. All Right Reserved</p> 
              <p>designed by Harikrishnan H</p>
          </Col>
      </Row>
    </Container>
   </footer>
  )
}

export default Footer
