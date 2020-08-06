import React from "react"
import Title from "../atoms/SectionTitle"
import Skills from "../atoms/Skills"

const SkillsSection = ({ styleClass }) => {
  return (
    <section className={`section-center ${styleClass ? styleClass : ""}`}>
      <Title
        title="Technologies that I have used so far"
        styleClass={styleClass}
      />
      <Skills type="frontend" />
      <Skills type="backend" />
      <Skills type="other" />
    </section>
  )
}

export default SkillsSection
