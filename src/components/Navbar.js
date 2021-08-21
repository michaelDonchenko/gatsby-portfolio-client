import React from "react"
import logo from "../assets/images/logo2.svg"
import { FaAlignRight } from "react-icons/fa"
import pageLinks from "../constants/links"
import { Link } from "gatsby"

const Navbar = ({ toggleOpen }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img style={{ height: "50px" }} src={logo} alt="logo" />

          <button onClick={toggleOpen} type="button" className="toggle-btn">
            <FaAlignRight />
          </button>
        </div>

        <div className="nav-links">
          {pageLinks.map(link => {
            return (
              <Link key={link.id} to={link.url}>
                {link.text}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
