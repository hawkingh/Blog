import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 75vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
`

const NameHeader = styled.h1`
  font-size: 3.6rem;
  margin-bottom: 2;
`

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
            description
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description>{data.site.siteMetadata.description}</Description>
          <Description>お問い合わせやご連絡は、<a href= "https://scrapbox.io/keigahosoda/"> Scrapbox </a>や<a href= "https://twitter.com/hawking_h"> Twitter </a>をご覧ください。</Description>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: `khosoda`,
  subtitle: ``,
}

export default LandingBio
