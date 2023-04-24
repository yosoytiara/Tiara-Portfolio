import React from "react";
import "./About.css";
import MainLayout from "./mainLayout";

export default function About() {
  return (
    <div id="about" className="about">
      <MainLayout>
        <h1>About Me</h1>
        <div class="aboutme">
          <p>
            Hi, I am Tiara Dillard a Front-end Developer and Graphic Designer
            based in New York City. I was first introduced to Software
            engineering in highschool, and have been coding ever since. I am a
            2020 Communications graduate from the University at Albany. I have a
            passion for coding, and all things art and fashion. I consider
            myself a creative,problem-solver and someone who is always eager to
            learn new skills.
          </p>
        </div>

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
        <footer>
          <ul>
            <li>
              <a
                href="mailto: contact@tiara-evelyn.com"
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
          <p>
            Designed & Developed by{" "}
            <a
              href="https://github.com/yosoytiara/Tiara-Portfolio-"
              target="_blank"
              rel="noreferrer"
            >
              Tiara Dillard
            </a>{" "}
            ©Tiara Dillard 2023
          </p>
        </footer>
      </MainLayout>
    </div>
  );
}
