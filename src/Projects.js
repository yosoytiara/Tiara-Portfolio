import React from "react";
import MainLayout from "./mainLayout";
import "./projects.css";

export default function Projects() {
  return (
    <div id="projects" className="project">
      <MainLayout>
        <h1>Projects</h1>
        <div class="container">
          <div class="row">
            <br></br>
            <div class="col">
              <h5> Vanilla JavaScript Weather App</h5>
              <p>
                What the project does: It displays the current date and time.
                Allows users to search a city or use their current location to
                display the current temperature and forecast.
              </p>
              <a
                href="https://shimmering-kelpie-e14ec7.netlify.app/"
                alt="Weather app Live"
                target="_blank"
                rel="noreferrer"
              >
                <em>Live </em>
              </a>
              <a
                href="https://github.com/yosoytiara/Weather-app"
                alt="Weather app Github"
                target="_blank"
                rel="noreferrer"
              >
                <span>Code</span>
              </a>
            </div>
            <div class="col">
              <a
                href="https://github.com/yosoytiara/Weather-app"
                alt="Weather app Live"
                target="_blank"
                rel="noreferrer"
              >
                <img src="Weather.png" alt="Weather App" width="300" />
              </a>
            </div>
          </div>
          <br></br>
          <div class="row">
            <div class="col">
              <h5>React Weather App</h5>
              <p>
                What the project does: Weather app made with React framework
                allows users to search any in the city in the world to display
                the current temperature and forecast.
              </p>
              <a
                href="https://imaginative-khapse-6ac5b0.netlify.app/"
                alt="Weather app Live"
                target="_blank"
                rel="noreferrer"
              >
                <em>Live </em>
              </a>
              <a
                href="https://github.com/yosoytiara/React-Weather-app"
                alt="React Weather app Github"
                target="_blank"
                rel="noreferrer"
              >
                <span>Code</span>
              </a>
            </div>
            <div class="col">
              <a
                href="https://github.com/yosoytiara/React-Weather-app"
                alt="React Weather app Github"
                target="_blank"
                rel="noreferrer"
              >
                <img src="react.png" alt="React Weather App" width="400" />
              </a>
            </div>
          </div>
          <br></br>
          <div class="row ">
            <div class="col">
              <h5> Refy Beauty Landing Page</h5>
              <p>My entry for SheCodes Beauty Brand Landing Page Challenge💄</p>
              <p>
                What the project does: A landing page for beauty brand Refy
                Beauty
              </p>

              <a
                href="https://github.com/yosoytiara/RefyBeauty"
                alt="Reft Beauty app Github"
                target="_blank"
                rel="noreferrer"
              >
                <span>Code</span>
              </a>
            </div>
            <div class="col">
              <div className="refy">
                <a
                  href="https://github.com/yosoytiara/RefyBeauty"
                  alt="Reft Beauty app Github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="refy1.gif"
                    alt="Refy Beauty Landing page"
                    width="400"
                    className="refy-img"
                  />
                </a>
              </div>
            </div>
          </div>
          <br></br>
          <div class="row ">
            <div class="col">
              <h5> To Do APP</h5>

              <p>
                What the project does: It allows users to create a todo list.
                Users are able to edit or delete tasks and are able to see
                previous saved tasks
              </p>

              <a
                href="https://github.com/yosoytiara/To-Do-List"
                alt="Todo app Github"
                target="_blank"
                rel="noreferrer"
              >
                <span>Code</span>
              </a>
            </div>
            <div class="col">
              <div className="refy">
                <a
                  href="https://github.com/yosoytiara/To-Do-List"
                  alt="Todo app Github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="Screen Shot 2023-02-28 at 10.51.39 PM.png"
                    alt="Refy Beauty Landing page"
                    width="400"
                    className="refy-img"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer id="footer">
          <ul>
            <li>
              <a
                href="mailto: contact@tiara-evelyn.com"
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
      </MainLayout>
    </div>
  );
}
