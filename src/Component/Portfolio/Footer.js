import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { a } from 'react-router-dom';

export default function Footer() {
  return (
    <>
    
  <p className="border-bottom border-5 mt-5"></p>
  <div className="container mt-5 mb-5 ">
    <footer className="text-center text-lg-start  text-muted mt-5">
      {/* <!-- Section: Social media --> */}
      <section className="d-flex justify-content-center justify-content-lg-between ">
        {/* <!-- Left --> */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* <!-- Left --> */}

        {/* <!-- Right --> */}
        <FontAwesomeIcon icon="fa-light fa-jug-bottle"  />
        <div className="">
          <a href="https://www.facebook.com/profile.php?id=100059241768503&mibextid=ZbWKwL" className="me-4 text-reset"><FontAwesomeIcon icon={faFacebook} size="2xl" style={{color: "black"}}/></a>
          <a href="https://instagram.com/namantiwari2003.sln?igshid=MzNlNGNkZWQ4Mg==" className="me-4 text-reset"><FontAwesomeIcon icon={faInstagram} size="2xl" style={{color:"black"}}/></a>
          <a href="https://www.linkedin.com/in/naman-tiwari-977507207/" className="me-4 text-reset"><FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color:" black"}}/></a>
          <a href="https://github.com/tiwari04naman" className="me-4 text-reset"><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "black"}}/></a>
        </div>
        {/* <!-- Right --> */}
      </section>
      {/* <!-- Section: Social media --> */}


      {/* <!-- Copyright --> */}
      <div class="text-center mt-5">
          © 2023 Copyright:@Naman

        </div>
      {/* <!-- Copyright --> */}
    </footer>
   
  </div>
  
    </>
  )
}
