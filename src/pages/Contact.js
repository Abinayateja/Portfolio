import React from "react";
import '../pages/about.css';
import pdffile from '../images/Anusha.pdf';
function Contact() {
  return (
    <section id="contact">
      <div className="container">
      <h1 className="title">Contact Me</h1>
        <div className="row">
          <div className="contcon col-12 col-md-6">
            <div className="contact-item">
            <i class="fa-solid fa-phone"></i>
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="contact-item">
              <i class="fa-regular fa-envelope"></i>
              <span>example@example.com</span>
            </div>

            <div className="butdiv">
              <a className="but" href={pdffile} download>
                Download CV
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <form className="frm">
                <input type="text" name="name" placeholder="Your Name"/>
                <input type="email" name="email" placeholder="Your Email" />
                <textarea name="message" placeholder="Your Message"></textarea>
              <button type="submit" className="sub">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
