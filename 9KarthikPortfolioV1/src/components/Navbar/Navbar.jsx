import React from "react";
import {
  Navbar as BootstrapNavbar,
  Nav,
  Container,
  Button,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiFillStar,
  AiOutlineCode,
} from "react-icons/ai";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <BootstrapNavbar
      expand="lg"
      className={styles.navbar}
      variant="dark"
      fixed="top"
    >
      <Container>
        {/* Brand/Logo */}
        <BootstrapNavbar.Brand as={Link} to="/" className={styles.navbarBrand}>
          <AiOutlineCode className={styles.brandIcon} />
          <span className={styles.brandText}>{"➜⟦KV⟧"}</span>
        </BootstrapNavbar.Brand>

        {/* Mobile Toggle */}
        <BootstrapNavbar.Toggle
          aria-controls="basic-navbar-nav"
          className={styles.navbarToggle}
        />

        {/* Collapsible Navigation */}
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Home */}
            <Nav.Link
              as={Link}
              to="/"
              className={`${styles.navLink} ${
                isActive("/") ? styles.active : ""
              }`}
            >
              <AiOutlineHome className={styles.navIcon} />
              <span className={styles.navText}>Home</span>
            </Nav.Link>

            {/* About */}
            <Nav.Link
              as={Link}
              to="/about"
              className={`${styles.navLink} ${
                isActive("/about") ? styles.active : ""
              }`}
            >
              <AiOutlineUser className={styles.navIcon} />
              <span className={styles.navText}>About</span>
            </Nav.Link>

            {/* Projects */}
            <Nav.Link
              as={Link}
              to="/projects"
              className={`${styles.navLink} ${
                isActive("/projects") ? styles.active : ""
              }`}
            >
              <AiOutlineFundProjectionScreen className={styles.navIcon} />
              <span className={styles.navText}>Projects</span>
            </Nav.Link>

            {/* Blog */}
            <Nav.Link
              as={Link}
              to="/blog"
              className={`${styles.navLink} ${
                isActive("/blog") ? styles.active : ""
              }`}
            >
              <ImBlog className={styles.navIcon} />
              <span className={styles.navText}>Blog</span>
            </Nav.Link>

            {/* GitHub Stats */}
            <Nav.Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navLink}
            >
              <CgGitFork className={styles.navIcon} />
              <AiFillStar className={styles.navIcon} />
              <span className={styles.navText}>GitHub</span>
            </Nav.Link>

            {/* Resume Button */}
            <Nav.Item className={styles.resumeButtonContainer}>
              <Button
                variant="outline-light"
                className={styles.resumeButton}
                onClick={() => window.open("/resume/resume.pdf", "_blank")}
              >
                <CgFileDocument className={styles.navIcon} />
                <span className={styles.navText}>Resume</span>
              </Button>
            </Nav.Item>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};
