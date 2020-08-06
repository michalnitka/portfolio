import React from "react"
import Layout from "../components/templates/Layout"
import HeroSection from "../components/organisms/HeroSection"
import SkillsSection from "../components/organisms/SkillsSection"

export default function Home() {
  return (
    <Layout>
      <HeroSection styleClass="section-dark" />
      <SkillsSection styleClass="section-light" />
    </Layout>
  )
}
