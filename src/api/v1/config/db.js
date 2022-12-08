const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/demo', (err) => {
    if (!err) {
        console.log('Connected to db')
    } else {
        console.log(err);
    }
}
)

module.exports = {db}