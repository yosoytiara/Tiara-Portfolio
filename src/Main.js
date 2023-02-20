import React from "react";
import "./Main.css";
import Project from "./Projects";
import About from "./About";
import Nav from "./Nav";
export default function Main() {
  return (
    <div className="main">
      <body>
        <Nav />
        <div class="Intro">
          <h1>Tiara Dillard</h1>
          <h3>Front-End Developer</h3>
          <div class="info">
            <p>
              <em>Creative. Passionate. Innovative.</em>
            </p>
          </div>
        </div>
        <hr />
        <br />
        <br />
        <About />
        <div class="Skills">
          <a href="#listone" className="techs">
            Technical Skillset
          </a>
          <ul id="listone" class="listone">
            <li>
              <i class="fa-brands fa-html5"></i>HTML
            </li>
            <li>
              <i class="fa-brands fa-css3-alt"></i>CSS
            </li>
            <li>
              <i class="fa-brands fa-js"></i>JavaScript
            </li>
            <li>
              <i class="fa-brands fa-react"></i>React.js
            </li>
          </ul>
          <ul class="listtwo">
            <li>
              <i class="fa-solid fa-window-maximize"></i>APIs
            </li>
            <li>
              <i class="fa-solid fa-palette"></i>PhotoShop
            </li>
            <li>
              <i class="fa-solid fa-database"></i>SQL
            </li>
          </ul>
        </div>
        <Project />
        <br />
        <footer id="footer">
          <ul>
            <li>
              <a
                href="mailto: tiara.dillard2@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-solid fa-envelope"></i>Email
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
        </footer>
        <script
          src="https://kit.fontawesome.com/452d94b75d.js"
          crossorigin="anonymous"
        ></script>
      </body>
    </div>
  );
}
