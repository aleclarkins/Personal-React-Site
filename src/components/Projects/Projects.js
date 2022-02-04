import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCard.js";
import "./Projects.css";

function Project() {
  return (
    <div
      className="project-div"
      style={{ backgroundColor: "#f4f9fc" }}
      id="Projects"
    >
      <Container style={{ padding: "200px 150px 50px" }}>
        <h1
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-anchor-placement="bottom-bottom"
          className="content-title"
        >
          Projects
          <span style={{ color: "#6998AB", fontSize: "5rem" }}>.</span>
        </h1>
        <hr
          style={{
            width: "55px",
            height: "4px",
            margin: "15px 0 20px",
            color: "#6998AB",
            opacity: 1,
            borderRadius: "20px",
          }}
        />
        <ProjectCard />
      </Container>
    </div>
  );
}

export default Project;
