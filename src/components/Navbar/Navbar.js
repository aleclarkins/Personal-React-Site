import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import logo from "../../images/AL-Logo.png";
import { Container, Button } from "react-bootstrap";
import { GoMarkGithub } from "react-icons/go";
import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { RiPagesLine, RiMessage2Line } from "react-icons/ri";
import { BsCardList } from "react-icons/bs";

function _Navbar() {
  const navbarLogo = "<AlecLarkins />";

  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  const [expand, setExpand] = useState(false);

  window.addEventListener("scroll", scrollHandler);

  return (
    <div className="nav-div">
      <Navbar
        className={navColour ? "sticky" : "navbar"}
        fixed="top"
        // bg="transparent"
        variant="light"
        expand="lg"
        expanded={expand}
      >
        <Container fluid>
          <Navbar.Brand
            onClick={() => setExpand(false)}
            className="navBrand"
            href="#home"
          >
            <img className="webLogo" src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => {
              setExpand(expand ? false : "expanded");
            }}
          />
          <Navbar.Collapse>
            <Nav className="ml-auto">
              <Nav.Link
                onClick={() => setExpand(false)}
                activeClassName="activeLink"
                className="navItem"
                href="#home"
              >
                <AiOutlineHome size={20} style={{ paddingBottom: 4 }} />
                <span style={{ marginLeft: 4 }}>Home</span>
              </Nav.Link>

              <Nav.Link
                onClick={() => setExpand(false)}
                className="navItem"
                href="#about"
              >
                <BsPerson size={20} style={{ paddingBottom: 4 }} />
                <span style={{ marginLeft: 4 }}>About</span>
              </Nav.Link>
              <Nav.Link
                onClick={() => setExpand(false)}
                className="navItem"
                href="#Skillset"
              >
                <BsCardList size={20} style={{ paddingBottom: 4 }} />
                <span style={{ marginLeft: 4 }}>Skillset</span>
              </Nav.Link>
              <Nav.Link
                onClick={() => setExpand(false)}
                className="navItem"
                href="#Projects"
              >
                <AiOutlineProject size={20} style={{ paddingBottom: 4 }} />
                <span style={{ marginLeft: 4 }}>Projects</span>
              </Nav.Link>
              <Nav.Link
                onClick={() => setExpand(false)}
                className="navItem"
                href="#ContactForm"
              >
                <RiMessage2Line size={20} style={{ paddingBottom: 4 }} />
                <span style={{ marginLeft: 4 }}>Contact</span>
              </Nav.Link>
              <Nav.Link
                onClick={() => setExpand(false)}
                className="navItem"
                href="#ContactForm"
              >
                <Button
                  className="btn-rise"
                  href="https://github.com"
                  style={{
                    marginTop: -3,
                    paddingTop: 3,
                    paddingBottom: 3,
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderRadius: 10,
                    backgroundColor: "#ECB365",
                    borderColor: "#ECB365",
                  }}
                >
                  <GoMarkGithub size={20} style={{ paddingBottom: 4 }} />
                  <span className="githubButton"> Github</span>
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default _Navbar;
