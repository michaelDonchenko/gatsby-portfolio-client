import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
  FaYoutube,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/michael.donchenko.10",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/michael-donchenko-39aa711b3/",
  },
  {
    id: 3,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/michaelDonchenko",
  },
  {
    id: 3,
    icon: <FaYoutube className="social-icon"></FaYoutube>,
    url: "https://www.youtube.com/channel/UCnOX2mLQzn3GE8Vzrddtx3g",
  },
  {
    id: 3,
    icon: <span className="social-icon">Blog</span>,
    url: "https://mikes-blog-gatsby.netlify.app/",
  },
]

export default data
