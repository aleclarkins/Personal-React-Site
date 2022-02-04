import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import devPic from "../../images/ProfilePicOverlay.png";
// import Navbar from "react-bootstrap/Navbar";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import { BsFillDiamondFill } from "react-icons/bs";

import {
  DiJavascript,
  DiJavascript1,
  DiCss3,
  DiReact,
  DiBootstrap,
  DiJqueryLogo,
  DiNodejsSmall,
  DiMysql,
  DiMongodb,
  DiGit,
  DiVisualstudio,
  DiPhotoshop,
  DiIllustrator,
} from "react-icons/di";
import { SiCplusplus } from "react-icons/si";

import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  // function tabClick(object) {
  //   console.log(object);
  // }
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="about">
      <Container fluid className="about-section-main">
        <Container className="about-content">
          <Row className="about-row">
            <Col md={8} className="about-content-left">
              <h1
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-once="true"
                data-aos-anchor-placement="bottom-bottom"
                className="content-title"
              >
                About Me
                <span style={{ color: "#6998AB", fontSize: "5rem" }}>.</span>
              </h1>
              {/* <p className="content-title-description">
                Allow me to introduce myself.
              </p> */}
              <hr
                style={{
                  width: "55px",
                  height: "4px",
                  color: "#6998AB",
                  opacity: 1,
                  borderRadius: "20px",
                }}
              />
              <p
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-delay="500"
                data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
                className="aboutParagraph"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  lineHeight: 1.5,
                }}
              >
                Hello, my name is
                <span className="span-text"> Alec</span> and I'm from
                <span className="span-text"> Anaheim Hills, CA</span>. I started
                developing a passion for technology in middle school when I took
                my first technology class. In high school, I took programming
                and game development classes. Upon reaching college, I made the
                decision to major in
                <span className="span-text"> Computer Science</span> and I'm so
                glad I did.
                <br />
                <br />
                Throughout my years in college, I learned many skills. Although
                there is certainly more to learn, my passion for developing new
                skills is what drives me to continue learning.
                <br />
                <br />
                Outside of the coding world, here are a few things I enjoy
                doing!
                <br />
                <br />
                <ul>
                  <li style={{ listStyle: "none" }}>
                    <BsFillDiamondFill style={{ width: "15px" }} /> Playing
                    guitar/drums
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <BsFillDiamondFill style={{ width: "15px" }} /> Playing
                    video games
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <BsFillDiamondFill style={{ width: "15px" }} /> Eating good
                    food
                  </li>
                </ul>
              </p>
            </Col>
            <Col md={4} className="about-content-right">
              <img
                alt="photo-of-Alec"
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
                src={devPic}
                style={{
                  width: 350,
                  boxShadow: "0px 10px 10px rgb(0 0 0 / 40%)",
                }}
              ></img>
            </Col>
          </Row>
          <section id="Skillset">
            <Row className="skillsRow">
              <Col className="skillsTabs">
                <div className="content">
                  <h1
                    data-aos="flip-up"
                    data-aos-offset="0"
                    data-aos-once="true"
                    data-aos-anchor-placement="bottom-bottom"
                    className="content-title"
                    style={{ textAlign: "center" }}
                  >
                    Skillset
                    <span style={{ color: "#6998AB", fontSize: "5rem" }}>
                      .
                    </span>
                  </h1>
                  <hr
                    style={{
                      width: "55px",
                      height: "4px",
                      margin: "15px auto 20px",
                      color: "#6998AB",
                      opacity: 1,
                      borderRadius: "20px",
                    }}
                  />
                  <Tabs
                    data-aos="slide-up"
                    data-aos-offset="25"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-bottom"
                    defaultActiveKey="frontEnd"
                    className="mb-3 navigation-tabs"
                  >
                    <Tab
                      className="frontEndTab"
                      eventKey="frontEnd"
                      title="Front-end"
                    >
                      <Row
                        style={{
                          justifyContent: "center",
                        }}
                      >
                        <Col xs={4} md={2} lg={2} className="tech-icon">
                          <DiJavascript1 style={{ color: "#fff" }} />
                          <h1 style={{ fontSize: 12, color: "#fff" }}>
                            Javascript
                          </h1>
                        </Col>
                        <Col xs={4} md={2} lg={2} className="tech-icon">
                          <DiJavascript style={{ color: "#fff" }} />
                          <h1 style={{ fontSize: 12, color: "#fff" }}>HTML5</h1>
                        </Col>
                        <Col xs={4} md={2} lg={2} className="tech-icon">
                          <DiCss3 style={{ color: "#fff" }} />
                          <h1 style={{ fontSize: 12, color: "#fff" }}>CSS3</h1>
                        </Col>
                        <Col xs={4} md={2} lg={2} className="tech-icon">
                          <DiReact style={{ color: "#fff" }} />
                          <h1 style={{ fontSize: 12, color: "#fff" }}>
                            ReactJS
                          </h1>
                        </Col>
                        <Col xs={4} md={2} lg={2} className="tech-icon">
                          <DiBootstrap style={{ color: "#fff" }} />
                          <h1 style={{ fontSize: 12, color: "#fff" }}>
                            Bootstrap
                          </h1>
                        </Col>
                        <Col xs={4} md={2} lg={2} className="tech-icon">
                          <DiJqueryLogo style={{ color: "#fff" }} />
                          <h1 style={{ fontSize: 12, color: "#fff" }}>
                            jQuery
                          </h1>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="backEnd" title="Back-end">
                      <Row
                        style={{
                          justifyContent: "center",
                        }}
                      >
                        <Col xs={4} md={2} lg={2} className="tech-icon">
                          <SiCplusplus style={{ color: "#fff" }} />
                          <h1 style={{ fontSize: 12, color: "#fff" }}>C++</h1>
                        </Col>
                        <Col xs={4} md={2} lg={2} className="tech-icon">
                          <DiNodejsSmall style={{ color: "#fff" }} />
                          <h1 style={{ fontSize: 12, color: "#fff" }}>
                            NodeJS
                          </h1>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="database" title="Database">
                      <Row
                        style={{
                          justifyContent: "center",
                        }}
                      >
                        <Col xs={4} md={2} lg={2} className="tech-icon">
                          <DiMysql style={{ color: "#fff" }} />
                          <h1 style={{ fontSize: 12, color: "#fff" }}>MySQL</h1>
                        </Col>
                        <Col xs={4} md={2} lg={2} className="tech-icon">
                          <DiMongodb style={{ color: "#fff" }} />
                          <h1 style={{ fontSize: 12, color: "#fff" }}>
                            MongoDB
                          </h1>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="development" title="Development">
                      <Row
                        style={{
                          justifyContent: "center",
                        }}
                      >
                        <Col xs={4} md={2} lg={2} className="tech-icon">
                          <DiGit style={{ color: "#fff" }} />
                          <h1 style={{ fontSize: 12, color: "#fff" }}>Git</h1>
                        </Col>
                        <Col xs={4} md={2} lg={2} className="tech-icon">
                          <DiVisualstudio style={{ color: "#fff" }} />
                          <h1 style={{ fontSize: 12, color: "#fff" }}>
                            VS Code
                          </h1>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="design" title="Design">
                      <Row
                        style={{
                          justifyContent: "center",
                        }}
                      >
                        <Col xs={4} md={2} lg={2} className="tech-icon">
                          <DiIllustrator style={{ color: "#fff" }} />
                          <h1 style={{ fontSize: 12, color: "#fff" }}>
                            Illustrator
                          </h1>
                        </Col>
                        <Col xs={4} md={2} lg={2} className="tech-icon">
                          <DiPhotoshop style={{ color: "#fff" }} />
                          <h1 style={{ fontSize: 12, color: "#fff" }}>
                            Photoshop
                          </h1>
                        </Col>
                      </Row>
                    </Tab>
                  </Tabs>
                </div>
              </Col>
            </Row>
            <Row className="skills-row-responsive">
              <Col className="skillsTabs">
                <div className="content">
                  <h1
                    data-aos="flip-up"
                    data-aos-offset="0"
                    data-aos-once="true"
                    data-aos-anchor-placement="bottom-bottom"
                    className="content-title"
                    style={{ margin: "0 10px", textAlign: "center" }}
                  >
                    Skillset
                    <span style={{ color: "#6998AB", fontSize: "5rem" }}>
                      .
                    </span>
                  </h1>
                  <hr
                    style={{
                      width: "55px",
                      height: "4px",
                      margin: "15px auto 20px",
                      color: "#6998AB",
                      opacity: 1,
                      borderRadius: "20px",
                    }}
                  />
                  <Container
                    className="skills-container-responsive"
                    style={{
                      backgroundColor: "#406882",
                      borderRadius: "10px",
                      padding: "7px 7px",
                    }}
                  >
                    <Row
                      data-aos="slide-up"
                      data-aos-offset="25"
                      data-aos-once="true"
                      data-aos-anchor-placement="top-bottom"
                      style={{ justifyContent: "center" }}
                    >
                      <Col xs={3} md={2} lg={2} className="tech-icon">
                        <DiJavascript1 style={{ color: "#fff" }} />
                        <h1 style={{ fontSize: 12, color: "#fff" }}>
                          Javascript
                        </h1>
                      </Col>
                      <Col xs={3} md={2} lg={2} className="tech-icon">
                        <DiJavascript style={{ color: "#fff" }} />
                        <h1 style={{ fontSize: 12, color: "#fff" }}>HTML5</h1>
                      </Col>
                      <Col xs={3} md={2} lg={2} className="tech-icon">
                        <DiCss3 style={{ color: "#fff" }} />
                        <h1 style={{ fontSize: 12, color: "#fff" }}>CSS3</h1>
                      </Col>
                      <Col xs={3} md={2} lg={2} className="tech-icon">
                        <DiReact style={{ color: "#fff" }} />
                        <h1 style={{ fontSize: 12, color: "#fff" }}>ReactJS</h1>
                      </Col>
                      <Col xs={3} md={2} lg={2} className="tech-icon">
                        <DiBootstrap style={{ color: "#fff" }} />
                        <h1 style={{ fontSize: 12, color: "#fff" }}>
                          Bootstrap
                        </h1>
                      </Col>
                      <Col xs={3} md={2} lg={2} className="tech-icon">
                        <DiJqueryLogo style={{ color: "#fff" }} />
                        <h1 style={{ fontSize: 12, color: "#fff" }}>jQuery</h1>
                      </Col>
                      <Col xs={3} md={2} lg={2} className="tech-icon">
                        <SiCplusplus style={{ color: "#fff" }} />
                        <h1 style={{ fontSize: 12, color: "#fff" }}>C++</h1>
                      </Col>
                      <Col xs={3} md={2} lg={2} className="tech-icon">
                        <DiNodejsSmall style={{ color: "#fff" }} />
                        <h1 style={{ fontSize: 12, color: "#fff" }}>NodeJS</h1>
                      </Col>
                      <Col xs={3} md={2} lg={2} className="tech-icon">
                        <DiMysql style={{ color: "#fff" }} />
                        <h1 style={{ fontSize: 12, color: "#fff" }}>MySQL</h1>
                      </Col>
                      <Col xs={3} md={2} lg={2} className="tech-icon">
                        <DiMongodb style={{ color: "#fff" }} />
                        <h1 style={{ fontSize: 12, color: "#fff" }}>MongoDB</h1>
                      </Col>
                      <Col xs={3} md={2} lg={2} className="tech-icon">
                        <DiGit style={{ color: "#fff" }} />
                        <h1 style={{ fontSize: 12, color: "#fff" }}>Git</h1>
                      </Col>
                      <Col xs={3} md={2} lg={2} className="tech-icon">
                        <DiVisualstudio style={{ color: "#fff" }} />
                        <h1 style={{ fontSize: 12, color: "#fff" }}>VS Code</h1>
                      </Col>
                      <Col xs={3} md={2} lg={2} className="tech-icon">
                        <DiIllustrator style={{ color: "#fff" }} />
                        <h1 style={{ fontSize: 12, color: "#fff" }}>
                          Illustrator
                        </h1>
                      </Col>
                      <Col xs={3} md={2} lg={2} className="tech-icon">
                        <DiPhotoshop style={{ color: "#fff" }} />
                        <h1 style={{ fontSize: 12, color: "#fff" }}>
                          Photoshop
                        </h1>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </Container>
    </section>
  );
}

export default About;
