import React, { useState } from "react";
import './styles/core.css';
import illustrationFiles from "./images/illustration-files.png"
import illustrationStay from "./images/illustration-stay-productive.png"
import iconAccess from "./images/icon-access-anywhere.svg"
import iconAnyFile from "./images/icon-any-file.svg"
import iconSecurity from "./images/icon-security.svg"
import iconArrow from "./images/icon-arrow.svg"
import iconCollab from "./images/icon-collaboration.svg"
import bgQuotes from "./images/bg-quotes.png"
import bgCurvyDesktop from "./images/bg-curvy-desktop.svg"
import bgCurvyMobile from "./images/bg-curvy-mobile.svg"
import iconEmail from "./images/icon-email.svg"
import iconLocation from "./images/icon-location.svg"
import profileOne from "./images/profile-1.jpg"
import profileTwo from "./images/profile-2.jpg"
import profileThree from "./images/profile-3.jpg"
import validator from "validator"

function Core() {
  const [emailError, setEmailError] = useState('');



  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email) || e.target.value.length === 0 ) {
      setEmailError('')
    } else if (e.target.value.length > 0) {
      setEmailError('Please enter a valid email adress')
    }
  }
  

  return (
    <div className="container-core">
     <div className="container-intro">
       <img className="illu-people" src={illustrationFiles} alt="files and people"></img>
       <h1>All your files in one secure location,
       accessible anywhere.</h1>
       <p>Fylo stores all your most important files in one secure location.
       Access them wherever you need, share and collaborate with 
       friends, family, and co-workers.</p>
       <button className="get-started-btn">Get Started</button> 
     </div>
     <div className="container-features">
       <div className="feature-card">
         <img className="featureImg" src={iconAccess} alt="access"></img>
         <h2 className="title-card">Access your files, anywhere</h2>
         <p>The ability to use a smartphone, tablet, or computer 
           to access your account means your files follow you 
           everywhere</p>
       </div>
       <div className="feature-card">
         <img className="featureImg" src={iconSecurity} alt="security"></img>
         <h2 className="title-card">Security you can trust</h2>
         <p>2-factor authentification and use-controlled encryption are 
           just a couple of the security features we allow to help
          secure your files</p>
       </div>
       <div className="feature-card">
         <img className="featureImg" src={iconCollab} alt="collaboration"></img>
         <h2 className="title-card">Real-time collaboration</h2>
         <p>Securely share files and folders with friends, family and 
          colleagues for live collaboration. No email attachments 
          required.</p>
       </div>
       <div className="feature-card">
         <img className="featureImg" src={iconAnyFile} alt="any-file"></img>
         <h2 className="title-card">Store any type of file</h2>
         <p>Whether you're sharing holidays photos or work
           documents. Fylo has you covered allowing for all file 
           types to be securely stored and shared.</p>
       </div>
     </div>
     <div className="container-announce">
       <img className="illustrationStay" src={illustrationStay} alt="people chat"></img>
        <div className="container-text-feat">
          <h1>Stay productive, wherever you are</h1>
          <p>Never let location be an issue when accessing your files. Fylo has you
            covered for all of your file storage needs.</p>
          <p>Securely share files and folders with friends, family and colleagues for live
             collaboration. No email attachments required.</p>
          <a href="fylo" className="fyloSee">See how Fylo Works</a>
        </div>
     </div>
     <div className="container-reviews">
     <img className="quotes" src={bgQuotes} alt="quotes"></img>
        <div className="review-card">
          <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
          <div className="profil">
            <img className="imgProfile" src={profileOne} alt="Satish Patel"></img>
            <div>
              <p className="nameReview">Satish Patel</p>
              <p className="bioReview">Founder & Ceo, Muddle</p>
            </div>
          </div>
        </div>
        <div className="review-card">
          <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
          <div className="profil">
            <img className="imgProfile" src={profileTwo} alt="Bruce McKenzie"></img>
            <div>
              <p className="nameReview">Bruce McKenzie</p>
              <p className="bioReview">Founder & Ceo, Muddle</p>
            </div>
          </div>
        </div>
        <div className="review-card">
          <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
          <div className="profil">
            <img className="imgProfile" src={profileThree} alt="Iva Boyd"></img>
            <div>
              <p className="nameReview">Iva Boyd</p>
              <p className="bioReview">Founder & Ceo, Muddle</p>
            </div>
          </div>
        </div>
        <div className="containerEarly">
          <h1>Get early access today</h1>
          <p className="pEarly">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
          <form className="inputEarly">
            <input type="email" placeholder="email@example.com" onChange={(e) => validateEmail(e)}></input>
            <button type="submit">Get Started For Free</button>
          </form>
          <div className="emailError">{emailError}</div>
        </div>
     </div>
    </div>
  );
}

export default Core;
