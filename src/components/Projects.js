import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"

const Projects = ({ title, projects, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects?.map((project, i) => {
          return <Project key={project.id} {...project} index={i} />
        })}
      </div>

      {showLink && (
        <Link to="/projects" className="btn center-btn">
          More projects
        </Link>
      )}
    </section>
  )
}

export default Projects
