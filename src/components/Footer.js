import React from "react";
import "./Footer.css";
import '../pages/about.css';
function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Your Name. All rights reserved.</p>
      <div className="footer-links fi">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
        {/* <a href="mailto:your.email@example.com">Email</a> */}
      </div>
    </footer>
  );
}

export default Footer;
