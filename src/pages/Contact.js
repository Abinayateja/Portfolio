import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import "../pages/about.css";
import pdffile from "../images/Anusha.pdf";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // ✅ Email Validation Regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // ✅ Handle Input Changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // ✅ Clear error message while typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // ✅ Validate Inputs on Blur
  const handleBlur = (event) => {
    const { name, value } = event.target;

    if (name === "name" && value.trim() === "") {
      setErrors((prev) => ({ ...prev, name: "Name is required." }));
    }

    if (name === "email" && !emailRegex.test(value)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email format." }));
    }

    if (name === "message" && value.trim() === "") {
      setErrors((prev) => ({ ...prev, message: "Message cannot be empty." }));
    }
  };

  // ✅ Handle Form Submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post("https://your-deployed-server-url.com/api/contact", formData);
      console.log(response.data.message);

      setTimeout(() => {
        setIsLoading(false);
        setSuccessModalIsOpen(true);
      }, 1500);

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setIsLoading(false);
      console.error("Error submitting the form:", error);
      alert("Failed to send the message. Please try again.");
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <h1 className="title">Contact Me</h1>
        <div className="row contact-con">
          {/* Left Contact Info */}
          <div className="contcon col-12 col-md-6">
            <div className="contact-item">
              <i className="fa-solid fa-phone"></i>
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="contact-item">
              <i className="fa-regular fa-envelope"></i>
              <span>example@example.com</span>
            </div>
            <div className="butdiv">
              <a className="but" href={pdffile} download>
                Download CV
              </a>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="col-12 col-md-6">
            <form className="frm" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p className="error-message">{errors.name}</p>

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p className="error-message">{errors.email}</p>

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
              <p className="error-message">{errors.message}</p>

              <button type="submit" className="sub" disabled={!formData.name || !formData.email || !formData.message || !emailRegex.test(formData.email) || isLoading}>
                {isLoading ? (
                  <>
                    Submitting...
                    <div className="loader">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </>
                ) : (
                  "Send"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Modal
        isOpen={successModalIsOpen}
        onRequestClose={() => setSuccessModalIsOpen(false)}
        contentLabel="Success Message"
        className="success-modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <h2>Success!</h2>
          <p>Your message has been successfully submitted.</p>
          <button className="modbut" onClick={() => setSuccessModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </section>
  );
}

export default Contact;
