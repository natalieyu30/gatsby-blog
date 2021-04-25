import React from 'react'
import Layout from '../components/layout'
import Post from '../components/Post'
import { graphql } from 'gatsby'
import authors from '../utils/authors'

const authorPosts = ({ data, pageContext }) => {
  const {totalCount} = data.allMarkdownRemark
  const author = authors.find(person => person.name === pageContext.authorName)
  const pageHeader = `${totalCount} post${totalCount === 1 ? '': 's'} by: ${pageContext.authorName}`


  return (
    <Layout 
      pageTitle={pageHeader}
      authorImageFluid={data.file.childImageSharp.fluid}
      postAuthor={author}>
      {data.allMarkdownRemark.nodes.map(node => (
        <Post key={node.id} post={node}/>
      ))}
    </Layout>
  )
}

export const authorQuery = graphql`
  query ($authorName: String, $imageUrl: String) {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {frontmatter: {author: {eq: $authorName}}}
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
    file(relativePath: {eq: $imageUrl}) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default authorPosts
