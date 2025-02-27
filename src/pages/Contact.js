import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import "../pages/about.css";
import pdffile from "../images/Anusha.pdf";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  
  // Regular expression for basic email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate fields on blur
  const handleBlur = (event) => {
    const { name, value } = event.target;
    if (value.trim() === "") {
      setErrors({ ...errors, [name]: "Required*" });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
    if (name === "email" && value && !emailRegex.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address.",
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Show loading spinner
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setErrors({
        name: formData.name ? "" : "Name is required",
        email: formData.email ? "" : "Email is required",
        message: formData.message ? "" : "Message is required",
      });
      setIsLoading(false); // Hide loading spinner
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address.",
      }));
      setIsLoading(false); // Hide loading spinner
      return;
    }
    
    try {
      const response = await axios.post("http://portfolio-5pvt.onrender.com/api/contact", formData);
      console.log(response.data.message); // Display success message

      // Simulate loading state with a delay before opening the modal
      setTimeout(() => {
        setIsLoading(false); // Stop loading spinner
        setSuccessModalIsOpen(true); // Open the success modal after delay
      }, 2000); // Delay of 2 seconds (adjust as needed)
      
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } catch (error) {
      setIsLoading(false); // Hide loading spinner
      console.error("Error submitting the form:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  // Close modal handler
  const closeModal = () => {
    setSuccessModalIsOpen(false); // Close the success modal
  };

  // Enable submit button only when form is valid
  const isFormValid = formData.name && formData.email && formData.message && emailRegex.test(formData.email);

  return (
    <section id="contact">
      <div className="container">
        <h1 className="title">Contact Me</h1>
        <div className="row">
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
          <div className="col-12 col-md-6">
            <form className="frm" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p className="error-message">{errors.name}</p>

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p className="error-message">{errors.email}</p>

              <textarea
                name="message"
                placeholder="Your Message"
                id="text-area"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <p className="error-message">{errors.message}</p>
              
              <button type="submit" className="sub" disabled={!isFormValid || isLoading}>
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
        onRequestClose={closeModal}
        contentLabel="Success Message"
        className="success-modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <h2>Success!</h2>
          <p>Your message has been successfully submitted.</p>
          <button className="modbut" onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </section>
  );
}

export default Contact;
