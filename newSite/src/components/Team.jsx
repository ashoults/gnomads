import React from "react"
import { Container } from "react-bootstrap"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"

const Team = ({ data, team, heading, questions }) => {
  console.log(questions, "que")
  return (
    <div id="team" className="team m-auto">
      <Container>
        <h2 className="text-center">{data.heading}</h2>
        <div className="row m-auto">
          {team?.map(team => (
            <div className="col-md-4 text-center">
              <div className="team_image">
                <GatsbyImage
                  image={getImage(team.node.photo)}
                  quality={95}
                  width="160px"
                  placeholder="blurred"
                  objectFit="contain"
                  loading="eager"
                  imgStyle={{ objectFit: "contain" }}
                  layout="constrained"
                  alt="icon1"
                />
              </div>
              <a href={team.node.linkedinUrl} target="_blank">
                <h3>{team.node.name}</h3>
              </a>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-12">
            {data?.body.map(para => (
              <p className="text-center mt-5 mb-5">{para.paragraph}</p>
            ))}

            <h3 className="text-center mb-4 pb-5">{heading.heading}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {questions?.map(question => (
              <div className="mb-4 pb-5">
                <h3 className="text-dark ">{question.node.question}</h3>
                <p style={{ whiteSpace: "pre-wrap" }}>{question.node.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Team
