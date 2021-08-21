import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
      <Seo title="Error page not found" />
      <main className="error-page">
        <div className="error-container">
          <h1>404</h1>
          <h3>Page not found...</h3>
          <Link to="/" className="btn">
            Back to home
          </Link>
        </div>
      </main>
    </>
  )
}

export default Error
