import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="socialIcon" />,
    url: "https://linkedin.com",
  },
  {
    id: 2,
    icon: <FaGithub className="socialIcon" />,
    url: "https://github.com",
  },
]

const SocialLinks = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="socialLink">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`socialLinks ${styleClass ? styleClass : ""}`}>
      {SocialLinks}
    </ul>
  )
}