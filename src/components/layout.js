import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from './Footer'
import Sidebar from './Sidebar'
import '../styles/index.scss'
import { Row, Col } from 'reactstrap'

const Layout = ({ children, pageTitle, authorImageFluid, postAuthor }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="container" id="content">
        <h1>{pageTitle}</h1>
        <Row>
          <Col md='8'>{children}</Col>
          <Col md='4'><Sidebar author={postAuthor} authorFluid={authorImageFluid} /></Col>
        </Row>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
