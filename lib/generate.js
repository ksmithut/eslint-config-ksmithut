/* eslint-disable no-console */
'use strict'

const url = require('url')
const request = require('request-promise')
const cheerio = require('cheerio')
const json = require('comment-json')
const merge = require('merge')
const defaultConfig = require('../config/default')

const ESLINT_RULES_URL = 'http://eslint.org/docs/rules/'
const CONTAINER = 'body > main.doc > article:first-child'
const HEADINGS = `${CONTAINER} > h2:not(#removed):not(#deprecated)`

module.exports = function generate() {
  const root = {
    parser: 'esprima',
    parserOptions: {},
    env: {},
    globals: {},
    plugins: [],
    extends: [],
    rules: {},
  }

  return request.get(ESLINT_RULES_URL)
    .then((body) => cheerio.load(body))
    .then(($) => {
      $(HEADINGS).each((headingIndex, elem) => {
        const heading = $(elem)
        const headingText = heading.text()
        const subHeading = heading.next('p')
        const subHeadingText = subHeading.text()
        const list = subHeading.next('.rule-list').find('> tbody > tr')

        if (list.length <= 0) throw new Error('Update the scraping script')

        list.each((listIndex, liElem) => {
          const row = $(liElem)
          const link = $(row.children().get(2)).find('a')
          const name = link.text()
          const fullPath = url.resolve(ESLINT_RULES_URL, link.attr('href'))
          const comment = $(row.children().get(3)).text()
            .replace(new RegExp(`^${name} - `), '')
            .trim()
          const comments = [
            [ '' ],
            [ `// ${comment} - ${fullPath}` ],
          ]

          if (listIndex === 0) {
            comments[0] = [
              '/**',
              ` * ${headingText}`,
              ` * ${subHeadingText}`,
              ' */',
              '',
            ]
            if (headingIndex !== 0) comments[0].unshift('')
          }

          Object.assign(root.rules, {
            [`// ${name}`]: comments,
            [name]: 'off',
          })
        })
      })

      logDiff(root.rules, defaultConfig.rules, 'Rules you don\'t have')
      logDiff(defaultConfig.rules, root.rules, 'Extra rules you have')

      const config = merge.recursive(root, defaultConfig)

      return json.stringify(config, null, 2)
    })
}

function logDiff(src, check, message) {
  const diff = Object.keys(src).filter((key) => {
    return !check[key] && key.indexOf('// ') !== 0
  })

  if (diff.length) {
    console.log(`\n${message}:\n--------------------`)
    diff.forEach((key) => console.log(key))
    console.log()
  }
}
