import React from "react"
import HeroImage from "../atoms/HeroImage"
import ButtonCTA from "../atoms/CTA"
import SocialLinks from "../atoms/SocialLinks"
import { Link } from "react-scroll"

const HeroSection = ({ styleClass }) => {
  return (
    <section className={`${styleClass ? styleClass : ""}`}>
      <HeroImage />
      <aside className="hero-info">
        <h2>Hi, I'm Michał Nitka</h2>
        <p>I'm looking for my first job as a junior front-end developer</p>
        <p>
          Hope you will find your next employee here{" "}
          <span role="img" aria-label="winking face emoji">
            😉
          </span>
        </p>
        <div className="buttons-conteiner">
          <ButtonCTA direction="/" styledClass="secondary">
            {" "}
            Contact
          </ButtonCTA>

          <Link className="btn primary" to="works" spy={true} smooth={true}>
            My works
          </Link>
        </div>
        <SocialLinks styleClass="hero-links" />
      </aside>
    </section>
  )
}

export default HeroSection
