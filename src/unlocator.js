'use strict'

var async = require('async')
var Chance = require('chance')
var request = require('request').defaults({jar: true})

function _register(cb) {
  var chance = new Chance()
  var email = chance.email({domain: chance.domain()})
  var password = chance.sentence({words: 2}).replace(/\s+/g, '')
  var form = {
    'email': email,
    '_email': email,
    'pass': password,
    'i_agree': 1/*,
    '_qf_page-0_next': 'Next',
    '_save_': 'page-0',
    'product_id_page-0': '2-2'
    */
  }

  async.waterfall([
    function(cb) {
      var options = {
        url:'https://unlocator.com/account/signup/index',
        form: form
      }

      request.post(options, cb)
    },
    function(err, res, cb) {
      request(res.headers.location, cb)
    },
    function(err, res, body, cb) {
      var apiKey = body.match(/http:\/\/unlo\.it\/(\w*)/)
      cb(null, apiKey[1])
    }
  ], function(err, apikey) {
    console.log(apikey)
  })

}

function _update(apikey) {
  request('http://unlo.it/' + apikey)
}

module.exports = exports = {
  url: 'https://unlocator.com/',
  dns: ['185.037.037.037', '185.037.037.185'],
  update: _update,
  register: _register
}
