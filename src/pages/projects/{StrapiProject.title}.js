import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../../components/Seo"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const ProjectTemplate = ({ data }) => {
  const { strapiProject } = data
  console.log(strapiProject)

  return (
    <>
      <Seo title={strapiProject?.title} />
      <main className="project-template-page">
        <h2>{strapiProject?.title}</h2>
        <p>{strapiProject?.description}</p>
        <div className="project-links" style={{ marginBottom: "2rem" }}>
          <a
            href={strapiProject?.github}
            target="_blank"
            className="btn"
            style={{ margin: "1rem" }}
          >
            Github link
          </a>
          <a
            href={strapiProject?.url}
            target="_blank"
            className="btn"
            style={{ margin: "1rem" }}
          >
            Live Demo
          </a>
        </div>

        <h2>Image gallery</h2>
        <div className="image-gallery-wrapper">
          {strapiProject.image_gallery.map((img, i) => {
            return (
              <div key={i} className="gellery-image">
                <GatsbyImage image={getImage(img.localFile)} />
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}

export const projectQuery = graphql`
  query projectQuery($title: String) {
    strapiProject(title: { eq: $title }) {
      description
      title
      url
      github
      main_image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      image_gallery {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default ProjectTemplate
