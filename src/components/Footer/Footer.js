import React from "react";
import Container from "react-bootstrap";

function Footer() {
  return (
    <div style={{ backgroundColor: "#1A374D" }}>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "1rem",
        }}
      >
        <p style={{ color: "#fff" }}>Designed & Developed by Alec Larkins</p>
      </Container>
    </div>
  );
}

export default Footer;
