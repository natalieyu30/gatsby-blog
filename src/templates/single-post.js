import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Card, CardBody, CardSubtitle, Badge } from 'reactstrap'
import { slugify } from '../utils/utilFunctions'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import authors from '../utils/authors'

const singlePost = ({data, pageContext}) => {
  // console.log(data)
  const post = data.markdownRemark.frontmatter
  const author = authors.find(author => author.name === post.author)
  const imageFluid = data.file.childImageSharp.fluid

  const baseUrl = `https://gatsbytutorial.code.ca/`
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
      <h3 className="text-center">Share this post</h3>
      <div className="text-center social-share-links">
        <ul>
          <li>
            <a href={'https://www.facebook.com/sharer/sharer.php?u=' + baseUrl + pageContext.slug} className="facebook" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f fa-2x" />
            </a>
          </li>
          <li>
            <a href={ 'https://twitter.com/share?url=' + baseUrl + pageContext.slug + '&text=' + post.title +'&via' + 'twitterHandle' } className="twitter" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x" />
            </a>
          </li>
          <li>
            <a href={ 'https://plus.intagram.com/share?url=' + baseUrl + pageContext.slug } className="instagram" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-2x" />
            </a>
          </li>
          <li>
            <a href={ 'https://plus.google.com/share?url=' + baseUrl + pageContext.slug } className="google" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-google fa-2x" />
            </a>
          </li>
          <li>
            <a href={ 'https://www.linkedin.com/shareArticle?url=' + baseUrl + pageContext.slug } className="linkedin" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x" />
            </a>
          </li>
        </ul>
      </div>
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
