import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Card, CardTitle, CardText, CardSubtitle, CardBody, Badge } from 'reactstrap'
import { slugify } from '../utils/utilFunctions'

const Post = ({post}) => {
  const { title, author, slug, date, tags, image } = post.frontmatter;
  const body = post.excerpt
  const fluid = image.childImageSharp.fluid
  return (
    <Card>
      <Link to={slug}>
        <Img className='card-image-top' fluid={fluid} />
      </Link>
      <CardBody>
        <CardTitle>
          <Link to={slug}>
            {title}
          </Link>
        </CardTitle>
        <CardSubtitle>
          <span className="text-info">{date}</span> by
          <span className="text-info"> {author}</span>
        </CardSubtitle>
        <CardText>{body}</CardText>
        <ul className="post-tags">
          {tags.map((tag, index) =>(
            <li key={index}>
              <Link to={`/tag/${slugify(tag)}`}>
                <h5><Badge color='info' className='text-uppercase'>{tag}</Badge></h5>
              </Link>
            </li>
          ))}
        </ul>
        <Link to={slug} className="btn btn-outline-primary float-right">Read more</Link>
      </CardBody>
    </Card>
  )
}

export default Post
