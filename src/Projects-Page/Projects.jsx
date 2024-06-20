import React from "react";
import Github from "../../public/github.svg";
import "./Projects.css";
import { TabTitle } from "../../utils/GeneralFunctions";

const Projects = ({ projectsData }) => {

  TabTitle('Projects | Menuk Fernando')

  return (
    <>
      <main>
        {projectsData.map((props) => (
          <div className="card" key={props.id}>
            <div className="title-image">
              <h3>{props.name}</h3>
              <img
                src={`../../src/img/${props.img}`}
                alt={props.alt}
                width={props.width}
              />
            </div>
            <div className="desc">
              <h3>{props.description}</h3>
              <p>-- {props.languages}</p>
              <a href={props.link} target="_blank">
                <img src={Github} width={props.iconWidth} alt="Github" />
              </a>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default Projects;
