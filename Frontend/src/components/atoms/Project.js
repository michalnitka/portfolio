import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Project = () => {
  const {
    allStrapiProjects: {
      nodes: {
        description,
        stack: { name, id },
        github,
        strapiId,
        title,
        url,
        image: {
          childImageSharp: { fluid },
        },
      },
    },
  } = useStaticQuery(graphql`
    {
      allStrapiProjects {
        nodes {
          description
          stack {
            name
            id
          }
          github
          title
          url
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          strapiId
        }
      }
    }
  `)
  return <div></div>
}

export default Project
