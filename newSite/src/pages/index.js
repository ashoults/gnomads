import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import TextSection from "../components/textSection"
import Different from "../components/different"
import Impact from "../components/Impact"
import Team from "../components/Team"
import Reviews from "../components/Reviews"
import Contact from "../components/Contact"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <Hero data={data.datoCmsMainSection} />
    <TextSection data={data.datoCmsAbout} />
    <Different data={data.datoCmsAbout} />
    <Reviews
      heading={data.datoCmsClientSection}
      reviews={data.allDatoCmsClient.edges}
    />
    <Impact data={data.datoCmsImpactSection} />
    <Team
      data={data.datoCmsAboutUsSection}
      team={data.allDatoCmsTeamMember.edges}
      heading={data.datoCmsQuestionAnswerSection}
      questions={data.allDatoCmsNewQuestion.edges}
    />
    <Contact data={data.datoCmsContactSection} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
    datoCmsMainSection {
      heading
      cta
      overview
      contactButton
      backgroundImage {
        gatsbyImageData
      }
    }
    datoCmsAbout {
      heading
      description
      secondHeading
      secondDescription
      approachHeading
      firstApproachTitle
      firstApproachImage {
        gatsbyImageData
      }
      firstApproachDescription
      secondApproachTitle
      secondApproachImage {
        gatsbyImageData
      }
      secondApproachDescription
      thirdApproachTitle
      thirdApproachImage {
        gatsbyImageData
      }
      thirdApproachDescription
    }
    datoCmsImpactSection {
      heading
      body {
        paragraph
      }
      logos {
        gatsbyImageData
      }
    }
    datoCmsClientSection {
      heading
    }
    allDatoCmsClient {
      edges {
        node {
          url
          testimonial
          logo {
            url
          }
          attribution
        }
      }
    }
    datoCmsAboutUsSection {
      heading
      body {
        paragraph
      }
    }
    allDatoCmsTeamMember {
      edges {
        node {
          photo {
            gatsbyImageData
          }
          name
          linkedinUrl
        }
      }
    }
    datoCmsQuestionAnswerSection {
      heading
    }
    allDatoCmsNewQuestion {
      edges {
        node {
          question
          answer
        }
      }
    }
    datoCmsContactSection {
      buttonText
      email
      heading
      text
    }
  }
`
