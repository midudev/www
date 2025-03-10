'use strict'

const path = require('path')

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: `markdown-in-js/babel`
  })
}

exports.onCreateWebpackConfig = ({ loaders, stage, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /^(xor|props)$/,
            use: loaders.null()
          },
          {
            test: /react-json-view/,
            use: loaders.null()
          }
        ]
      }
    })
  }

  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
  })
}

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  const blogIndexTemplate = path.resolve(`src/layouts/blog.js`)

  // Create blog index
  createPage({
    path: '/blog',
    component: blogIndexTemplate
  })
}
