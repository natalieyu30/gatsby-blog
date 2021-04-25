import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Button, Badge } from 'reactstrap'
import { slugify } from '../utils/utilFunctions'

const tagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext;
  return (
    <Layout pageTitle='All tags' >
      <SEO title='All tags' 
// @ts-ignore
      keywords={['tags', 'topics']} />
      <ul>
        {tags.map((tag, index) => (
          <li key={index} style={{marginBottom: '10px'}}>
            <Button color='info' href={`/tag/${slugify(tag)}`} className='text-uppercase'>
              {tag} <Badge color='light'>{tagPostCounts[tag]}</Badge>
            </Button>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default tagsPage
