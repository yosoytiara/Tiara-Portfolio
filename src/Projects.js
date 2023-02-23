import React from "react";
import "./Main.css";
import Nav from "./Nav";
export default function Projects() {
  return (
    <div id="projects" className="project">
      <Nav></Nav>
      <p className="PROJt">Projects</p>
      <div class="container">
        <div class="row">
          <div class="col">
            <img src="Weather.png" alt="Weather App" width="300" />
            <br></br>
            Vanilla JavaScript Weather App
            <br></br>
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
              | Code
            </a>
          </div>

          <div class="col">
            <img src="react.png" alt="React Weather App" width="400" />
            <br></br>
            React Weather App
            <br></br>
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
              | Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
