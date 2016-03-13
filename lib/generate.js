'use strict'

const url = require('url')
const request = require('request-promise')
const cheerio = require('cheerio')
const json = require('comment-json')
const merge = require('merge')
const defaultConfig = require('../config/default')

const ESLINT_RULES_URL = 'http://eslint.org/docs/rules/'
const CONTAINER = 'body > main.doc > article:first-child'
const HEADINGS = `${CONTAINER} > h2:not(#removed)`

module.exports = function generate() {
  const root = {
    parser: 'esprima',
    parserOptions: {},
    env: {},
    globals: {},
    plugins: [],
    extends: []
  }

  return request.get(ESLINT_RULES_URL)
    .then((body) => cheerio.load(body))
    .then(($) => {
      let rules = {}
      $(HEADINGS).each((headingIndex, elem) => {
        const heading = $(elem)
        const headingText = heading.text()
        const subHeading = heading.next('p')
        const subHeadingText = subHeading.text()
        const list = subHeading.next('ul').children('li')

        list.each((listIndex, elem) => {
          const li = $(elem)
          const link = li.children().first('a')
          const name = link.text()
          const fullPath = url.resolve(ESLINT_RULES_URL, link.attr('href'))
          const comment = li.text().replace(new RegExp(`^${name} - `), '').trim()
          const value = 0

          const comments = []
          let headingComments = ['']

          if (listIndex === 0) {
            headingComments = [
              '/**',
              ` * ${headingText}`,
              ` * ${subHeadingText}`,
              ' */',
              ''
            ]
            if (headingIndex !== 0) headingComments.unshift('')
          }
          comments.push(headingComments)
          comments.push([`// ${comment} - ${fullPath}`])

          rules[`// ${name}`] = comments
          rules[name] = value
        })
      })

      const config = merge.recursive(root, defaultConfig)

      let str = json.stringify(config, null, 2)

      str = str.replace(/"([^"]*)":/g, '$1:')
      str = str.replace(/ {2}rules: {([/s/S]* {4})([^:]*):/g, '  rules: {$1\'$2\':')

      return str
    })
}
