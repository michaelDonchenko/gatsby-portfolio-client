import React from "react"
import Seo from "../components/Seo"
import { useForm, ValidationError } from "@formspree/react"

const Contact = () => {
  const [state, handleSubmit] = useForm("myylbngd")

  const showSuccess = () => {
    return (
      <p style={{ color: "green", margin: "1rem 0" }}>
        Message sent Succefully
      </p>
    )
  }

  return (
    <>
      <Seo title="Contact me" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>Get in touch</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control"
                required
              ></input>

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                required
              ></input>

              <textarea
                type="text"
                name="message"
                placeholder="Your message"
                rows={5}
                className="form-control"
                require
              ></textarea>

              {state.succeeded && showSuccess()}

              <button
                type="submit"
                disabled={state.submitting || state.succeeded}
                className="submit-btn btn"
              >
                {state.submitting ? "Loading..." : "Submit"}
              </button>
            </div>
          </form>
        </article>
      </section>
    </>
  )
}

export default Contact
