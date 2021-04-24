import * as React from "react"
import Post from '../components/Post'
import { graphql, useStaticQuery } from 'gatsby'
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
            slug
            tags
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
    <Layout pageTitle='Welcome to NatDev Blog'>
      <Seo title="Home" />
      {data.allMarkdownRemark.nodes.map(node=> (
        <Post key={node.id} post={node} />
      ))}      
    </Layout>
  )
}

export default IndexPage
