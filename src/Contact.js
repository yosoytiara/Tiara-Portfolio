import React from "react";
import "./contact.css";
import MainLayout from "./mainLayout";

export default function Contact() {
  return (
    <div id="about" className="contact">
      <MainLayout>
        <h1>Contact</h1>
        <ul class="contact-links">
          <li>
            <a
              href="mailto: contact@tiara-evelyn.com"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-solid fa-envelope"></i>Contact@tiara-evelyn.com
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yosoytiara/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-square-github"></i>GitHub
            </a>
          </li>
          <li>
            <a
              href="http://www.linkedin.com/in/tiara-dillard"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-linkedin"></i>Linkedin
            </a>
          </li>
        </ul>
      </MainLayout>
    </div>
  );
}
