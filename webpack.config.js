 /**
 * This file is only in the project for eslint module resolution config
 * for our custom import path of @hhs so that eslint knows we're aliasing
 *
 */

const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@shared': path.resolve(__dirname, 'src/shared'),
    },
    extensions: ['.js'],
  },
}
