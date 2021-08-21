import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

const IndexPage = ({
  data: {
    allStrapiProject: { nodes: projects },
  },
}) => {
  return (
    <>
      <Seo title="Home page" />
      <main>
        <Hero />
        <Services />
        <Jobs />
        <Projects
          title="Featured projects"
          showLink={true}
          projects={projects}
        />
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProject(
      filter: { featured: { eq: true } }
      sort: { fields: created_at, order: DESC }
    ) {
      nodes {
        main_image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
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

export default IndexPage
