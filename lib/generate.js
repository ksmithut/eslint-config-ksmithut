'use strict'

const url = require('url')
const request = require('request-promise')
const cheerio = require('cheerio')
const json = require('comment-json')

const ESLINT_RULES_URL = 'http://eslint.org/docs/rules/'
const CONTAINER = 'body > main.doc > article:first-child'
const HEADINGS = `${CONTAINER} > h2:not(#removed)`

module.exports = function generate() {
  return request.get(ESLINT_RULES_URL)
    .then((body) => cheerio.load(body))
    .then(($) => {
      let rules = {}
      $(HEADINGS).each((headingIndex, elem) => {
        let heading = $(elem)
        let headingText = heading.text()
        let subHeading = heading.next('p')
        let subHeadingText = subHeading.text()
        let list = subHeading.next('ul').children('li')

        list.each((listIndex, elem) => {
          let li = $(elem)
          let link = li.children().first('a')
          let name = link.text()
          let fullPath = url.resolve(ESLINT_RULES_URL, link.attr('href'))
          let comment = li.text().replace(new RegExp(`^${name} - `), '').trim()
          let value = 0

          let comments = []

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

      let str = json.stringify({ rules }, null, 2)
      str = str.replace(/ {4}"([^"]*)":/g, '    \'$1\':')
      str = `'use strict'\n\nmodule.exports = ${str}\n`

      console.log(str)
    })
}
