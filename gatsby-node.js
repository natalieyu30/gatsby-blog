const path = require('path')
const authors = require('./src/utils/authors')
const _ = require('lodash')

const { slugify } = require('./src/utils/utilFunctions')

// exports.onCreateMode = ({ node, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === 'MarkdownRemark') {
//     const slugFromTitle = slugify(node.frontmatter.title)
//     createNodeField({
//       node, 
//       name: 'slug',
//       value: slugFromTitle
//     })
//   }
// }

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions
  const templates = {
    singlePostTemplate : path.resolve(`src/templates/single-post.js`),
    tagsPage : path.resolve(`src/templates/tags-page.js`),
    tagPosts : path.resolve(`src/templates/tag-post.js`)

  }
  const result = await graphql(`
    {
      allMarkdownRemark{
        nodes{
          frontmatter{
            author
            slug
            tags
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.nodes.forEach(post => {
    createPage({
      path: `/${post.frontmatter.slug}`,
      component: templates.singlePostTemplate,
      context: { 
        slug: post.frontmatter.slug,
        imageUrl: authors.find(author => author.name === post.frontmatter.author).imageUrl
      }
    })
  })
  
  let tags = []
  result.data.allMarkdownRemark.nodes.forEach(post => post.frontmatter.tags.forEach(tag => {
      tags.push(tag)
    })
  )

  let tagPostCounts = {}
  tags.forEach(tag => (
    tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
  ))
  tags = _.uniq(tags)

  createPage({
    path: '/tags',
    component: templates.tagsPage,
    context: {
      tags,
      tagPostCounts
    }
  })

  tags.forEach(tag => {
    createPage({
      path: `/tag/${slugify(tag)}`,
      component: templates.tagPosts,
      context: {
        tag
      }
    })
  })
}