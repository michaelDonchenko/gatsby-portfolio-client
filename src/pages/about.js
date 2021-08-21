import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Title from "../components/Title"
import Seo from "../components/Seo"

const About = ({ data }) => {
  const {
    strapiAbout: { image, title, description, skill },
  } = data
  return (
    <>
      <Seo title="About me" />
      <section className="about-page">
        <div className="section-center about-center">
          <GatsbyImage
            layout="constrained"
            className="about-img-svg"
            image={getImage(image.localFile)}
          />
          <article className="about-text">
            <Title title={title} />
            <p>{description}</p>

            <div className="about-stack">
              {skill?.map(item => {
                return <span key={item.id}>{item.name}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  {
    strapiAbout {
      title
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
      description
      skill {
        id
        name
      }
    }
  }
`

export default About
