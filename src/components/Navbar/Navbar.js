import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container, Button } from "react-bootstrap";
import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { BsPerson, BsCardList } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { RiMessage2Line } from "react-icons/ri";
import logo from "../../images/AL-Logo.png";
import "./Navbar.css";

function NavBar() {
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
        variant="light"
        expand="lg"
        expanded={expand}
      >
        <Container fluid>
          <Navbar.Brand
            onClick={() => setExpand(false)}
            className="nav-brand"
            href="#home"
          >
            <img alt="website logo" className="web-logo" src={logo} />
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
                activeClassName="active-link"
                className="navbar-item"
                href="#home"
              >
                <AiOutlineHome size={20} style={{ paddingBottom: 4 }} />
                <span style={{ marginLeft: 4 }}>Home</span>
              </Nav.Link>

              <Nav.Link
                onClick={() => setExpand(false)}
                className="navbar-item"
                href="#about"
              >
                <BsPerson size={20} style={{ paddingBottom: 4 }} />
                <span style={{ marginLeft: 4 }}>About</span>
              </Nav.Link>
              <Nav.Link
                onClick={() => setExpand(false)}
                className="navbar-item"
                href="#Skillset"
              >
                <BsCardList size={20} style={{ paddingBottom: 4 }} />
                <span style={{ marginLeft: 4 }}>Skillset</span>
              </Nav.Link>
              <Nav.Link
                onClick={() => setExpand(false)}
                className="navbar-item"
                href="#Projects"
              >
                <AiOutlineProject size={20} style={{ paddingBottom: 4 }} />
                <span style={{ marginLeft: 4 }}>Projects</span>
              </Nav.Link>
              <Nav.Link
                onClick={() => setExpand(false)}
                className="navbar-item"
                href="#ContactForm"
              >
                <RiMessage2Line size={20} style={{ paddingBottom: 4 }} />
                <span style={{ marginLeft: 4 }}>Contact</span>
              </Nav.Link>
              <Nav.Link
                onClick={() => setExpand(false)}
                className="navbar-item"
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
                  <span className="nav-button"> Github</span>
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
