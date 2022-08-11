const colors = require('./colors/colors.js')

const theme = require('./base/base.js')
const semantic_colors = require('./semantic-highlighting/semantic-colors.js')

module.exports = theme(colors, semantic_colors)