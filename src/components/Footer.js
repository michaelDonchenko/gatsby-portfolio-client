import React from "react"
import socialLinks from "../constants/social_links"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links social-links">
          {socialLinks.map(link => {
            return (
              <a key={link.id} href={link.url} className="social-link">
                {link.icon}
              </a>
            )
          })}
        </div>
      </div>
      <h4>
        Copyright &copy; {new Date().getFullYear()} <span>Mike-Dev</span> all
        rights reserve
      </h4>
    </footer>
  )
}

export default Footer
