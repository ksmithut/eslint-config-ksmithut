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
    extends: [],
    rules: {}
  }

  return request.get(ESLINT_RULES_URL)
    .then((body) => cheerio.load(body))
    .then(($) => {
      $(HEADINGS).each((headingIndex, elem) => {
        const heading = $(elem)
        const headingText = heading.text()
        const subHeading = heading.next('p')
        const subHeadingText = subHeading.text()
        const list = subHeading.next('ul').children('li')

        list.each((listIndex, liElem) => {
          const li = $(liElem)
          const link = li.children().first('a')
          const name = link.text()
          const fullPath = url.resolve(ESLINT_RULES_URL, link.attr('href'))
          const comment = li.text()
            .replace(new RegExp(`^${name} - `), '')
            .trim()
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

          root.rules[`// ${name}`] = comments
          root.rules[name] = 0
        })
      })

      const config = merge.recursive(root, defaultConfig)

      return json.stringify(config, null, 2)
    })
}
