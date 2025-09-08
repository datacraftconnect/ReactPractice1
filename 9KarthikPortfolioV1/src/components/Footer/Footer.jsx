import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillGithub,
  AiFillLinkedin
} from "react-icons/ai";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className={styles.footerRow}>
          {/* Left Column - Designer Text */}
          <Col md={4} className={styles.footerCol}>
            <p className={styles.footerText}>
              Designed and Developed by Karthik Vengatesan
            </p>
          </Col>

          {/* Center Column - Copyright */}
          <Col md={4} className={styles.footerCol}>
            <p className={styles.footerText}>
              Copyright © 2025 KV
            </p>
          </Col>

          {/* Right Column - Social Media Icons */}
          <Col md={4} className={styles.footerCol}>
            <div className={styles.socialIcons}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Instagram"
              >
                <AiOutlineInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="LinkedIn"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Twitter"
              >
                <AiOutlineTwitter />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
