import React from 'react'
import { Card, CardTitle, CardBody, Form, FormGroup, Input, Button } from 'reactstrap'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

const Sidebar = () => {
  const {allMarkdownRemark:{nodes:blogs}} = useStaticQuery(sidebarQuery);

  return (
    <div>
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
                <Link to={blog.frontmatter.path}>
                  <Img className='card-image-top' fluid={blog.frontmatter.image.childImageSharp.fluid} />
                </Link>
                <CardBody>
                  <CardTitle>
                    <Link to={blog.frontmatter.path} >
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
          path
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

export default Sidebar
