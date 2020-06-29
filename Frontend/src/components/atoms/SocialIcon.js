import React from "react"

const SocialIcon = ({ url, icon }) => {
  return (
    <li>
      <a href={url} className="social-icon">
        {icon}
      </a>
    </li>
  )
}

export default SocialIcon
