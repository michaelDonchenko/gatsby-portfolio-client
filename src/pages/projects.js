import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

const ProjectsPage = ({
  data: {
    allStrapiProject: { nodes: projects },
  },
}) => {
  return (
    <>
      <Seo title="All projects" />
      <main>
        <section className="projects">
          <Projects title="Projects" projects={projects} />
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProject {
      nodes {
        main_image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        featured
        slug
        title
        tag {
          id
          title
        }
        url
        github
        description
      }
    }
  }
`

export default ProjectsPage
