import React from "react"
import links from "../constants/links"
import socialLinks from "../constants/social_links"
import { Link } from "gatsby"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({ open, toggleOpen }) => {
  return (
    <aside className={open ? "sidebar show-sidebar" : "sidebar"}>
      <button className="close-btn" onClick={toggleOpen}>
        <FaTimes />
      </button>

      <div className="side-contaier">
        <ul className={open ? "sidebar-links" : null}>
          {links.map(link => {
            return (
              <li onClick={toggleOpen} key={link.id}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            )
          })}
        </ul>

        <ul className={open ? "social-links sidebar-icons" : null}>
          {socialLinks.map(link => {
            return (
              <li onClick={toggleOpen} className="social-link" key={link.id}>
                <a href={link.url}>{link.icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
