import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, Card, CardText, CardBody, CardTitle, Row } from 'reactstrap'
import authors from '../utils/authors'
import { slugify } from '../utils/utilFunctions'
// import { graphql } from 'gatsby'
import Img from 'gatsby-image'
// @ts-ignore
import Kylie from '../images/person1.jpeg'
// @ts-ignore
import Jay from '../images/person2.jpeg'
// @ts-ignore
import Natalie from '../images/person4.jpeg'
// @ts-ignore
import person3 from '../images/person3.jpeg'

const TeamPage = (props) => {
  console.log(props)
  return (
    <Layout pageTitle='Our Team'>
      team page
      <SEO title="Team" />
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
}


// const TeamPage = ({data}) => (

//   <Layout pageTitle='Our Team'>
//     <SEO title="Team" />
//     {authors.map((author, index) => (
//       <Row key={index} className='mb-4'>
//         <div className="col-md-4">
//           <Img alt={author.name} />
//         </div>
//         <div className="col-md-8">
//           <Card style={{minHeight: '100%'}}>
//             <CardBody>
//               <CardTitle>{author.name}</CardTitle>
//               <CardText>{author.bio}</CardText>
//               <Button color='info' href={`/author/${slugify(author.name)}`}>
//                 View posts
//               </Button>
//             </CardBody>
//           </Card>
//         </div>
//       </Row>
//     ))}
//   </Layout>  
// )

// export const getAuthorQuery = graphql`
//   query getAuthorQuery($imageUrl: String) {
//     allFile(filter: {relativePath: {eq: $imageUrl}}) {
//       nodes {
//         id
//         relativePath
//         childImageSharp {
//           fluid {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   }
// `

export default TeamPage



    