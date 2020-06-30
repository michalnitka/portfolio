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
    text: "about",
    url: "/about/",
  },

  {
    id: 3,
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
  return <ul className={styleClass ? styleClass : ""}>{NavLinks}</ul>
}