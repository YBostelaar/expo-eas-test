const prettierConfig = require('eslint-config-custom/prettier')

const config = {
  ...prettierConfig,
  jsxBracketSameLine: true,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  printWidth: 140,
  importOrder: ['^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}

module.exports = config
