import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import logo from "../images/cito-coffee-logo.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"

const Container = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  @media (max-width: 420px) {
    justify-content: flex-start;
    padding-top: 60px;
  }
`
const LogoContainer = styled.div`
  img {
    max-width: 60vw;
    width: 480px;
  }
`
const H2Container = styled.div`
  h2 {
    border-top: 6px solid #a8712f;
    border-bottom: 6px solid #a8712f;
    color: #ecdca8;
    font-family: AvenirNext;
    text-align: center;
    padding: 15px 0;
    max-width: 80vw;
    width: 600px;
  }
`
const SocialContainer = styled.div`
  a {
    display: inline-block;
    padding: 5px;
    margin: 10px;
  }
  img {
    height: 32px;
  }
`
const AddressContainer = styled.div`
  color: #ecdca8;
  font-family: AvenirNext;
`
const ComingSoon = () => {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "cito-coffee-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container fluid={data.backgroundImage.childImageSharp.fluid}>
      <LogoContainer>
        <img src={logo} alt="Cito Coffee" />
      </LogoContainer>
      <H2Container>
        <h2>COMING SOON</h2>
      </H2Container>
      <SocialContainer>
        <a
          href="https://instagram.com/citocoffee"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="Instagram" />
        </a>
        <a
          href="https://www.facebook.com/Cito-Coffee-100838955173950"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="Facebook" />
        </a>
      </SocialContainer>
      <AddressContainer>
        <p>400 W 4TH ST, SANTA ANA</p>
      </AddressContainer>
    </Container>
  )
}

export default ComingSoon
