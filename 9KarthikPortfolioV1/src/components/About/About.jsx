import React from "react";
import GitHubCalendar from "react-github-calendar";
import Tilt from "react-parallax-tilt";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiPython, SiJavascript } from "react-icons/si";
import { Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <div className={styles.sectionContent}>
          <div className={styles.introContainer}>
            <div className={styles.imageContent}>
              <Tilt>
                <img
                  src="/about_MyPhoto.png"
                  alt="Karthik Vengatesan"
                  className={styles.avatar}
                />
              </Tilt>
            </div>

            <div className={styles.textContent}>
              <h1 className={styles.aboutTitle}>Know Who I'M</h1>

              <p className={styles.aboutText}>
                Hi Everyone, I am{" "}
                <strong className={styles.highlight}>Karthik Vengatesan</strong>{" "}
                from Chennai, India. Currently working at the{" "}
                <strong className={styles.highlight}>University of Hull</strong>
                , I hold an Integrated MSc in{" "}
                <strong className={styles.highlight}>
                  Energy Engineering & Management
                </strong>{" "}
                from Instituto Superior Técnico, Portugal.
              </p>

              <p className={styles.aboutText}>
                My professional journey spans{" "}
                <strong className={styles.highlight}>Industrial IoT</strong>,{" "}
                <strong className={styles.highlight}>Data Engineering</strong>,{" "}
                <strong className={styles.highlight}>
                  System Integration and Design
                </strong>
                , and{" "}
                <strong className={styles.highlight}>
                  Applied Data Science
                </strong>
                . I've contributed to projects involving student insight and
                engagement monitoring, energy management systems, and remote
                asset monitoring across leading organizations like{" "}
                <strong className={styles.highlight}>University of Hull</strong>
                , <strong className={styles.highlight}>Saint-Gobain</strong>,
                and{" "}
                <strong className={styles.highlight}>
                  Tata Consultancy Services
                </strong>
                .
              </p>

              <p className={styles.aboutText}>
                I'm fluent in <strong className={styles.highlight}>SQL</strong>,{" "}
                <strong className={styles.highlight}>Python</strong>, and{" "}
                <strong className={styles.highlight}>JavaScript</strong>, and I
                love working with tools like{" "}
                <strong className={styles.highlight}>Numpy</strong>,{" "}
                <strong className={styles.highlight}>Pandas</strong>,{" "}
                <strong className={styles.highlight}>Plotly</strong>, and{" "}
                <strong className={styles.highlight}>React.js</strong> to bring
                data to life. I'm also actively exploring{" "}
                <strong className={styles.highlight}>cloud technologies</strong>{" "}
                such as <strong className={styles.highlight}>Azure</strong> to
                design, scale, and deploy efficient data solutions.
              </p>

              <p className={styles.aboutText}>
                My interests span across{" "}
                <strong className={styles.highlight}>data analysis</strong>,{" "}
                <strong className={styles.highlight}>
                  dashboard development
                </strong>
                ,{" "}
                <strong className={styles.highlight}>
                  IoT full-stack applications
                </strong>
                , and enabling{" "}
                <strong className={styles.highlight}>
                  applied data science practices
                </strong>
                . Whenever possible, I channel my passion into crafting products
                that bridge data with real-world impact. 🤷‍♂️
              </p>

              <h2 className={styles.subheading}>
                Apart from coding, some other activities that I love to do!
              </h2>
              <ul className={styles.bulletList}>
                <li>Playing Badminton & Swimming</li>
                <li>Writing Tech Blogs</li>
                <li>Travelling</li>
              </ul>

              <blockquote className={styles.quote}>
                <p>
                  "Without your involvement you can't succeed, With your
                  involvement you can't fail!"
                </p>
                <cite>— A.P.J Abdul Kalam</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Activity Section */}
      <div className={styles.middleSection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>GitHub Activity</h2>
          <div className={styles.githubContainer}>
            <div className={styles.calendarContainer}>
              <GitHubCalendar
                username="datacraftconnect"
                colorScheme="dark"
                fontSize={12}
                blockSize={12}
                blockMargin={4}
              />
            </div>
            <div className={styles.statsContainer}>
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=datacraftconnect&layout=compact&theme=dark"
                alt="Top Languages"
                className={styles.githubStat}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className={styles.followSection}>
        <div className={styles.sectionContent}>
          <h3 className={styles.sectionTitle}>Tech Stack</h3>
          <div className={styles.techGrid}>
            <div className={styles.techIcon}>
              <FaReact size={50} />
            </div>
            <div className={styles.techIcon}>
              <SiPython size={50} />
            </div>
            <div className={styles.techIcon}>
              <SiJavascript size={50} />
            </div>
            <div className={styles.techIcon}>
              <FaNodeJs size={50} />
            </div>

            <div className={styles.techIcon}>
              <FaGithub size={50} />
            </div>
          </div>
        </div>
      </div>

      {/* Digital CV Section */}
      {/*      
      <div className={styles.resumeSection}>
        <div className={styles.sectionContent}>
          <Button
            variant="outline-light"
            className={styles.downloadButton}
            onClick={() => window.open("/resume/resume.pdf", "_blank")}
          >
            <span>Digital CV</span> <AiOutlineDownload />
          </Button>
        </div>
      </div>
*/}
    </div>
  );
};

export default About;
