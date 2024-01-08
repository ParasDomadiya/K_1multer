const express = require("express");
const multer = require("multer");
const path = require("path");
const userModel = require("../model/usermodel")

////////////////////////////////////////////////////////////////////////////////////////////
let upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, jb) => { jb(null, 'uplode/') },
        filename: (req, file, jb) => { jb(null, "paras" + Date.now() + file.originalname) }
    })
}).single( 'image')
//////////////////////////////////////////////////////////////////////////////////////////

// let storage = multer.diskStorage({
//      destination: (req, file, cb) => {cb(null, 'uplode/')},
//      filename: (res, file, cb) => {cb(null, "paras"+Date.now()+file.originalname )}
// });
// let  upload = multer({
//     storage
// }).any('paras')
// let upload = multer({
//     storage
// }).single('image') 

//////////////////////////////////////////////////////////////////////////////////////////

var abc = (req, res) => {
    try {
        upload(req, res, (err) => {
            if (err) {
                console.log('error')
                return res.send({ err: err.massge })
            }
            // var a = []
            // for (let index = 0; index < req.files.image.length; index++) {
            //     a.push(req.files.image[index].path)
            // }
            let obj = {
                fname: req.body.fname,
                mobile: req.body.mobile,
                // document: req.file.document[0].path,
                image: req.body.image[0].path
            }
            var dd = new userModel(obj)
            dd.save().then((result) => {
                return res.json(result +"paras")
            }).catch((err) => {
                return res.json({ "msg": err })
            });

        })
    } catch (error) {
        return res.json("massa" + error)
    }
}

// //  const abc = (req, res) => {
// //     try {
// //         upload(req, res, (err) => {
// //             if (err) {
// //                 console.log('error')
// //                 return res.send({ err: err })
// //             }
// //             console.log(req.body)
// //         })
// //     }
// //     catch (err) {
// //         return res.json({ "msg": err })
// //     }
// }

const display = (req, res) => {
    userModel.find().then((result) => {
        res.json({ data: result +":parasd"})
    }).catch((err) => {
        res.json({ "msgnnn": err.massge })
    });
}


module.exports = { abc, display };