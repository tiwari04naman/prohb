import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from 'react-router-dom';


export default function About() {
  return (
    <div class="container mt-5 pt-5">
      <header>
         <h1 style={{marginTop:'50px'}} >About Me</h1>
      </header>
      <main class="p1" >
        <div>
        <img className='profile-picture' src="image/project.jpg" height={300} alt="Naman Tiwari" />
        </div >
        <div className='container px-5'>
          <p>
            Hello, I am Naman Tiwari, a Software Developer with a passion for Java development. Throughout my career, I have gained valuable experience and honed my skills in this field through various projects. I thrive in collaborative environments and enjoy working with diverse teams to create innovative solutions.
          </p>
          <p>
            As a Software Engineer, continuous learning and staying up-to-date with the latest trends and technologies are important to me. I take pleasure in finding efficient and elegant solutions to complex challenges.
            Apart from my professional life, I have a keen interest in Adhyatam, and during my free time, I enjoy learning new things.
          </p>
          <p>
            If you would like to know more about my work, feel free to explore my portfolio. Don't hesitate to get in touch with me for collaboration or if you have any questions.
          </p>
          </div>
      </main>
      <footer class="contact-info">
        <p>Contact: tiwarinaman675@gmail.com</p>

      </footer>
      
    </div>

  );
}
