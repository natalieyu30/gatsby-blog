import React from 'react'
import Layout from '../components/layout'
import Post from '../components/Post'
import PaginationLinks from '../components/PaginationLinks'
import { graphql } from 'gatsby'


const postList = ({data, pageContext}) => {
  // console.log(data, pageContext)
  const posts = data.allMarkdownRemark.nodes
  const { currentPage, numberOfPages } = pageContext
  return (
    <Layout pageTitle={`Page: ${currentPage}`}>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
      <PaginationLinks currentPage={currentPage} numberOfPages={numberOfPages} />
    </Layout>
  )
}

export const postListQuery = graphql`
  query postListQuery($skip: Int, $limit: Int) {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}
      skip: $skip
      limit: $limit
    ) {
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

export default postList
