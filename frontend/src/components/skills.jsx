import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaServer,
  FaDatabase,
  FaCode,
  FaLock,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
} from "react-icons/si";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>

      <div className="skills-grid">

        {/* Frontend Skills */}

        <div className="skill-card">
          <FaHtml5 className="icon html" />
          <h3>HTML5</h3>
        </div>

        <div className="skill-card">
          <FaCss3Alt className="icon css" />
          <h3>CSS3</h3>
        </div>

        <div className="skill-card">
          <FaJs className="icon js" />
          <h3>JavaScript</h3>
        </div>

        <div className="skill-card">
          <FaReact className="icon react" />
          <h3>React</h3>
        </div>

        {/* Backend Skills */}

        <div className="skill-card">
          <FaNodeJs className="icon nodejs" />
          <h3>Node.js</h3>
        </div>

        <div className="skill-card">
          <SiExpress className="icon express" />
          <h3>Express.js</h3>
        </div>

        <div className="skill-card">
          <SiMongodb className="icon mongodb" />
          <h3>MongoDB</h3>
        </div>

        <div className="skill-card">
          <FaDatabase className="icon mongoose" />
          <h3>Mongoose</h3>
        </div>

        <div className="skill-card">
          <FaServer className="icon api" />
          <h3>REST APIs</h3>
        </div>

        <div className="skill-card">
          <FaLock className="icon jwt" />
          <h3>JWT Authentication</h3>
        </div>

        <div className="skill-card">
          <FaCode className="icon crud" />
          <h3>CRUD Operations</h3>
        </div>

        {/* Development Tools */}

        <div className="skill-card">
          <FaGitAlt className="icon git" />
          <h3>Git</h3>
        </div>

        <div className="skill-card">
          <FaGithub className="icon github" />
          <h3>GitHub</h3>
        </div>

      </div>
    </section>
  );
}

export default Skills;