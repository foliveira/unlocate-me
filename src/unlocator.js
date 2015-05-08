'use strict'

var async = require('async')
var Chance = require('chance')
var request = require('request')

function _register(callback) {
  var chance = new Chance()
  var email = chance.email({domain: chance.domain()})
  var form = {
    'email': email,
    '_email': email,
    'pass': chance.sentence({words: 2}).replace(/\s+/g, ''),
    'i_agree': 1,
    '_qf_page-0_next': chance.word()
  }

  async.waterfall([
    function(cb) {
      var options = {
        url:'https://unlocator.com/account/signup/index',
        form: form,
        jar: true
      }

      request.post(options, cb)
    },
    function(res, body, cb) {
      request(res.headers.location, {jar: true}, cb)
    },
    function(res, body, cb) {
      var apiKey = body.match(/http:\/\/unlo\.it\/(\w*)/)

      cb(null, apiKey[1])
    }
  ], callback)
}

function _update(apiKey, callback) {
  if (!apiKey) {
    callback(new Error('No API Key provided'), null)
  }

  request('http://unlo.it/' + apiKey, function(err, res, body) {
    callback(err, body)
  })
}

module.exports = exports = {
  url: 'https://unlocator.com/',
  dns: ['185.037.037.037', '185.037.037.185'],
  update: _update,
  register: _register
}
