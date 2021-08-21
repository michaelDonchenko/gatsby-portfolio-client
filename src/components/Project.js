import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"

const Project = ({
  github,
  main_image,
  index,
  slug,
  tag,
  title,
  url,
  description,
}) => {
  return (
    <section className="project">
      <GatsbyImage
        image={getImage(main_image.localFile)}
        alt={title}
        className="project-img"
      />
      <div className="project-info">
        <span className="project-number">0{index + 1}</span>
        <Link to={`/projects/${slug}`} className="project-slug">
          <h3>{title}</h3>
          <p className="project-description">{description}</p>
        </Link>

        <div className="project-stack">
          {tag.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>

        <div className="project-links">
          <a href={github} target="_blank">
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url} target="_blank">
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Project
