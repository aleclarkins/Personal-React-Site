import React from "react";
import { Row, Col } from "react-bootstrap";
import socifyMockup from "../../images/Socify-Mockup.png";
import mlshopMockup from "../../images/mlshopMockup.png";
import aleclarkinsMockup from "../../images/aleclarkins-site.png";
import { BiLinkExternal } from "react-icons/bi";

import "./Projects.css";

function ProjectCard() {
  return (
    <section>
      <div className="projectCardsDiv">
        <Row
          style={{ padding: "35px 0", display: "flex", alignItems: "center" }}
        >
          <Col
            data-aos="fade-right"
            data-aos-offset="150"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
            style={{
              padding: "18px 0px 18px 11px",
              marginRight: "-100px",
              zIndex: "1",
            }}
          >
            <h3
              style={{ fontSize: "14px", fontWeight: "600", color: "#ECB365" }}
            >
              Featured Project
            </h3>
            <h2
              style={{ fontSize: "20px", fontWeight: "600", color: "#1A374D" }}
            >
              Socify
            </h2>
            <div style={{ marginBottom: "10px" }}>
              <a
                className="websiteLink"
                href="https://socify.vercel.app"
                target="_blank"
                style={{
                  color: "#6998AB",
                  textDecoration: "none",
                }}
              >
                <span className="websiteLink">
                  View Site <BiLinkExternal className="websiteLink" />
                </span>
              </a>
            </div>
            <p
              style={{
                padding: "20px",
                backgroundColor: "#1A374D",
                borderRadius: "10px",
              }}
            >
              A social media web app created with NextJS. It is connected to
              Google's Firebase database to store all the posts and images.
              Using NextAuth, secure third-party authentication is done through
              providers such as Google or Facebook.
              <br />
              <br />
              The goal was to create a basic social media site where users can
              share posts with their friends and also like or comment on any
              post.
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#6998AB",
                wordSpacing: "15px",
              }}
            >
              NextJS TailwindCSS NextAuth Firebase NodeJS Vercel
            </p>
          </Col>
          <Col
            data-aos="fade-left"
            data-aos-offset="0"
            data-aos-once="true"
            data-aos-anchor-placement="center-bottom"
          >
            <img
              alt="project one"
              src={socifyMockup}
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
        <Row
          style={{
            padding: "35px 0",
            display: "flex",
            alignItems: "center",
            textAlign: "right",
          }}
        >
          <Col
            data-aos="fade-right"
            data-aos-offset="0"
            data-aos-once="true"
            data-aos-anchor-placement="center-bottom"
          >
            <img
              alt="project two"
              src={mlshopMockup}
              style={{ width: "100%" }}
            />
          </Col>
          <Col
            data-aos="fade-left"
            data-aos-offset="150"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
            style={{ padding: "18px 0", marginLeft: "-100px", zIndex: "1" }}
          >
            <h3
              style={{ fontSize: "14px", fontWeight: "600", color: "#ECB365" }}
            >
              Featured Project
            </h3>
            <h2
              style={{ fontSize: "20px", fontWeight: "600", color: "#1A374D" }}
            >
              M L Shop
            </h2>
            <div style={{ marginBottom: "10px" }}>
              <a
                className="websiteLink"
                href="https://www.mlshopusa.com"
                target="_blank"
                style={{
                  color: "#6998AB",
                  textDecoration: "none",
                }}
              >
                <span className="websiteLink">
                  View Site <BiLinkExternal className="websiteLink" />
                </span>
              </a>
            </div>
            <p
              style={{
                padding: "20px",
                backgroundColor: "#1A374D",
                borderRadius: "10px",
              }}
            >
              A scalable and responsive ecommerce site built for a client who
              wanted a simple online platform to sell their products.
              Implemented Shopify's storefront API to allow the client to manage
              their orders and inventory on Shopify's admin dashboard.
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#6998AB",
                wordSpacing: "15px",
              }}
            >
              NextJS TailwindCSS StorefrontAPI(Shopify) NodeJS Vercel
            </p>
          </Col>
        </Row>
        <Row
          style={{ padding: "35px 0", display: "flex", alignItems: "center" }}
        >
          <Col
            data-aos="fade-right"
            data-aos-offset="150"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
            style={{
              padding: "18px 0px 18px 11px",
              marginRight: "-100px",
              zIndex: "1",
            }}
          >
            <h3
              style={{ fontSize: "14px", fontWeight: "600", color: "#ECB365" }}
            >
              Featured Project
            </h3>
            <h2
              style={{ fontSize: "20px", fontWeight: "600", color: "#1A374D" }}
            >
              Portfolio
            </h2>
            <div style={{ marginBottom: "10px" }}>
              <a
                className="websiteLink"
                href="https://www.aleclarkins.com"
                target="_blank"
                style={{
                  color: "#6998AB",
                  textDecoration: "none",
                }}
              >
                <span className="websiteLink">
                  View Site <BiLinkExternal className="websiteLink" />
                </span>
              </a>
            </div>
            <p
              style={{
                padding: "20px",
                backgroundColor: "#1A374D",
                borderRadius: "10px",
              }}
            >
              Yes, this website is one of my projects. A personal portfolio site
              created using ReactJS. I mainly wanted to use this site to
              showcase my skillset and projects but also give an introduction
              about myself.
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#6998AB",
                wordSpacing: "15px",
              }}
            >
              ReactJS HTML5 CSS3 ReactBootstrap NodeJS Vercel
            </p>
          </Col>
          <Col
            data-aos="fade-left"
            data-aos-offset="0"
            data-aos-once="true"
            data-aos-anchor-placement="center-bottom"
          >
            <img
              alt="project three"
              src={aleclarkinsMockup}
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
      </div>

      <div className="project-cards-responsive">
        <Row
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
        >
          <Col
            style={{
              padding: "18px 0px 18px",
              zIndex: "1",
            }}
          >
            <h3
              style={{ fontSize: "14px", fontWeight: "600", color: "#ECB365" }}
            >
              Featured Project
            </h3>
            <h2
              style={{ fontSize: "20px", fontWeight: "600", color: "#1A374D" }}
            >
              Socify
            </h2>
            <div style={{ marginBottom: "10px" }}>
              <a
                href="https://socify.vercel.app"
                target="_blank"
                style={{
                  color: "#6998AB",
                  textDecoration: "none",
                }}
              >
                View Site <BiLinkExternal />
              </a>
            </div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#6998AB",
                wordSpacing: "15px",
              }}
            >
              NextJS TailwindCSS NextAuth Firebase NodeJS Vercel
            </p>

            <img
              alt="project one responsive version"
              src={socifyMockup}
              style={{ width: "100%" }}
            />
            <p
              className="project-paragraph"
              style={{
                marginTop: "20px",
                color: "#1A374D",
                fontSize: "1.25rem",
                fontWeight: "400",
                lineHeight: "1.5",
              }}
            >
              A social media web app created with NextJS. It is connected to
              Google's Firebase database to store all the posts and images.
              Using NextAuth, secure third-party authentication is done through
              providers such as Google or Facebook.
              <br />
              <br />
              The goal was to create a basic social media site where users can
              share posts with their friends and also like or comment on any
              post.
            </p>
          </Col>
        </Row>
        <Row
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
        >
          <Col
            style={{
              padding: "18px 0px 18px",
              zIndex: "1",
            }}
          >
            <h3
              style={{ fontSize: "14px", fontWeight: "600", color: "#ECB365" }}
            >
              Featured Project
            </h3>
            <h2
              style={{ fontSize: "20px", fontWeight: "600", color: "#1A374D" }}
            >
              M L Shop
            </h2>
            <div style={{ marginBottom: "10px" }}>
              <a
                href="https://www.mlshopusa.com"
                target="_blank"
                style={{
                  color: "#6998AB",
                  textDecoration: "none",
                }}
              >
                View Site <BiLinkExternal />
              </a>
            </div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#6998AB",
                wordSpacing: "15px",
              }}
            >
              NextJS TailwindCSS StorefrontAPI(Shopify) NodeJS Vercel
            </p>

            <img
              alt="project two responsive version"
              src={mlshopMockup}
              style={{ width: "100%" }}
            />
            <p
              className="project-paragraph"
              style={{
                marginTop: "20px",
                color: "#1A374D",
                fontSize: "1.25rem",
                fontWeight: "400",
                lineHeight: "1.5",
              }}
            >
              A scalable and responsive ecommerce site built for a client who
              wanted a simple online platform to sell their products.
              Implemented Shopify's storefront API to allow the client to manage
              their orders and inventory on Shopify's admin dashboard.
            </p>
          </Col>
        </Row>
        <Row
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
        >
          <Col
            style={{
              padding: "18px 0px 18px",
              zIndex: "1",
            }}
          >
            <h3
              style={{ fontSize: "14px", fontWeight: "600", color: "#ECB365" }}
            >
              Featured Project
            </h3>
            <h2
              style={{ fontSize: "20px", fontWeight: "600", color: "#1A374D" }}
            >
              Portfolio
            </h2>
            <div style={{ marginBottom: "10px" }}>
              <a
                href="https://www.aleclarkins.com"
                target="_blank"
                style={{
                  color: "#6998AB",
                  textDecoration: "none",
                }}
              >
                View Site <BiLinkExternal />
              </a>
            </div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#6998AB",
                wordSpacing: "15px",
              }}
            >
              ReactJS HTML5 CSS3 ReactBootstrap NodeJS Vercel
            </p>

            <img
              alt="project three responsive version"
              src={aleclarkinsMockup}
              style={{ width: "100%" }}
            />
            <p
              className="project-paragraph"
              style={{
                marginTop: "20px",
                color: "#1A374D",
                fontSize: "1.25rem",
                fontWeight: "400",
                lineHeight: "1.5",
              }}
            >
              Yes, this website is one of my projects. A personal portfolio site
              created using ReactJS. I mainly wanted to use this site to
              showcase my skillset and projects but also give an introduction
              about myself.
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default ProjectCard;
