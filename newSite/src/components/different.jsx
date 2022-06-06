import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { Container } from "react-bootstrap"

const Different = ({ data }) => {
  const image = getImage(data?.firstApproachImage)
  const secondImage = getImage(data?.secondApproachImage)
  const thirdImage = getImage(data?.thirdApproachImage)

  console.log(data, "data")

  return (
    <div className="hero-bg">
      <Container>
        <h2>{data?.approachHeading}</h2>
        <div className="row features ">
          <div className="col-md-4">
            <div style={{ width: "160px", height: "160px", margin: "auto" }}>
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
            <h3>{data?.firstApproachTitle}</h3>
            <p>{data?.firstApproachDescription}</p>
          </div>{" "}
          <div className="col-md-4">
            {" "}
            <div style={{ width: "160px", height: "160px", margin: "auto" }}>
              <GatsbyImage
                image={secondImage}
                quality={95}
                placeholder="blurred"
                objectFit="contain"
                loading="eager"
                imgStyle={{ objectFit: "contain" }}
                layout="constrained"
                alt="icon1"
              />
            </div>
            <h3>{data?.secondApproachTitle}</h3>
            <p>{data?.secondApproachDescription}</p>
          </div>
          <div className="col-md-4">
            <div style={{ width: "160px", height: "160px", margin: "auto" }}>
              <GatsbyImage
                image={thirdImage}
                quality={95}
                placeholder="blurred"
                objectFit="contain"
                loading="eager"
                imgStyle={{ objectFit: "contain" }}
                layout="constrained"
                alt="icon1"
              />
            </div>
            <h3>{data?.thirdApproachTitle}</h3>
            <p>{data?.thirdApproachDescription}</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Different
