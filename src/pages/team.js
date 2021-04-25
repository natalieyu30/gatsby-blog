import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
// @ts-ignore
import { Button, Card, CardText, CardBody, CardTitle, Row } from 'reactstrap'
import authors from '../utils/authors'
import { slugify } from '../utils/utilFunctions'
// @ts-ignore
import Kylie from '../images/person1.jpeg'
// @ts-ignore
import Jay from '../images/person2.jpeg'
// @ts-ignore
import Natalie from '../images/person4.jpeg'
import person3 from '../images/person3.jpeg'

const TeamPage = () => (
  <
// @ts-ignore
  Layout pageTitle='Our Team'>
    <Seo title="Team" 
// @ts-ignore
    keywords={[`gatsby`, `application`, `react`]}/>
    <Row className='mb-4'>
      <div className="col-md-4">
        <img src={Kylie} alt="profile" style={{maxWidth:'100%'}}/>
      </div>
      <div className="col-md-8">
        <Card style={{minHeight: '100%'}}>
          <CardBody>
            <CardTitle>{authors[0].name}</CardTitle>
            <CardText>{authors[0].bio}</CardText>
            <Button color='info' href={`/author/${slugify(authors[0].name)}`}>
              View posts
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
    <Row className='mb-4'>
      <div className="col-md-4">
        <img src={Jay} alt="profile" style={{maxWidth:'100%'}}/>
      </div>
      <div className="col-md-8">
        <Card style={{minHeight: '100%'}}>
          <CardBody>
            <CardTitle>{authors[1].name}</CardTitle>
            <CardText>{authors[1].bio}</CardText>
            <Button color='info' href={`/author/${slugify(authors[1].name)}`}>
              View posts
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
    <Row className='mb-4'>
      <div className="col-md-4">
        <img src={Natalie} alt="profile" style={{maxWidth:'100%'}}/>
      </div>
      <div className="col-md-8">
        <Card style={{minHeight: '100%'}}>
          <CardBody>
            <CardTitle>{authors[3].name}</CardTitle>
            <CardText>{authors[3].bio}</CardText>
            <Button color='info' href={`/author/${slugify(authors[3].name)}`}>
              View posts
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
    <Row className='mb-4'>
      <div className="col-md-4">
        <img src={person3} alt="profile" style={{maxWidth:'100%'}}/>
      </div>
      <div className="col-md-8">
        <Card style={{minHeight: '100%'}}>
          <CardBody>
            <CardTitle>{authors[2].name}</CardTitle>
            <CardText>{authors[2].bio}</CardText>
            <Button color='info' href={`/author/${slugify(authors[2].name)}`}>
              View posts
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
  </Layout>
)

export default TeamPage
