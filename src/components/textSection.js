import React from "react"
import { Container } from "react-bootstrap"

const TextSection = ({ data }) => {
  return (
    <div id="about" className="text-center text-section mt-5 mb-5">
      <Container>
        <h2>{data?.heading}</h2>
        <p>{data?.description}</p>
        <h2>{data?.secondHeading}</h2>
        <p>{data?.secondDescription} </p>
      </Container>
    </div>
  )
}

export default TextSection
