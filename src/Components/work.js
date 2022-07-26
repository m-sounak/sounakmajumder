import React, { Component } from "react";
import { Grid } from "react-mdl";
import "./work.css";

class Work extends Component {
  render() {
    return (
      <div>
        <div className="work-body" style={{ overflow: "scroll" }}>
          <Grid className="work-head">
            <div className="workcell-head">Work Experience</div>
          </Grid>{" "}
          <br />
          <br />
          <Grid className="work-grid">
            <div className="workcell-body work-banner">
              <img
                className="work-img"
                src={
                  "https://www.freepnglogos.com/uploads/microsoft-logo-hd-26.png"
                }
                alt="Microsoft"
              />
            </div>
            <div className="workcell-body work-details">
              <h2>Software Engineer Intern</h2>
              <div className="work-list">
                <div className="work-contact">
                  <a
                    href="https://www.microsoft.com/en-in"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="btnw"
                  >
                    Microsoft
                  </a>
                </div>
              </div>
              <div className="work-desc">
                <p>
                  <i className="fa fa-calendar" />
                  &ensp;May - 2022 to July - 2022 &ensp; &ensp;
                  <i className="fa fa-map-marker" />
                  &ensp;Hyderabad
                </p>
                <p>Worked on the layout feature of Office Visio Mindmap.</p>
              </div>
            </div>
          </Grid>
          <br />
          <br />
          <Grid className="work-grid">
            <div className="workcell-body work-banner">
              <img
                className="work-img"
                src={
                  "https://s3-us-west-2.amazonaws.com/cbi-image-service-prd/modified/7fd02d58-df59-4b45-9e5d-8adf9776f69d.png"
                }
                alt="Hackerearth"
              />
            </div>
            <div className="workcell-body work-details">
              <h2>Technical Content Engineer Intern</h2>
              <div className="work-list">
                <div className="work-contact">
                  <a
                    href="https://www.hackerearth.com/challenges/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="btnw"
                  >
                    Hackerearth
                  </a>
                </div>
              </div>
              <div className="work-desc">
                <p>
                  <i className="fa fa-calendar" />
                  &ensp;January - 2022 to May - 2022&ensp; &ensp;
                  <i className="fa fa-map-marker" />
                  &ensp;Bangalore
                </p>
                <p>
                  Worked on creation and testing of competitive coding
                  questions. Created about 30 new problems and tested about 100
                  existing problems.
                </p>
              </div>
            </div>
          </Grid>
          <br />
          <br />
          <Grid className="work-grid">
            <div className="workcell-body work-banner">
              <img
                className="work-img"
                src={"https://flookup.com/static/media/logo-01.48679022.png"}
                alt="Finance Lookup Advisors"
              />
            </div>
            <div className="workcell-body work-details">
              <h2>Web Development Intern</h2>
              <div className="work-list">
                <div className="work-contact">
                  <a
                    href="https://flookup.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="btnw"
                  >
                    Finance Lookup Advisors
                  </a>
                </div>
              </div>
              <div className="work-desc">
                <p>
                  <i className="fa fa-calendar" />
                  &ensp;May - 2021 to June - 2021&ensp; &ensp;
                  <i className="fa fa-map-marker" />
                  &ensp;Pune
                </p>
                <p>
                  Worked on a nodeJS based web application. It operates on PDFs
                  and converts PDFs to various forms like JPEG, Word, etc and
                  vice versa.
                </p>
              </div>
            </div>
          </Grid>
          <br />
          <br />
          <Grid className="work-grid">
            <div className="workcell-body work-banner">
              <img
                className="work-img"
                src={
                  "https://www.codingninjas.com/assets-landing/images/CNLOGO.svg"
                }
                alt="Coding Ninjas"
              />
            </div>
            <div className="workcell-body work-details">
              <h2>Problem Setter Intern</h2>
              <div className="work-list">
                <div className="work-contact">
                  <a
                    href="https://www.codingninjas.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="btnw"
                  >
                    Coding Ninjas
                  </a>
                </div>
              </div>
              <div className="work-desc">
                <p>
                  <i className="fa fa-calendar" />
                  &ensp;May - 2021 to January - 2022&ensp; &ensp;
                  <i className="fa fa-map-marker" />
                  &ensp;Gurugram
                </p>
                <p>
                  Worked on creating new data structures and algorithms coding
                  problems. Also worked on creating backend checker and runner
                  files.
                </p>
              </div>
            </div>
          </Grid>
          <br />
          <br />
          <Grid className="work-footer">
            <div>Not visible</div>
          </Grid>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Work;
