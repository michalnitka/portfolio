import React from "react"
import Layout from "../components/templates/Layout"

const Contact = () => {
  return (
    <Layout>
      {
        <section className="contact-form-section">
          <h1>Contact with me</h1>
          <form
            className="contact-form"
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />

            <label htmlFor="email" id="email">
              Email
              <input type="email" name="email" id="email" />
            </label>

            <label htmlFor="name">
              Name
              <input type="text" name="name" id="name" />
            </label>

            <label htmlFor="message">
              Message
              <textarea
                type="text"
                name="message"
                id="message"
                cols="30"
                rows="5"
              />
            </label>

            <button type="submit">Send</button>
          </form>
        </section>
      }
    </Layout>
  )
}

export default Contact
