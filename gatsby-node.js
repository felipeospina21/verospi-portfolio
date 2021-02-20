const path = require("path")
// const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // const noviasTemplate = require.resolve(`./src/templates/novias.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.title,
      component: path.resolve(
        `./src/templates/${String(node.frontmatter.title)}.js`
      ),
      context: {
        title: node.frontmatter.title,
      },
    })
  })
}
