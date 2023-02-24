import React from "react";
import MainLayout from "./mainLayout";
import "./projects.css";

export default function Projects() {
  return (
    <div id="projects" className="project">
      <MainLayout>
        <h1>Projects</h1>
        <div class="container">
          <hr></hr>
          <div class="row">
            <div class="col">
              <h2> Vanilla JavaScript Weather App</h2>
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
              <img src="Weather.png" alt="Weather App" width="300" />
            </div>
          </div>
          <hr></hr>
          <div class="row">
            <div class="col">
              <h2>React Weather App</h2>
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
              <img src="react.png" alt="React Weather App" width="400" />
            </div>
          </div>

          <hr></hr>
          <div class="row ">
            <div class="col">
              <h2> Refy Beauty Landing Page</h2>
              <a
                href="https://github.com/yosoytiara/React-Weather-app"
                alt="Reft Beauty app Github"
                target="_blank"
                rel="noreferrer"
              >
                <span>Code</span>
              </a>
            </div>
            <div class="col">
              <div className="refy">
                <img
                  src="refy1.gif"
                  alt="Refy Beauty Landing page"
                  width="400"
                  className="refy-img"
                />
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
      </MainLayout>
    </div>
  );
}
