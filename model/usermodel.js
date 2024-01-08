var mongoose = require('mongoose')
const userSchema = new mongoose.Schema({

    fname: {
        type: String,
        maxlength: 50,
        default: 'raja raam',
        // trim: true
    },
    mobile: {
        type: Number,
    },
    document: {
        type: String,
        maxlength: 100,
        required: true,
        // trim: true
    },
    image: {
        type: [String]
    }
})

module.exports = mongoose.model('userimages', userSchema)