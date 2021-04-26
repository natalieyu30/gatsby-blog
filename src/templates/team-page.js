import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, Card, CardText, CardBody, CardTitle, Row } from 'reactstrap'
import authors from '../utils/authors'
import { slugify } from '../utils/utilFunctions'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const TeamPage = ({data, pageContext}) => {
  console.log(data, pageContext)
  // const fluid = data.allFile.nodes[0].childImageSharp.fluid
  return (
    <Layout pageTitle='Our Team'>
      <SEO title="Team" />
      {authors.map((author, index) => (
        <Row key={index} className='mb-4'>
          <div className="col-md-4">
            {/* <Img fluid={fluid} alt={author.name} /> */}
          </div>
          <div className="col-md-8">
            <Card style={{minHeight: '100%'}}>
              <CardBody>
                <CardTitle>{author.name}</CardTitle>
                <CardText>{author.bio}</CardText>
                <Button color='info' href={`/author/${slugify(author.name)}`}>
                  View posts
                </Button>
              </CardBody>
            </Card>
          </div>
        </Row>
      ))}
    </Layout>  
  )
}




export const getAuthorQuery = graphql`
  query getAuthorQuery($imageUrl: String) {
    allFile(filter: {relativePath: {eq: $imageUrl}}) {
      nodes {
        id
        relativePath
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default TeamPage



    