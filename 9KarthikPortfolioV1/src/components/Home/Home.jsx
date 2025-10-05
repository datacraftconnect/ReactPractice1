import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Top Section */}
      <div className={`container ${styles.topSection}`}>
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6 col-12 text-center">
            <Tilt>
              <img
                src="/Home_MyAvatar.png"
                alt="Avatar"
                className={styles.avatar}
              />
            </Tilt>
          </div>
          <div className="col-lg-7 col-md-6 col-12 text-center text-lg-end ms-lg-auto">
            <div className={styles.introText}>
              <p className={styles.line1}>
                <span className={styles.highlight}>Hi There!</span> 👋🏻
              </p>
              <h1 className={styles.name}>
                I'M <span className={styles.highlight}>KARTHIK VENGATESAN</span>
              </h1>
              <TypeAnimation
                sequence={[
                  "Data Analyst/Engineer",
                  2000,
                  "Applied Data Science Enabler",
                  2000,
                  "IoT Full Stack Developer",
                  2000,
                ]}
                wrapper="span"
                speed={300}
                deletionSpeed={200}
                className={styles.typewriter}
                repeat={Infinity}
                preRenderFirstString={true}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section - About Me */}
      <div className={`container ${styles.middleSection}`}>
        <div className="text-center">
          <h2 className={styles.aboutTitle}>LET ME INTRODUCE MYSELF</h2>
          <p className={styles.aboutText}>
            I'm passionate about building solutions at the intersection of{" "}
            <strong className={styles.highlight}>Data Engineering</strong>,{" "}
            <strong className={styles.highlight}>Data Science</strong>, and the{" "}
            <strong className={styles.highlight}>
              Internet of Things (IoT)
            </strong>
            . My journey began with{" "}
            <strong className={styles.highlight}>scripting</strong> and{" "}
            <strong className={styles.highlight}>problem-solving</strong>, and
            over time, I've developed a strong foundation in{" "}
            <strong className={styles.highlight}>data pipelines</strong>,{" "}
            <strong className={styles.highlight}>analytics</strong>, and{" "}
            <strong className={styles.highlight}>applied data science</strong>{" "}
            to create meaningful, data-driven outcomes.
          </p>
          <p className={styles.aboutText}>
            I'm fluent in <strong className={styles.highlight}>SQL</strong>,{" "}
            <strong className={styles.highlight}>Python</strong>, and{" "}
            <strong className={styles.highlight}>JavaScript</strong>, and I love
            working with tools like{" "}
            <strong className={styles.highlight}>Numpy</strong>,{" "}
            <strong className={styles.highlight}>Pandas</strong>,{" "}
            <strong className={styles.highlight}>Plotly</strong>, and{" "}
            <strong className={styles.highlight}>React.js</strong> to bring data
            to life. I'm also actively exploring{" "}
            <strong className={styles.highlight}>cloud technologies</strong>{" "}
            such as <strong className={styles.highlight}>Azure</strong> to
            design, scale, and deploy efficient data solutions.
          </p>
          <p className={styles.aboutText}>
            My interests span across{" "}
            <strong className={styles.highlight}>data analysis</strong>,{" "}
            <strong className={styles.highlight}>dashboard development</strong>,{" "}
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
        </div>
      </div>

      {/* Follow Me Section */}
      <div className={`container ${styles.followSection}`}>
        <div className="text-center">
          <h3 className={styles.followTitle}>Follow Me</h3>
          <div className={styles.socialIcons}>
            <a
              href="https://github.com/datacraftconnect"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <AiFillGithub size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/karthik-vengatesan-15bb6932/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <AiFillLinkedin size={40} />
            </a>
            <a
              href="https://instagram.com/your-instagram"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <AiOutlineInstagram size={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
