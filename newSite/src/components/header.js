import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Nav, Container, Navbar } from "react-bootstrap"
import logo from "../images/logo.png"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import { StaticImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css"

const Header = ({ siteTitle }) => (
  <>
    <Navbar bg="light" variant="light" expand="sm">
      <Container>
        <div style={{ width: "135px", height: "70px" }}>
          <StaticImage
            src="../images/logo.png"
            quality={95}
            placeholder="blurred"
            objectFit="contain"
            loading="eager"
            imgStyle={{ objectFit: "contain" }}
            layout="constrained"
            alt="gnom-ads logo"
          />
        </div>{" "}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav_links ms-auto">
            <AnchorLink className="nav-link" to="#about">
              About
            </AnchorLink>
            <AnchorLink className="nav-link" to="#clients">
              Clients
            </AnchorLink>
            <AnchorLink className="nav-link" to="#impact">
              Impact
            </AnchorLink>{" "}
            <AnchorLink className="nav-link" to="#team">
              Team
            </AnchorLink>
            <AnchorLink className="nav-link" to="#contact">
              Contact
            </AnchorLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
