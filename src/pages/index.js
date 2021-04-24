import * as React from "react"
import Post from '../components/Post'
import { graphql, useStaticQuery } from 'gatsby'
import { Row, Col } from 'reactstrap'

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
        nodes {
          id
          frontmatter {
            title
            author
            date(formatString: "Do MMMM hh:mm")
            path
            image {
              childImageSharp {
                fluid{
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `)
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Home page</h1>
      <Row>
        <Col md='8'>
          {data.allMarkdownRemark.nodes.map(node=> (
            <Post key={node.id} post={node} />
          ))}
        </Col>
        <Col md='4'>
          <div style={{width:"100%", height:"100%", backgroundColor:"rgba(0,0,0,0.5"}}></div>
        </Col>
      </Row>
    </Layout>
  )
}

export default IndexPage
