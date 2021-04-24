import React from 'react'
import { Card, CardTitle, CardBody, CardText, Form, FormGroup, Input, Button } from 'reactstrap'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

const Sidebar = ({ author, authorFluid }) => {
  const {allMarkdownRemark:{nodes:blogs}} = useStaticQuery(sidebarQuery);

  return (
    <div>
      {author && (
        <Card>
          <Img className='card-image-top' fluid={authorFluid}/>
          <CardBody>
            <CardTitle className='text-center text-uppercase mb-3'>{author.name}</CardTitle>
            <CardText>{author.bio}</CardText>
            <div className="author-social-links text-center">
              <ul>
                <li><a href={author.facebook} target='_blank' rel="noreferrer" className='facebook'><i className="fab fa-facebook-f fa-lg"></i></a></li>
                <li><a href={author.twitter} target='_blank' rel="noreferrer" className='twitter'><i className="fab fa-twitter fa-lg"></i></a></li>
                <li><a href={author.instagram} target='_blank' rel="noreferrer" className='instagram'><i className="fab fa-instagram fa-lg"></i></a></li>
                <li><a href={author.google} target='_blank' rel="noreferrer" className='google'><i className="fab fa-google fa-lg"></i></a></li>
                <li><a href={author.linkedin} target='_blank' rel="noreferrer" className='linkedin'><i className="fab fa-linkedin fa-lg"></i></a></li>
              </ul>
            </div>
          </CardBody>
        </Card>
      )}
      <Card>
        <CardBody>
          <CardTitle className="text-center text-uppercase mb-3">
            Newsletter
          </CardTitle>
          <Form className="text-center">
            <FormGroup>
              <Input type='email' name='email' placeholder='Your email address..' />
            </FormGroup>
            <Button outline color='info' className="text-uppercase">Subscribe</Button>
          </Form>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle className='text-center text-uppercase'>
              Advertisemnet
          </CardTitle>
          <img src='https://via.placeholder.com/320x200' alt='Advert' style={{width: '100%'}} />
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle className="text-center text-uppercase mb-3">
            recent posts
          </CardTitle>
          <div>
            {blogs.map(blog => (
              <Card key={blog.id} >
                <Link to={blog.frontmatter.slug}>
                  <Img className='card-image-top' fluid={blog.frontmatter.image.childImageSharp.fluid} />
                </Link>
                <CardBody>
                  <CardTitle>
                    <Link to={blog.frontmatter.slug} >
                      {blog.frontmatter.title}
                    </Link>
                  </CardTitle>
                </CardBody>
              </Card>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export const sidebarQuery = graphql`
  {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 3) {
      nodes {
        id
        frontmatter {
          title
          slug
          image {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

// export const authorQuery = graphql`
//   GetAuthor($imageUrl: String) {
//   file(relativePath: {eq: $imageUrl}) {
//     childImageSharp {
//       fluid(maxWidth: 300) {
//         src
//       }
//     }
//   }
// }
// `

export default Sidebar
