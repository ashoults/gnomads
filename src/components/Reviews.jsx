import React from "react"
import { Container } from "react-bootstrap"
import Carousel from "react-bootstrap/Carousel"
const Reviews = ({ heading, reviews }) => {
  return (
    <div id="clients">
      <div className="team">
        <h2 className="text-center pb-0">{heading.heading}</h2>
      </div>
      <Container>
        <Carousel variant="dark">
          {reviews?.map(review => (
            <Carousel.Item className="mb-5  pb-5 ">
              <div className="row align-items-center">
                <div className="col-md-6">
                  {" "}
                  <a href={review.node.url} target="_blank">
                    <img
                      className=""
                      src={review.node.logo.url}
                      alt="First slide"
                      style={{ maxWidth: "100%" }}
                    />{" "}
                  </a>
                </div>
                <div className="col-md-6">
                  <p>{review.node.testimonial}</p>
                  <h4>{review.node.attribution}</h4>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  )
}

export default Reviews
