import React from 'react'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar'
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 750px;
  margin: auto;
  padding: 10px;
`

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
    }
    render={data => (
      <Container>
        <Helmet title={data.site.siteMetadata.title} />
        <Navbar title={data.site.siteMetadata.title}/>
        <div>{children}</div>
      </Container>
    )}
  />
)
