import React from "react";
import { Row, Col } from "react-bootstrap";
import socifyMockup from "../../images/Socify-Mockup.png";
import mlshopMockup from "../../images/mlshopMockup.png";
import aleclarkinsMockup from "../../images/aleclarkins-site.png";

import projectOnePhoto from "../../images/ProjectPhotoOne.png";

import "./Projects.css";

function ProjectCard() {
  return (
    <section>
      <div className="projectCardsDiv">
        <Row style={{ padding: "35px 0" }}>
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
            <p
              style={{
                padding: "20px",
                backgroundColor: "#1A374D",
                borderRadius: "10px",
              }}
            >
              A social media web app. The goal was to create a basic social
              media site where users can log in and share posts with their
              friends. Users are given the option to log in using their Facebook
              or Google account. Upon logging in, you can create your own posts
              with the option of including a photo. You can also like and
              comment on other posts.
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#6998AB",
                wordSpacing: "15px",
              }}
            >
              NextJS TailwindCSS HTML5 NodeJS Vercel
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
        <Row style={{ padding: "35px 0", textAlign: "right" }}>
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
            <p
              style={{
                padding: "20px",
                backgroundColor: "#1A374D",
                borderRadius: "10px",
              }}
            >
              An ecommerce site built for a client who wanted a simple online
              platform to sell their products. Using Shopify's storefront API,
              the client is able to manage their orders and inventory on
              Shopify's seller dashboard.
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#6998AB",
                wordSpacing: "15px",
              }}
            >
              NextJS TailwindCSS HTML5 StorefrontAPI(Shopify)
            </p>
          </Col>
        </Row>
        <Row style={{ padding: "35px 0" }}>
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
              Inventory Management Software
            </h2>
            <p
              style={{
                padding: "20px",
                backgroundColor: "#1A374D",
                borderRadius: "10px",
              }}
            >
              Worked with a team of developers to design, code, and deliver an
              inventory organization software. Built for companies to help keep
              track of online sales and manage their inventory. Software
              provided users with the ability to search, add and delete products
              from the database and more. Created in an agile environment with a
              total of three iterations over the course of three months.
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#6998AB",
                wordSpacing: "15px",
              }}
            >
              HTML5 CSS3 Bootstrap Javascript MySQL
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
              src={projectOnePhoto}
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
              Inventory Management Software
            </h2>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#6998AB",
                wordSpacing: "15px",
              }}
            >
              HTML5 CSS3 Bootstrap Javascript MySQL
            </p>

            <img
              alt="project one responsive version"
              src={projectOnePhoto}
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
              Worked with a team of developers to design, code, and deliver an
              inventory organization software. Built for companies to help keep
              track of online sales and manage their inventory. <br />
              <br />
              Software provided users with the ability to search, add and delete
              products from the database and more. Created in an agile
              environment with a total of three iterations over the course of
              three months.
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
              Inventory Management Software
            </h2>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#6998AB",
                wordSpacing: "15px",
              }}
            >
              HTML5 CSS3 Bootstrap Javascript MySQL
            </p>

            <img
              alt="project two responsive version"
              src={projectOnePhoto}
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
              Worked with a team of developers to design, code, and deliver an
              inventory organization software. Built for companies to help keep
              track of online sales and manage their inventory. <br />
              <br />
              Software provided users with the ability to search, add and delete
              products from the database and more. Created in an agile
              environment with a total of three iterations over the course of
              three months.
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
              Inventory Management Software
            </h2>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#6998AB",
                wordSpacing: "15px",
              }}
            >
              HTML5 CSS3 Bootstrap Javascript MySQL
            </p>

            <img
              alt="project three responsive version"
              src={projectOnePhoto}
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
              Worked with a team of developers to design, code, and deliver an
              inventory organization software. Built for companies to help keep
              track of online sales and manage their inventory. <br />
              <br />
              Software provided users with the ability to search, add and delete
              products from the database and more. Created in an agile
              environment with a total of three iterations over the course of
              three months.
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default ProjectCard;
