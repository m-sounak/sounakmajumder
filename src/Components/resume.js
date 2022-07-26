import React, { Component } from "react";
import { Grid } from "react-mdl";
import "./resume.css";

class Resume extends Component {
  render() {
    return (
      <div>
        <div className="contact-body" style={{ overflow: "scroll" }}>
          <Grid className="resume-grid" style={{ marginBottom: "20px" }}>
            <h2>Resume</h2>
            <p>
              Hi, I am Sounak Majumder. I am a 4th year B.Tech student in
              Computer Science and Technology from Indian Institute of
              Engineering Science and Technology, Shibpur. I love competitive
              coding. I am currently Candidate Master at Codeforces and 5 star
              coder at Codechef. I am also a keen student of Machine Learning.
              My keen interest lies in full stack web developement and front end
              android developement.
              <br />
              <br />
              <a
                href="https://drive.google.com/file/d/1FVMB7nOBe4ro2xj1WgH4ffv3G5a-W9FO/view?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
                className="btn anchor"
              >
                <svg width="277" height="62">
                  <defs>
                    <linearGradient id="grad1">
                      <stop offset="0%" stop-color="#be1394" />
                      <stop offset="100%" stop-color="#E178ED" />
                    </linearGradient>
                  </defs>
                  <rect
                    x="5"
                    y="5"
                    rx="25"
                    fill="none"
                    stroke="url(#grad1)"
                    width="266"
                    height="50"
                  ></rect>
                </svg>
                <span>
                  <i className="fa fa-address-card" aria-hidden="true" /> Check
                  my resume
                </span>
              </a>
              <br />
              <br />
              Below are some of my skills
            </p>

            <div className="skills">
              <div className="resume-list-item">
                <i className="fa fa-terminal" aria-hidden="true" /> Python
                <span className="fillCircle">
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle done"></i>
                </span>
              </div>

              <div className="resume-list-item">
                <i className="fa fa-terminal" aria-hidden="true" /> C++{" "}
                <span className="holder">abc</span>
                <span className="fillCircle">
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle done"></i>
                </span>
              </div>

              <div className="resume-list-item">
                <i className="fa fa-terminal" aria-hidden="true" /> JAVA{" "}
                <span className="holder">ab</span>
                <span className="fillCircle">
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle undone"></i>
                </span>
              </div>

              <div className="resume-list-item">
                <i className="fa fa-terminal" aria-hidden="true" /> Typescript{" "}
                <span className="holder">ab</span>
                <span className="fillCircle">
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle undone"></i>
                  <i className="fa fa-circle undone"></i>
                </span>
              </div>

              <div className="resume-list-item">
                <i className="fa fa-terminal" aria-hidden="true" /> C#{" "}
                <span className="holder">ab</span>
                <span className="fillCircle">
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle undone"></i>
                  <i className="fa fa-circle undone"></i>
                  <i className="fa fa-circle undone"></i>
                </span>
              </div>

              <div className="resume-list-item">
                <i className="fa fa-terminal" aria-hidden="true" /> HTML, CSS,
                JavaScript
                <span className="fillCircle">
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle undone"></i>
                </span>
              </div>

              <div className="resume-list-item">
                <i className="fa fa-terminal" aria-hidden="true" /> ReactJS
                <span className="fillCircle">
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle undone"></i>
                </span>
              </div>

              <div className="resume-list-item">
                <i className="fa fa-terminal" aria-hidden="true" /> Django
                <span className="fillCircle">
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle undone"></i>
                  <i className="fa fa-circle undone"></i>
                </span>
              </div>

              <div className="resume-list-item">
                <i className="fa fa-terminal" aria-hidden="true" /> nodeJS,
                express
                <span className="fillCircle">
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle undone"></i>
                  <i className="fa fa-circle undone"></i>
                </span>
              </div>

              <div className="resume-list-item">
                <i className="fa fa-terminal" aria-hidden="true" /> PHP{" "}
                <span className="holder">abc</span>
                <span className="fillCircle">
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle undone"></i>
                  <i className="fa fa-circle undone"></i>
                </span>
              </div>

              <div className="resume-list-item">
                <i className="fa fa-terminal" aria-hidden="true" /> Tensorflow,
                openCV
                <span className="fillCircle">
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle done"></i>
                  <i className="fa fa-circle undone"></i>
                  <i className="fa fa-circle undone"></i>
                </span>
              </div>
            </div>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Resume;
