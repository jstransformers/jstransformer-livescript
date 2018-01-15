'use strict'

const liveScript = require('livescript')

exports.name = 'LiveScript'
exports.inputFormats = ['ls', 'livescript']
exports.outputFormat = 'js'

exports.render = liveScript.compile
