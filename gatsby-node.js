const path = require('path')
const authors = require('./src/utils/authors')

// const { slugify } = require('./src/utils/utilFunctions')

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
  const singlePostTemplate = path.resolve(`src/templates/single-post.js`)
  const result = await graphql(`
    {
      allMarkdownRemark{
        nodes{
          frontmatter{
            author
            slug
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.nodes.forEach(post => {
    createPage({
      path: `/${post.frontmatter.slug}`,
      component: singlePostTemplate,
      context: { 
        slug: post.frontmatter.slug,
        imageUrl: authors.find(author => author.name === post.frontmatter.author).imageUrl
      }
    })
  })
}