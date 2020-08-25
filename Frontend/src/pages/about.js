import React from "react"
import Layout from "../components/templates/Layout"
import HeroImage from "../components/atoms/HeroImage"
import CTA from "../components/atoms/CTA"

const about = () => {
  return (
    <Layout>
      <section className="about-wrapper">
        <HeroImage />
        <div className="info">
          <p>Hello, my name is Michał Nitka</p>
          <p>
            I'm looking for my first job as a Front end Developer. I am a person
            who assimilates knowledge quickly, I work very well in a team, can
            talk to the client and play Fifa well.
          </p>
          <p>
            It is difficult to find someone from the IT industry among my
            previous employers. However, they allowed me to develop in other
            areas. I worked as a team coordinator at Multikino, as an office
            administrator at ID Logistics and as a telecommunications
            installation and construction fitter for the PLAY mobile network.
          </p>
          <p>
            If you are looking for a person who will bring positive energy to
            your team. He does not know everything, but he is aware of his
            shortcomings in skills, which he quickly makes up for and is able to
            talk to the client, please contact me.
          </p>
          <CTA direction="/contact" styledClass="primary">
            Contact
          </CTA>
        </div>
      </section>
    </Layout>
  )
}

export default about
