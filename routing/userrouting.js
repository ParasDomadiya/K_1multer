var express = require('express')
var route = express.Router()

var { abc,display } = require('../controller/uisercontroller')


route.post('', abc);

route.post('/display', display);


module.exports = route