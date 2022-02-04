import React from "react";
import resume from "../../images/ajlarkins-resume.png";
import { Container, Button } from "react-bootstrap";

function Resume() {
  return (
    <div
      style={{
        backgroundColor: "#f4f9fc",
      }}
      id="Resume"
    >
      <Container
        style={{
          paddingTop: "50px",
          //   display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1 className="content-title" style={{ textAlign: "center" }}>
          Resume<span style={{ color: "#6998AB", fontSize: "5rem" }}>.</span>
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
        <Button
          style={{
            boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.4)",
            borderWidth: 0,
            backgroundColor: "#ECB365",
          }}
        >
          Download Resume
        </Button>
      </Container>
      <Container
        style={{
          padding: "50px 0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            width: "65rem",
            boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.4)",
          }}
          src={resume}
        ></img>
      </Container>
    </div>
  );
}

export default Resume;
