import React from "react"
import { Container } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Impact = ({ data }) => {
  const image = getImage(data?.logos[0])

  console.log(data)

  return (
    <div id="impact" className="hero-bg">
      <Container>
        <div className="row features">
          <div className="col-md-10 col-sm-12 text-center m-auto">
            <h2>{data?.heading}</h2>
            {data?.body.map(para => (
              <p>{para.paragraph}</p>
            ))}
            <div className="m-auto" style={{ width: "352px" }}>
              <GatsbyImage
                image={image}
                quality={95}
                placeholder="blurred"
                objectFit="contain"
                loading="eager"
                imgStyle={{ objectFit: "contain" }}
                layout="constrained"
                alt="icon1"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Impact
