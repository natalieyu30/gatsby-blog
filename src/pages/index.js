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
            path
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
      {data.allMarkdownRemark.nodes.map(node=> (
        <Post key={node.id} post={node} />
      ))}
    </Layout>
  )
}

export default IndexPage
