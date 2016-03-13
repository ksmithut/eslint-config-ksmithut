#!/usr/bin/env node
'use strict'

const path = require('path')
const fs = require('fs')
const Promise = require('bluebird')
const generate = require('../lib/generate')

const FILE_PATH = path.resolve(__dirname, '..', '.eslintrc-generated.json')

Promise.promisifyAll(fs)

generate()
  .then((str) => fs.writeFileAsync(FILE_PATH, str))
