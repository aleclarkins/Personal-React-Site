import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typerwriter from "./Typewriter";
import { GoMarkGithub } from "react-icons/go";
import astronautPic from "../../images/AstronautCartoon.png";
import astronautPicMobile from "../../images/AstronautWebsiteImage(Mobile).png";
import "./Home.css";

import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="home">
      <Container fluid className="home-section-main">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-content-left">
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="home-title"
                style={{
                  backgroundColor: "#1A374D",
                  borderRadius: "20px",
                  boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.4)",
                  padding: "2rem 0",
                  marginLeft: "6rem",
                  marginRight: "-80px",
                }}
              >
                <h1>Hi, I'm Alec Larkins{GoMarkGithub}</h1>
                <div className="typewriter-div">
                  <Typerwriter />
                </div>
              </div>
            </Col>
            <Col md={6} className="home-content-right">
              <img
                alt="astronaut"
                src={astronautPic}
                className="astronautPic"
              />
              <img
                alt="astronaut mobile"
                src={astronautPicMobile}
                className="astronautPicMobile"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
