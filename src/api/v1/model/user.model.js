const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: {
        type: String
    },
    username: {
        type: String
    },
    plans: {
        type: String
    },
    status: {
        type: Boolean,
        default:false
    }
})

exports.userModel = mongoose.model("users", userSchema);
