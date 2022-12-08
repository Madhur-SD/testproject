const mongoose = require('mongoose');

const db = mongoose.connect('mongodb+srv://12345:12345@cluster0.b9h43w1.mongodb.net/?retryWrites=true&w=majority', (err) => {
    if (!err) {
        console.log('Connected to db')
    } else {
        console.log(err);
    }
}
)

module.exports = {db}