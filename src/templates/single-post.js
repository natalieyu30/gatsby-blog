import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Card, CardBody, CardSubtitle, Badge } from 'reactstrap'
import { slugify } from '../utils/utilFunctions'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import authors from '../utils/authors'

const singlePost = ({data}) => {
  // console.log(data)
  const post = data.markdownRemark.frontmatter
  const author = authors.find(author => author.name === post.author)
  const imageFluid = data.file.childImageSharp.fluid
  return (
    <Layout pageTitle={post.title} postAuthor={author} authorImageFluid={imageFluid}>
      <SEO title={post.title} />
      <Card>
        <Img className='card-image-top' fluid={post.image.childImageSharp.fluid} />
        <CardBody>
          <CardSubtitle>
            <span className="text-info">{post.date}</span> by{' '}
            <span className="text-info">{post.author}</span>
          </CardSubtitle>
          <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
          <ul className="post-tags">
            {post.tags.map((tag, index) => (
              <li key={index}>
                <Link to={`/tag/${slugify(tag)}`}>
                  <h5><Badge color='info'>{tag}</Badge></h5>
                </Link>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String, $imageUrl: String){
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      id
      html
      frontmatter {
        title
        author
        tags
        date(formatString: "MMM Do YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
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

export default singlePost
