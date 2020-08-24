import React from "react"
import Project from "../atoms/Project"
import Title from "../atoms/SectionTitle"
import Button from "../atoms/CTA"

const ProjectsSection = () => {
  return (
    <section className="projects-wrapper" id="works">
      <Title title="Featured projects" styleClass="dark" />
      <Project />
      <Button direction="/projects" styledClass="secondary">
        All projects
      </Button>
    </section>
  )
}

export default ProjectsSection
