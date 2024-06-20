import React, { useEffect, useState } from "react";
import "./About.css";
import { TabTitle } from "../../utils/GeneralFunctions";

const About = () => {
  TabTitle("About | Menuk Fernando");

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const frontendSkills = [
    {
      name: "HTML5",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
      width: 60,
    },
    {
      name: "CSS3",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
      width: 60,
    },
    {
      name: "JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      width: 55,
    },
    {
      name: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      width: 60,
    },
    {
      name: "React Router",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg",
      width: 60,
    },
    {
      name: "Bootstrap",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg",
      width: 60,
    },
  ];

  const backendSkills = [
    {
      name: "Java",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
      width: 60,
    },
    {
      name: "Node.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
      width: 60,
    },
    {
      name: "MySQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
      width: 60,
    },
  ];

  const otherSkills = [
    {
      name: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg",
      width: 60,
    },
    {
      name: "GitHub",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg",
      width: 60,
    },
    {
      name: "VS Code",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg",
      width: 60,
    },
    {
      name: "Linux",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
      width: 60,
    },
    {
      name: "Photoshop",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
      width: 60,
    },
  ];

  return (
    <>
      <div className={`main mobile ${animate ? "animate" : ""}`}>
        <div className="section-title mobile">
          <h1>
            Hello, I'm <span>Menuk</span>
          </h1>
          <br />
          <h3>
            I'm a <span>Frontend Developer</span> with a passion for{" "}
            <span>Machine Learning</span>and <span>AI.</span>
          </h3>
        </div>

        <div className="section-about mobile">
          <p>
            I am pursuing a Higher National Diploma in Software Engineering at
            Saegis Campus. passionate about machine learning and AI. I am
            enthusiastic about exploring the latest advancements in these fields
            and constantly learning new techniques and algorithms. Check out
            some of my
            <a href="https://github.com/menukfernando" target="_blank">
              work here
            </a>
          </p>
          <br />

          <p>
            Outside of programming, I'm really into Olympic weightlifting and
            staying active. I also love kicking back and watching TV series in
            my free time. Balancing fitness and fun helps me stay relaxed and
            focused.
          </p>
        </div>
      </div>

      <div className={`skills mobile ${animate ? "animate" : ""}`}>
        <h2>Skills</h2>
        <div className="skill-set mobile">
          <div className="skill mobile">
            <h4>Frontend</h4>
            {frontendSkills.map((skill) => (
              <img
                key={skill.name}
                src={skill.src}
                alt={skill.name}
                width={skill.width}
              />
            ))}
          </div>

          <div className="skill mobile">
            <h4>Backend</h4>
            {backendSkills.map((skill) => (
              <img
                key={skill.name}
                src={skill.src}
                alt={skill.name}
                width={skill.width}
              />
            ))}
          </div>

          <div className="skill mobile">
            <h4>Other Skills</h4>
            {otherSkills.map((skill) => (
              <img
                key={skill.name}
                src={skill.src}
                alt={skill.name}
                width={skill.width}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main */}

      <div className={`main hideOnMobile ${animate ? "animate" : ""}`}>
        <div className="section-title hideOnMobile">
          <h1>
            Hello, I'm <span>Menuk</span>
          </h1>
          <br />
          <h3>
            I'm a <span>Frontend Developer</span> with a passion for{" "}
            <span>Machine Learning</span>and <span>AI.</span>
          </h3>
        </div>

        <div className="section-about hideOnMobile">
          <p>
            I am pursuing a Higher National Diploma in Software Engineering at
            Saegis Campus. passionate about machine learning and AI. I am
            enthusiastic about exploring the latest advancements in these fields
            and constantly learning new techniques and algorithms. Check out
            some of my
            <a href="https://github.com/menukfernando" target="_blank">
              work here
            </a>
          </p>
          <br />

          <p>
            Outside of programming, I'm really into Olympic weightlifting and
            staying active. I also love kicking back and watching TV series in
            my free time. Balancing fitness and fun helps me stay relaxed and
            focused.
          </p>
        </div>
      </div>

      <div className={`skills hideOnMobile ${animate ? "animate" : ""}`}>
        <h2>Skills</h2>
        <div className="skill-set">
          <div className="skill">
            <h4>Frontend</h4>
            {frontendSkills.map((skill) => (
              <img
                key={skill.name}
                src={skill.src}
                alt={skill.name}
                width={skill.width}
              />
            ))}
          </div>

          <div className="skill">
            <h4>Backend</h4>
            {backendSkills.map((skill) => (
              <img
                key={skill.name}
                src={skill.src}
                alt={skill.name}
                width={skill.width}
              />
            ))}
          </div>

          <div className="skill">
            <h4>Other Skills</h4>
            {otherSkills.map((skill) => (
              <img
                key={skill.name}
                src={skill.src}
                alt={skill.name}
                width={skill.width}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
