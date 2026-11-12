import { Typewriter } from "react-simple-typewriter";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaServer
} from "react-icons/fa";

import {
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiPostman
} from "react-icons/si";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <p className="tag">👋 Welcome to my portfolio</p>

        <h1>
          <Typewriter
            words={[
              "Frontend Developer",
              "Backend Developer",
              "React Developer",
              "JavaScript Developer",
              "UI Developer"
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>

        <h2>Hi, I'm Esham</h2>

        <p>
          I build modern, responsive and user-friendly web applications using
          HTML, CSS, JavaScript and React, along with powerful backend
          technologies like Node.js, Express.js and MongoDB to create
          fully functional full-stack web solutions.
        </p>

        <div className="hero-buttons">

          <a href="#projects">
            <button>View Projects</button>
          </a>

          <a href="#hire">
            <button className="contact-btn">Hire Me</button>
          </a>

          <a href="/Esham-Saleem-CV.png" download>
            <button className="resume-btn">Download CV</button>
          </a>

        </div>

        <div className="social-links">

          <a
            href="https://github.com/eshamsaleem2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/esham-saleem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:eshamsaleem2@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </div>

      {/* Animated Technology Explosion */}

      <div className="hero-right">

        <div className="circle"></div>

        <FaHtml5 className="tech-icon html-tech" />
        <FaCss3Alt className="tech-icon css-tech" />
        <FaJsSquare className="tech-icon js-tech" />
        <FaReact className="tech-icon react-tech" />

        <SiNodedotjs className="tech-icon node-tech" />
        <SiExpress className="tech-icon express-tech" />
        <SiMongodb className="tech-icon mongo-tech" />
        <SiTailwindcss className="tech-icon tailwind-tech" />

        <SiGit className="tech-icon git-tech" />
        <SiPostman className="tech-icon postman-tech" />

      </div>

    </section>
  );
}

export default Hero;