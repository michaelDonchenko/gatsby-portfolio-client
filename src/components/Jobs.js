import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { useState } from "react"

const jobsQuery = graphql`
  {
    allStrapiJob(sort: { fields: created_at, order: DESC }) {
      nodes {
        title
        position
        date
        description {
          id
          text
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(jobsQuery)
  const {
    allStrapiJob: { nodes: jobs },
  } = data

  const [value, setValue] = useState(0)
  const { title, position, date, description } = jobs[value]

  return (
    <section className="section jobs">
      <Title title="Experience" />

      <div className="jobs-center">
        {/* buttons container */}
        <div className="btn-container">
          {jobs.map((job, i) => {
            return (
              <button
                onClick={() => setValue(i)}
                className={i === value ? "job-btn active-btn" : "job-btn"}
              >
                {job.position}
              </button>
            )
          })}
        </div>

        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{position}</h4>
          <p className="job-date">{date}</p>

          {description.map(item => {
            return (
              <div className="job-desc" key={item.id}>
                <FaAngleDoubleRight className="job-icon" />
                <p>{item.text}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default Jobs
