import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import devPic from "../../images/ProfilePicOverlay.png";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "./About.css";

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
                Hi there! I'm a <span className="span-text">Frontend Developer</span> at <span className="span-text">Trusted Tech Team</span>, based in Irvine, California. My journey began with a BS in Computer Science from California State University, Fullerton, and has since led me to specialize in creating custom web solutions that prioritize seamless user experiences and scalability.
                <br></br>
                <br></br>
                I'm proficient in various technologies, including JavaScript, HTML, CSS, Liquid, jQuery, Bootstrap, Node.js, and GitHub, with a particular focus on Shopify Plus, e-commerce integrations, and innovative web app developments.
                <br></br>
                <br></br>
                Driven by a passion for the digital realm, I am always eager to dive into groundbreaking projects and push the boundaries of web development. 
              </p>
            </Col>
            <Col md={4} className="about-content-right">
              <img
                alt="portrait photo of Alec Larkins"
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
