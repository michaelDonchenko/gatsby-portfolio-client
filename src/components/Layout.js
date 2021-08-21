import React, { useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

import "../assets/css/main.css"
const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <Navbar toggleOpen={toggleOpen} />
      <Sidebar open={open} toggleOpen={toggleOpen} />

      {children}

      <Footer />
    </>
  )
}

export default Layout
