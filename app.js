var app = require('express')()
const multer = require("multer");
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
app.use(bodyParser.json(), bodyParser.urlencoded())


mongoose.connect('mongodb+srv://pdomadiya:paras%402011@domadiya.pptnoic.mongodb.net/paras').then(() => {
    console.log('************')
}).catch(err => {
    console.log(err)
})


var userRoute = require('./routing/userrouting')

app.use('/', userRoute)




app.listen(3008, () => {
    console.log('start...')
})
