import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Michael</h1>
            <h3>Full stack web developer</h3>
            <h4 style={{ textTransform: "none" }}>
              Email: michael1994d@gmail.com
            </h4>
            <h4 style={{ textTransform: "none" }}>Phone: 054-4721640</h4>
            <Link className="btn" to="/contact">
              Contact me
            </Link>

            <div className="social-links">
              {socialLinks.map(link => {
                return (
                  <a key={link.id} href={link.url} className="social-link">
                    {link.icon}
                  </a>
                )
              })}
            </div>
          </div>
        </article>

        <StaticImage
          src="../assets/images/hero.svg"
          placeholder="blurred"
          className="hero-img"
          alt="portfolio"
        />
      </section>
    </header>
  )
}

export default Hero
