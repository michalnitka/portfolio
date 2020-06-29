import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const data = graphql`
  {
    strapiLogo {
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const Logo = () => {
  const {
    strapiLogo: {
      image: { childImageSharp: fluid },
    },
  } = useStaticQuery(data)

  return (
    <Link to="/">
      <Image fluid={fluid.fluid} className="logo" />
    </Link>
  )
}

export default Logo
