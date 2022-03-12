import React from "react";
import { Button, Container } from "react-bootstrap";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import "./ContactForm.css";

function ContactForm() {
  return (
    <div
      className="contact-section"
      style={{ backgroundColor: "#f4f9fc", padding: "0 200px" }}
      id="ContactForm"
    >
      <Container
        className="contact-container"
        style={{ width: "40%", textAlign: "center", padding: "8rem 0" }}
      >
        <h1
          data-aos="fade"
          data-aos-once="true"
          data-aos-anchor-placement="bottom-bottom"
          className="content-title"
          style={{ textAlign: "center" }}
        >
          Contact Me
          <span style={{ color: "#6998AB", fontSize: "5rem" }}>.</span>
        </h1>

        <hr
          style={{
            width: "55px",
            height: "4px",
            color: "#6998AB",
            opacity: 1,
            borderRadius: "20px",
            margin: "15px auto 20px",
          }}
        />
        <p
          data-aos="fade"
          data-aos-once="true"
          data-aos-anchor-placement="center-bottom"
          style={{
            color: "#1A374D",
            textAlign: "center",
            fontSize: "1.25rem",
            fontWeight: 400,
            lineHeight: 1.5,
          }}
        >
          Have questions or just want to say hi, feel free to drop a message in
          my inbox and I'll get back to you as soon as I can.
        </p>
        <Button
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-anchor-placement="center-bottom"
          className="btn-rise"
          href="mailto:alecsander.larkins@gmail.com?subject = Let's Talk&body = Hi, Alec!"
          style={{
            paddingTop: 3,
            paddingBottom: 3,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 10,
            borderWidth: "2px",
            backgroundColor: "transparent",
            borderColor: "#ECB365",
          }}
        >
          <span style={{ color: "#ECB365" }}>Let's Talk</span>
        </Button>
        <br />
        <div
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-offset="0"
          data-aos-anchor-placement="bottom-bottom"
          style={{ margin: "40px 0" }}
        >
          <a
            style={{ padding: "10px" }}
            target="_blank"
            href="https://www.instagram.com/aleclarkins"
          >
            <AiFillInstagram
              className="socialLinks"
              style={{ margin: "0 10px" }}
              size={25}
            />
          </a>

          <a
            style={{ padding: "10px" }}
            target="_blank"
            href="https://www.linkedin.com/in/alecsander-larkins/"
          >
            <AiFillLinkedin
              className="socialLinks"
              style={{ margin: "0 10px" }}
              size={25}
            />
          </a>
          <a
            style={{ padding: "10px" }}
            target="_blank"
            href="https://www.github.com/aleclarkins"
            className="socialLinks"
          >
            <AiFillGithub
              className="socialLinks"
              style={{ margin: "0 10px" }}
              size={25}
            />
          </a>
          <a
            style={{ padding: "10px" }}
            target="_blank"
            href="https://www.twitter.com/aleclarkins_"
            className="socialLinks"
          >
            <AiOutlineTwitter
              className="socialLinks"
              style={{ margin: "0 10px" }}
              size={25}
            />
          </a>
        </div>
      </Container>
    </div>
  );
}

export default ContactForm;
