import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container } from "react-bootstrap"

const Hero = ({ data }) => {
  const image = getImage(data.backgroundImage)

  return (
    <>
      <div style={{ display: "grid" }}>
        {/* You can use a GatsbyImage component if the image is dynamic */}
        <GatsbyImage
          style={{
            gridArea: "1/1",
          }}
          layout="fullWidth"
          aspectRatio={3 / 1}
          alt="background image"
          image={image}
          formats={["auto", "webp", "avif"]}
        />
        <div
          style={{
            gridArea: "1/1",
            position: "relative",
          }}
          className="d-flex flex-column justify-content-center align-items-center text-center hero-text"
        >
          <Container>
            <h1>{data.heading}</h1>
            <p>{data.overview}</p>
          </Container>
        </div>
      </div>
      <div className="hero-bg">
        <Container>
          <h3 className="text-center">{data.cta}</h3>
          <button className="button">{data.contactButton}</button>
        </Container>
      </div>
    </>
  )
}

export default Hero
