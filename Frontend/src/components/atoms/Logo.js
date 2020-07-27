import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const Logo = () => {
  const {
    strapiLogo: {
      image: { childImageSharp: fluid },
    },
  } = useStaticQuery(graphql`
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
  `)

  return (
    <Link to="/">
      <Image
        fluid={fluid.fluid}
        className="navLogo"
        alt="Michał Nitka site logo"
      />
    </Link>
  )
}

export default Logo
