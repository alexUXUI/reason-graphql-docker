// Generated by BUCKLESCRIPT VERSION 2.0.0, PLEASE EDIT WITH CARE
'use strict'

var PromiseUtils = require('../utils/PromiseUtils.js')
var PostgresProvider = require('./PostgresProvider.js')

function make () {
  var timeout = PromiseUtils.cancelTimeout(
    10000,
    'DataProvider failed to initialize.'
  )
  var done_ = PostgresProvider.make(/* () */ 0)
  return Promise.race(/* array */ [timeout, done_]).then(function (postgres) {
    return Promise.resolve(/* record */ [/* postgres */ postgres])
  })
}

exports.make = make
/* PostgresProvider Not a pure module */