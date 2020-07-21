import React, { useRef } from "react"
import HeroImage from "../atoms/HeroImage"
import ButtonCTA from "../atoms/CTA"
import SocialLinks from "../atoms/SocialLinks"

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop)

const HeroSection = ({ styleClass }) => {
  const works = useRef(null)
  const executeScroll = () => scrollToRef(works)
  return (
    <section className={`section-center ${styleClass ? styleClass : ""}`}>
      <HeroImage />
      <aside className="hero-info">
        <h2>Hi, I'm Michał Nitka</h2>
        <p>I looking for my first job as junior front-end developer</p>
        <p>
          Hope you will find here, your next employee{" "}
          <span role="img" aria-label="winking face emoji">
            😉
          </span>
        </p>
        <div className="buttons-conteiner">
          <ButtonCTA styledClass="secondary"> Contact</ButtonCTA>
          <ButtonCTA onClick={executeScroll} styledClass="primary">
            My works
          </ButtonCTA>
        </div>
        <SocialLinks styleClass="hero-links" />
      </aside>
    </section>
  )
}

export default HeroSection
