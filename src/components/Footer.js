import React from "react";
import './styles/footer.css';
import logoFylo from "./images/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

const iconTwitter = <FontAwesomeIcon className="iconFooter social" icon={faTwitter} />
const iconFacebook = <FontAwesomeIcon className="iconFooter social" icon={faFacebookF} />
const iconInsta = <FontAwesomeIcon className="iconFooter social" icon={faInstagram} />
const iconPhone = <FontAwesomeIcon className="iconFooter phone" icon={faPhoneVolume} />
const iconMail = <FontAwesomeIcon className="iconFooter mail" icon={faEnvelope} />
const iconLocation = <FontAwesomeIcon className="iconFooter locationDot" icon={faLocationDot} />


function Footer() {
  return (
    <footer>
      <div className="container-footer-items">
     <img className="logoFooter" src={logoFylo} alt="logo"></img>
     <div className="locationFooter">
       {iconLocation}
       <p>Lorem ipsum dolor sit amen, consectetur adipiscing elit, sed do eiusmod tempor incididunt tut labore et dolore magna aliqua</p>
     </div>
     <div className="contactFooter">
     <div>
       {iconPhone}
       <p>+1-533-123-5467</p>
     </div>
     <div>
       {iconMail}
       <p>example@fylo.com</p>
     </div>
     </div>
      <ul className="listAbout">
      <li>About Us</li>
      <li>Jobs</li>
      <li>Press</li>
      <li>Blog</li>  
      </ul>  
      <ul className="listContact">
      <li>Contact Us</li>
      <li>Terms</li>
      <li>Privacy</li>  
      </ul> 
      <div className="socialMedia">
        {iconFacebook}
        {iconTwitter}
        {iconInsta}
      </div>
      </div>
    </footer>
  );
}

export default Footer;
