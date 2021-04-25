import * as React from "react"
import Post from '../components/Post'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import Seo from "../components/seo"
import PaginationLinks from '../components/PaginationLinks'

const IndexPage = () => {
  const postsPerPage = 2;
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: {order: DESC, fields: frontmatter___date}
        limit: 2
      ) {
        totalCount
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
                fluid(maxWidth: 550){
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
      <PaginationLinks currentPage={1} numberOfPages={Math.ceil(data.allMarkdownRemark.totalCount / postsPerPage) } />
    </Layout>
  )
}

export default IndexPage
