import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout pageTitle='404: Not Found'>
    <Seo title="404: Not found" />
    <p>Something went wrong...</p>
    <Link className='btn btn-info' to={'/'}>Back Home</Link>
  </Layout>
)

export default NotFoundPage
