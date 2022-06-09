import React from "react"
import { Container } from "react-bootstrap"

const Contact = ({ data }) => {
  return (
    <div id="contact" className="hero-bg">
      <Container>
        <h1
          className="text-center m-auto bold"
          style={{ maxWidth: "1000px", color: "white", fontWeight: "800" }}
        >
          {data.heading}
        </h1>
        <p
          className="text-center m-auto mt-4 mb-4"
          style={{ maxWidth: "770px", color: "white" }}
        >
          {data.text}
        </p>
        <a href={`mailto:${data.email}`} target="_blank">
          <button className="button">{data.buttonText}</button>
        </a>
      </Container>
    </div>
  )
}

export default Contact
