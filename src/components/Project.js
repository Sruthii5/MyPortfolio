import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"

import data from "../yourdata"


const Project = () => {
  return (
    <div className="section" id="project">
      <div className="container">
        <div className="project-wrapper">
          <Fade bottom>
            <h1>Projects</h1>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              {data.projects.map(project => (
                <Card
                  key={project.id}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                  githubLink = {project.giturl}
                ></Card>
              ))}
            </Fade>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;
