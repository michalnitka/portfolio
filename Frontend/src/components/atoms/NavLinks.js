import React from "react"
import { Link } from "gatsby"

const pages = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "projects",
    url: "/projects/",
  },

  {
    id: 3,
    text: "about",
    url: "/about/",
  },
  {
    id: 4,
    text: "contact",
    url: "/contact/",
  },
]

const NavLinks = pages.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
export default ({ styleClass }) => {
  return (
    <ul className={`pageLinks ${styleClass ? styleClass : ""}`}>{NavLinks}</ul>
  )
}
