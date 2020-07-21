import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// const query = graphql`
//   {
//     file(name: { eq: "hero-img" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

const HeroImage = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    {
      file(name: { eq: "hero-img" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="hero-img">
      <Img fluid={fluid} />
    </div>
  )
}

export default HeroImage
