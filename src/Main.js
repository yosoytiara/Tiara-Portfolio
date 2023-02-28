import React from "react";
import "./Main.css";
import Nav from "./Nav";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="main">
      <Nav />
      <div class="Intro">
        <h1>Tiara🦋Dillard</h1>
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
      <span className="project-link">
        <Link to="/projects"> View Projects</Link>
      </span>
      <div class="Skills">
        <p className="techs">Skills & Tools </p>
        <ul id="listone" class="listone">
          <li>
            <i className="fa-brands fa-html5"></i>
            HTML
          </li>
          <li>
            <i className="fa-brands fa-css3-alt"></i>CSS
          </li>
          <li>
            <i className="fa-brands fa-js"></i>JavaScript
          </li>
        </ul>
        <ul>
          <li>
            <i className="fa-brands fa-react"></i>React.js
          </li>
          <li>
            <i class="fa-brands fa-git-alt"></i>Git
          </li>
          <li>
            <i class="fa-brands fa-java"></i>Java
          </li>
        </ul>
        <ul className="listtwo">
          <li>
            <i className="fa-solid fa-window-maximize"></i>APIs
          </li>
          <li>
            <i className="fa-solid fa-palette"></i>PhotoShop
          </li>
          <li>
            <i className="fa-solid fa-database"></i>SQL
          </li>
        </ul>
      </div>

      <br />
      <footer id="footer">
        <ul>
          <li>
            <a
              href="mailto: tiara.dillard2@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yosoytiara/"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="http://www.linkedin.com/in/tiara-dillard"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
        </ul>
        <p>
          Designed & Developed by{" "}
          <a
            href="https://github.com/yosoytiara/Tiara-Portfolio-"
            target="_blank"
            rel="noreferrer"
          >
            Tiara Dillard
          </a>{" "}
          ©Tiara Dillard
        </p>
      </footer>
      <script
        src="https://kit.fontawesome.com/452d94b75d.js"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}
