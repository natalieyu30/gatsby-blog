import React from 'react'
import Layout from '../components/layout'
import Post from '../components/Post'
import { graphql } from 'gatsby'

const tagPosts = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const pageHeader = `${totalCount} post${totalCount === 1 ? '':'s'} tagged with "${tag}"`

  return (
    <Layout pageTitle={pageHeader}>
      {data.allMarkdownRemark.nodes.map(node => (
        <Post key={node.id} post={node} fluid={node.frontmatter.image}>

        </Post>
      ))}
    </Layout>
  )
}


export const tagQuery = graphql`
  query($tag: String){
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {frontmatter: {tags: {eq: $tag}}}
    ) {
      totalCount
      nodes {
        id
        excerpt
        frontmatter {
          title
          date(formatString: "MMMM Do YYYY")
          author
          tags
          slug
          image {
            childImageSharp {
              fluid(maxWidth: 650) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
export default tagPosts
